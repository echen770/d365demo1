if (typeof ccc == "undefined") {
  ccc = {
    __namespace: true,
  };
}

if (typeof ccc.util == "undefined") {
  ccc.util = {
    __namespace: true,
  };
}

if (typeof ccc.occupancy == "undefined") {
  ccc.occupancy = {
    __namespace: true,
  };
}

if (typeof ccc.reservation == "undefined") {
  ccc.reservation = {
    __namespace: true,
  };
}

if (typeof ccc.customer == "undefined") {
  ccc.customer = {
    __namespace: true,
  };
}

ccc.util.fieldValidationItem = class {
  constructor(regExp, msgInvalid) {
    this.regExp = regExp;
    this.isValid = true;
    this.msgInvalid = msgInvalid;
  }
};

ccc.util.outputResponsetoConsole = function (response) {
  console.log("Status: %s %s", response.status, response.statusText, "url: ", response.url);
};

ccc.util.getTable = async function (requestUrl) {
  let res = await fetch(encodeURI(requestUrl));
  if (!res.ok) {
    ccc.util.outputResponsetoConsole(res);
  } else {
    let data = await res.json();
    return data.value;
  }
};

ccc.util.getColumnList = async function (tableName, requestUrl) {
  try {
    let customColumnSignature = "_";
    let tempSuffix = `EntityDefinitions(LogicalName='${tableName}')/Attributes`;
    let tableMetaData = await ccc.util.getTable(requestUrl + tempSuffix);
    let columnList = [];

    for (let index = 0; index < tableMetaData.length; index++) {
      const metaData = tableMetaData[index];
      let columnName = metaData.LogicalName;
      if (columnName.includes(customColumnSignature)) {
        columnList.push(columnName);
      }
    }

    return columnList;
  } catch (e) {
    ccc.util.displayExceptionInfo(e);
  }
};

ccc.util.displayExceptionInfo = function (e) {
  // display the error message
  let alertStrings = {
    confirmButtonLabel: "PEACE!",
    text: e.stack,
    title: "Exception: " + e.message,
  };
  let alertOptions = { height: 800, width: 1200 };
  Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
};

ccc.util.checkGuidForBrackets = function (id) {
  return id.includes("{") ? id.slice(1, -1) : id;
};

ccc.util.validateParttern = function (str, pattern) {
  return pattern.test(str);
};

/**
 * @function fieldRegExValidation
 * @description for validating user input on text based controls, there can only be one associated control per attribute on the form
 * @param {object} executionContext the execution context
 * @param {string} msgInvalid the message to be displayed if the input is invalid
 * @param {string} regEx a string used to formulate the regular expression for validating the field, use
 * back-slash (\) character to escape special characters in the parameter field of the form event handler definition
 */
ccc.util.fieldRegExValidation = function (executionContext, msgInvalid, regEx) {
  try {
    let attrToBeValidated = executionContext.getEventSource();
    let fieldControl = attrToBeValidated.controls.get()[0]; // assuming there is only one control associated with the attribute

    // decalre a validation object for the control
    let regExp = new RegExp(`${regEx}`);
    let validationObject = new ccc.util.fieldValidationItem(regExp, msgInvalid);

    // test the field value against the regex pattern
    validationObject.isValid = ccc.util.validateParttern(attrToBeValidated.getValue(), validationObject.regExp);

    if (validationObject.isValid) {
      // clear the field notification
      fieldControl.clearNotification(fieldControl.name);
    } else {
      // set the field notification to the content of msgInvalid
      fieldControl.setNotification(validationObject.msgInvalid, fieldControl.name);
    }
  } catch (e) {
    ccc.util.displayExceptionInfo(e);
  }
};

