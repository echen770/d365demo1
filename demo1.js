if (typeof demo1 == "undefined") {
  demo1 = {
    __namespace: true,
  };
}

if (typeof demo1.validation == "undefined") {
  demo1.validation = {
    __namespace: true,
  };
}

if (typeof demo1.WebApiOps == "undefined") {
  demo1.WebApiOps = {
    __namespace: true,
  };
}

if (typeof demo1.misc == "undefined") {
  demo1.misc = {
    __namespace: true,
  };
}

if (typeof demo1.maintenance == "undefined") {
  demo1.maintenance = {
    __namespace: true,
  };
}

if (typeof demo1.ui == "undefined") {
  demo1.ui = {
    __namespace: true,
  };
}

demo1.misc.displayExceptionInfo = function (e) {
  // display the error message
  let alertStrings = {
    confirmButtonLabel: "PEACE!",
    text: e.stack,
    title: "Exception: " + e.message,
  };
  let alertOptions = { height: 800, width: 1200 };
  Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
};

demo1.misc.outputResponsetoConsole = function (response) {
  console.log("Status: %s %s", response.status, response.statusText, "url: ", response.url);
};

demo1.misc.breakupChangeSet = function (changeSet) {
  const maxRequestsSize = 1000;
  let changeSetArray = [];
  let CSASize = Math.ceil(changeSet.length / maxRequestsSize);
  let index = 0;
  while (index < CSASize) {
    changeSetArray.push(changeSet.slice(index * maxRequestsSize, (index + 1) * maxRequestsSize));
    index++;
  }
  return changeSetArray;
};

// Validation objects for each field to customize validation behavior
demo1.validation.fieldValidationList = class {
  constructor() {
    this.emailValidation = {
      fieldKey: "email",
      pattern:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      isValid: true,
      msgInvalid: "Invalid email address.",
    };
    this.phoneValidation = {
      fieldKey: "phone",
      pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      isValid: true,
      msgInvalid: "Invalid phone number.",
    };
  }
};

demo1.validation.fieldValidation = function (executionContext, displayName, logicalName) {
  try {
    let formContext = executionContext.getFormContext(); // get formContext
    let atrToBeValidated = formContext.getAttribute(logicalName);
    let fieldControl = formContext.getControl(logicalName);
    let fvl = new demo1.validation.fieldValidationList();

    // Iterate through the field validation list object to perform the validation
    for (const key in fvl) {
      if (Object.hasOwnProperty.call(fvl, key)) {
        const field = fvl[key];
        if (displayName.toLowerCase().includes(field.fieldKey)) {
          // Match validation object to field display name
          // Display the results of the validation
          if (demo1.validation.validateParttern(atrToBeValidated.getValue(), field.pattern)) {
            field.isValid = true;
            fieldControl.clearNotification(logicalName);
          } else {
            field.isValid = false;
            fieldControl.setNotification(field.msgInvalid, logicalName);
          }
        }
      }
    }
  } catch (e) {
    demo1.misc.displayExceptionInfo(e);
  }
};

demo1.validation.saveForm = function (executionContext) {
  try {
    let formContext = executionContext.getFormContext(); // get formContext
    let isValid = true;
    let myUniqueID = "demo1ValidationUniqueID";
    // Timeout value for form notifications
    let infoMsgDelay = 5000;
    let fvl = new demo1.validation.fieldValidationList();

    for (const key in fvl) {
      if (Object.hasOwnProperty.call(fvl, key)) {
        const element = fvl[key];
        if (!element.isValid) {
          isValid = false;
          break;
        }
      }
    }

    let saveFormEvent = executionContext.getEventArgs();
    if (!isValid) {
      saveFormEvent.preventDefault(); // Prevent the from from saving with validation error(s).
    } else {
      // clear all validation notifictions on save
      formContext.ui.clearFormNotification(myUniqueID);
      formContext.ui.setFormNotification("Saved.", "INFO", myUniqueID);
      setTimeout(() => {
        formContext.ui.clearFormNotification(myUniqueID);
      }, infoMsgDelay);
    }
  } catch (e) {
    demo1.misc.displayExceptionInfo(e);
  }
};

demo1.validation.validateParttern = function (str, pattern) {
  return str.match(pattern);
};

demo1.WebApiOps.createUpdateDataPayload = function (lookupLogicalName, updateTableName, relatedAttribute) {
  // define the data to update a record in the following format:
  // var data =
  // {
  //     "primarycontactid@odata.bind": "/contacts(61a0e5b9-88df-e311-b8e5-6c3be5a8b200)"
  // }
  let data = {};
  let propertyName = lookupLogicalName + "@odata.bind";
  let propertyValue = "/" + updateTableName + "s(" + relatedAttribute + ")";
  data[propertyName] = propertyValue;
  return data;
};