ccc.util.formatField = function (executionContext) {
  try {
    let attr = executionContext.getEventSource();
    let fieldValue = attr.getValue();
    if (fieldValue != null) {
      let regex = /^[a-z]{1}\D+/;
      if (regex.test(fieldValue)) {
        let names = fieldValue.split(" ");
        for (let i = 0; i < names.length; i++) {
          names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        fieldValue = names.join(" ");
        attr.setValue(fieldValue);
      }
    }
  } catch (e) {
    ccc.util.displayExceptionInfo(e);
  }
};

ccc.util.randomStr = function (len, arr) {
  var ans = "";
  for (var i = len; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
};

ccc.util.generatePersonID = function (executionContext, idColumnLN) {
  try {
    const characterSetNum = "1234567890";
    const characterSetAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const stringLengthNum = 7;
    const stringLengthAlpha = 1;
    let formContext = executionContext.getFormContext(); // get the form context
    let attr = formContext.getAttribute(idColumnLN);
    let fieldValue = attr.getValue();
    if (fieldValue === null) {
      fieldValue =
        ccc.util.randomStr(stringLengthAlpha, characterSetAlpha) + ccc.util.randomStr(stringLengthNum, characterSetNum);
      attr.setValue(fieldValue);
    }
  } catch (e) {
    ccc.util.displayExceptionInfo(e);
  }
};

ccc.reservation.setDataPayloadOccupancy = function (
  lookupLogicalNameList,
  lookupTableNameList,
  lookupValueList,
  targetColumnName,
  targetColumnValue
) {
  // define the data to update/create a record in the following format:
  // var data =
  // {
  //    "name": "Sample Account",
  //    "primarycontactid@odata.bind": "/contacts(61a0e5b9-88df-e311-b8e5-6c3be5a8b200)"
  // }
  let data = {};

  for (let index = 0; index < lookupLogicalNameList.length; index++) {
    const lookupLN = lookupLogicalNameList[index];
    const lookupTableName = lookupTableNameList[index];
    const lookupValue = lookupValueList[index];
    let propertyName = `${lookupLN}@odata.bind`;
    if (lookupValue.includes("{")) {
      lookupValue = lookupValue.slice(1, -1);
    }
    let propertyValue = `/${lookupTableName}(${lookupValue})`;
    data[propertyName] = propertyValue;
  }
  data[targetColumnName] = targetColumnValue;
  return data;
};

/**
 * @function setOccupancyRecords
 * @description get the info from the reservation form on save and create the corresponding occupancy records in the occupancy table
 * @param {object} executionContext execution context
 * @param {string} targetTable the name of the table to write the occupancy records
 * @param {string} targetTableIdColumnName the name of the PK GUID column of the occupancy table
 * @param {string} lookupLogicalNames the name of the lookup columns, separated by comma, for composing the data payload
 * @param {string} lookupTableNames the name of the related lookup tables, separated comma,  for composing the data payload
 * @param {string} targetColumnName the name of the date column of the occupancy table
 * @param {string} filterColumnName the name of the reservation value column of the occupancy table
 * @param {string} startdateLN the logical name of the check-in date column of the reservation table
 * @param {string} endDateLN the logical name of the check-out date column of the reservation table
 * @param {string} roomNumLN the logical name of the room number column of the reservation table
 */
ccc.reservation.setOccupancyRecords = async function (
  executionContext,
  targetTable,
  targetTableIdColumnName,
  lookupLogicalNames,
  lookupTableNames,
  targetColumnName,
  filterColumnName,
  startdateLN,
  endDateLN,
  roomNumLN
) {
  const urlSuffix = "/api/data/v9.2/";
  const lookupLogicalNameList = lookupLogicalNames.split(",");
  const lookupTableNameList = lookupTableNames.split(",");

  try {
    let globalContext = Xrm.Utility.getGlobalContext(); // get the global context

    // compose the base request url, like "https://<organization URI>.crm.dynamics.com/api/data/v9.2/"
    let requestUrl = globalContext.getClientUrl() + urlSuffix;

    let formContext = executionContext.getFormContext(); // get the form context

    // get the current record from the form context, including entityType, id, and name
    let currentRecord = formContext.data.entity.getEntityReference();

    // check for existing occupancy records of the current reservation
    if (currentRecord == null) {
      let filterOption = `?$filter=${filterColumnName} eq ${ccc.util.checkGuidForBrackets(currentRecord.id)}`;
      let res = await Xrm.WebApi.retrieveMultipleRecords(targetTable, filterOption);
      let existingRecords = res.entities;
      if (existingRecords.length > 0) {
        // delete the related record
        for (let index = 0; index < existingRecords.length; index++) {
          const exRec = existingRecords[index];
          let response = await Xrm.WebApi.deleteRecord(
            targetTable,
            ccc.util.checkGuidForBrackets(exRec[targetTableIdColumnName])
          );
          console.log(response);
        }
      }
    }

    // get info for the reservation
    let startDate = new Date(formContext.getAttribute(startdateLN).getValue().toISOString().slice(0, 10));
    let endDate = new Date(formContext.getAttribute(endDateLN).getValue().toISOString().slice(0, 10));
    let roomNum = formContext.getAttribute(roomNumLN).getValue()[0];

    // get the list of dates for when the room will be occupied
    let dateList = [];
    while (startDate < endDate) {
      dateList.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    // set the room number and reservation ID for occupancy records
    let lookupValueList = [];
    lookupValueList.push(ccc.util.checkGuidForBrackets(roomNum.id));
    lookupValueList.push(ccc.util.checkGuidForBrackets(currentRecord.id));

    // iterate through the days of stay and create an occupancy record for each date per room for that reservation
    for (let index = 0; index < dateList.length; index++) {
      const date = dateList[index];
      let payload = ccc.reservation.setDataPayloadOccupancy(
        lookupLogicalNameList,
        lookupTableNameList,
        lookupValueList,
        targetColumnName,
        date
      );
      let result = await Xrm.WebApi.createRecord(targetTable, payload);
      console.log(result);
    }
  } catch (e) {
    ccc.util.displayExceptionInfo(e);
  }
};