// for populating fk fields only
demo1.WebApiOps.createUpdatePayloadFKTable = function (lookupLogicalName, updateTableName, relatedAttribute) {
  // The Web API query returns all column names in lower case.
  // However, Dynamics defaults the first character after the publisher prefix to upper case.
  // See the fix below:
  let columnNameCapFixIndex = 6;
  lookupLogicalName =
    lookupLogicalName.slice(0, columnNameCapFixIndex) +
    lookupLogicalName.charAt(columnNameCapFixIndex).toUpperCase() +
    lookupLogicalName.slice(columnNameCapFixIndex + 1);

  // define the data to update a record in the following format:
  // var data =
  // {
  //     "primarycontactid@odata.bind": "/contacts(61a0e5b9-88df-e311-b8e5-6c3be5a8b200)"
  // }
  let data = {};
  let propertyName = lookupLogicalName + "@odata.bind";
  let propertyValue = "/" + updateTableName + "s(" + relatedAttribute + ")";
  data[propertyName] = propertyValue;
  return data;
};

demo1.WebApiOps.updateRequest = class {
  constructor(updateTableName, targetID, payload) {
    this.etn = updateTableName;
    this.id = targetID;
    this.payload = payload;
  }
  getMetadata() {
    return {
      boundParameter: null,
      parameterTypes: {},
      operationType: 2,
      operationName: "Update",
    };
  }
};

/**
 * @function setLookupRecord
 * @description Get the data from the updated field and set the data of another field
 * @param {object} executionContext - The execution context for events and to get form context.
 * @param {string} updateLogicalName - The logical name of the field that was updated.
 * @param {string} targetAttribute - The name of the attribute that needs to be looked up through a related table.
 * @param {string} updateTableName - The logical name of the table where the update will happen.
 * @param {string} lookupTableName - The logical name of the lookup table.
 * @param {string} lookupLogicalName - The logical name of the lookup field that holds the updated data as a result of this function.
 */
demo1.WebApiOps.setLookupRecord = async function (
  executionContext,
  updateLogicalName,
  targetAttribute,
  updateTableName,
  lookupTableName,
  lookupLogicalName
) {
  try {
    let formContext = executionContext.getFormContext(); // get formContext
    let targetID = formContext.data.entity.getId().slice(1, -1); // get the id of the current record

    // Get the date the user entered
    let updateAttribute = formContext.getAttribute(updateLogicalName);
    let fieldValue = updateAttribute.getValue();
    if (fieldValue != null) {
      // Check for empty field
      // TODO: add code to test control type and matching code for value retrieval
      let lookupId = fieldValue[0].id; // for lookup fields only
      let result = await Xrm.WebApi.retrieveRecord(lookupTableName, lookupId);
      let relatedAttribute = result[targetAttribute];

      // // Construct a request object from the metadata
      let payload = demo1.WebApiOps.createUpdateDataPayload(lookupLogicalName, updateTableName, relatedAttribute);
      let req = new demo1.WebApiOps.updateRequest(updateTableName, targetID, payload);

      // Use the request object to execute the function
      let response = await Xrm.WebApi.online.execute(req);
      if (!response.ok) {
        demo1.misc.outputResponsetoConsole(response);
      }
    } else {
      formContext.getAttribute(lookupLogicalName).setValue(null);
    }
  } catch (e) {
    demo1.misc.displayExceptionInfo(e);
  }
};

demo1.ui.toggleAssignment = function (executionContext, updateLogicalName, tabLogicalName, toggleLogicalName) {
  try {
    let formContext = executionContext.getFormContext(); // get formContext
    // Get the attribute from the updated control
    let updateAttribute = formContext.getAttribute(updateLogicalName);
    let fieldValue = updateAttribute.getValue();
    let tabObj = formContext.ui.tabs.get(tabLogicalName);
    let toggleControl = tabObj.sections.get(toggleLogicalName);
    toggleControl.setVisible(fieldValue == null ? false : true);
    formContext.data.refresh(true);
  } catch (e) {
    demo1.misc.displayExceptionInfo(e);
  }
};

demo1.ui.callFlow = function (flowName, recordGuid, formContext) {
  try {
    let employeeName = formContext.getAttribute("cra31_fullname").getValue();

    let flowUrl =
      "https://prod-131.westus.logic.azure.com:443/workflows/a920abddd40a43e6a788c5b57a06f5ac/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=A8A-Jb3y8rAqDn8meARKPym8V3q540C0M5U6UkfHMa4";
    let input = JSON.stringify({
      recordID: recordGuid.replace("{", "").replace("}", ""),
      flowName: flowName,
    });

    let req = new XMLHttpRequest();
    req.open("POST", flowUrl, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(input);

    Xrm.Navigation.openAlertDialog("The " + flowName + " Flow is grinding away for " + employeeName);
  } catch (e) {
    demo1.misc.displayExceptionInfo(e);
  }
};

/**
 * @function getCustomTableList
 * @description Get a list of custom tables for the current organization.
 * @param {string} schemaPrefix - The schema prefix for the current organization.
 * @param {string} fkTblName - The logical name of the table containing the foreign key value(s).
 * @param {string} exclusionString - A comma separated list of excluded column names.
 */
demo1.maintenance.getCustomTableList = async function (schemaPrefix, fkTblName, exclusionString) {
  try {
    const urlSuffix = "/api/data/v9.2/";
    const columnPrefix = "_" + schemaPrefix;
    const columnSuffix = "_value";
    const tableUrlSuffix = "s/";
    const odataSelect = "?$select=";
    const odataSelectIdSuffix = "id";
    let globalContext = Xrm.Utility.getGlobalContext();
    let requestUrl = globalContext.getClientUrl() + urlSuffix;
    let customTableList = [];
    let changeSetRequest = [];
    let requestSets = [];
    let exclusions = exclusionString.slice(1, -1).split(",");
    exclusions.push(fkTblName.slice(schemaPrefix.length, -1));

    // fetch api
    let response = await fetch(encodeURI(requestUrl));
    if (response.ok) {
      let data1 = await response.json();
      let tblList = data1.value;

      tblList.forEach(function (tbl) {
        let tblName = tbl.name;
        let excluded = false;
        exclusions.forEach(function (excl) {
          excluded = excluded || tblName.toLowerCase().includes(excl);
        });
        if (tblName.startsWith(schemaPrefix) && !excluded) {
          customTableList.push({
            name: tblName.substring(0, tblName.length - 1),
            column: "",
            value: [],
          });
        }
      });
    } else {
      demo1.misc.outputResponsetoConsole(response);
    }

    let fkTblRequestUrl = requestUrl + fkTblName + tableUrlSuffix;
    let res = await fetch(encodeURI(fkTblRequestUrl));
    if (res.ok) {
      let data2 = await res.json();
      let columnList = data2.value[0];
      let columnName = "";
      for (const key in columnList) {
        if (key.startsWith(columnPrefix)) {
        }
        if (key.startsWith(columnPrefix) && key.endsWith(columnSuffix)) {
          columnName = key.substring(1, key.length - columnSuffix.length);
          customTableList.forEach((ct) => {
            ctName = ct.name.toLowerCase();
            if (ctName.includes(columnName)) {
              ct.column = columnName;
            }
          });
        }
      }
    } else {
      demo1.misc.outputResponsetoConsole(res);
    }

    let fkTable = [];
    let fetchFkTableUrl = requestUrl + fkTblName + tableUrlSuffix + odataSelect + fkTblName + odataSelectIdSuffix;
    let res4 = await fetch(encodeURI(fetchFkTableUrl));

    if (!res4.ok) {
      demo1.misc.outputResponsetoConsole(res4);
    } else {
      let data4 = await res4.json();
      fkTable = data4.value;
    }

    console.log(customTableList);

    for (let i = 0; i < customTableList.length; i++) {
      const lookupTable = customTableList[i];
      if (lookupTable.column != "") {
        let idColumnName = lookupTable.name + odataSelectIdSuffix;
        let fetchLkptblUrl = requestUrl + lookupTable.name + tableUrlSuffix + odataSelect + idColumnName;
        let res3 = await fetch(encodeURI(fetchLkptblUrl));
        if (!res3.ok) {
          demo1.misc.outputResponsetoConsole(res3);
        } else {
          let data3 = await res3.json();
          lookupTable.value = await data3.value;
          for (let index = 0; index < fkTable.length; index++) {
            const fkRecord = fkTable[index];
            let fkrecordId = fkRecord[fkTblName + odataSelectIdSuffix];
            let maxIndex = lookupTable.value.length;
            let randomIndex = Math.floor(Math.random() * maxIndex);
            let realtedAttribute = lookupTable.value[randomIndex][lookupTable.name + odataSelectIdSuffix];
            let payload = demo1.WebApiOps.createUpdatePayloadFKTable(
              lookupTable.column,
              lookupTable.name,
              realtedAttribute
            );
            let request = new demo1.WebApiOps.updateRequest(fkTblName, fkrecordId, payload);
            changeSetRequest.push(request);
          }
        }
      }
    }

    // debugger;
    requestSets = demo1.misc.breakupChangeSet(changeSetRequest);
    console.log(requestSets);

    for (let index = 0; index < requestSets.length; index++) {
      const rs = requestSets[index];
      let response = await Xrm.WebApi.online.executeMultiple(rs);
      console.log(response);
    }
  } catch (e) {
    demo1.misc.displayExceptionInfo(e);
  }
};
