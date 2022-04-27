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

ccc.util.CreateRequest = class {
  constructor(entityName, payload) {
    this.etn = entityName;
    this.payload = payload;
  }
  getMetadata() {
    return {
      boundParameter: null,
      parameterTypes: {},
      operationType: 2, // This is a CRUD operation. Use '0' for actions and '1' for functions
      operationName: "Create",
    };
  }
};

ccc.util.buildCreateDataPayload = function (...args) {
  // define the data to update a record in the following format:
  // var data =
  // {
  //     "primarycontactid@odata.bind": "/contacts(61a0e5b9-88df-e311-b8e5-6c3be5a8b200)"
  // }
  let data = {};
  let propertyName = lookupLogicalName + "@odata.bind";
  let propertyValue = "/" + lookupTableName + "s(" + relatedAttribute + ")";
  data[propertyName] = propertyValue;
  return data;
};

ccc.util.updateRequest = class {
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

ccc.util.buildUpdateDataPayload = function (lookupLogicalName, lookupTableName, relatedAttribute) {
  // define the data to update a record in the following format:
  // var data =
  // {
  //     "primarycontactid@odata.bind": "/contacts(61a0e5b9-88df-e311-b8e5-6c3be5a8b200)"
  // }
  let data = {};
  let propertyName = lookupLogicalName + "@odata.bind";
  let propertyValue = "/" + lookupTableName + "s(" + relatedAttribute + ")";
  data[propertyName] = propertyValue;
  return data;
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

ccc.reservation.setOccupancyRecords = async function (
  executionContext,
  targetTable,
  startdateLN,
  endDateLN,
  roomNumLN
) {
  const urlSuffix = "/api/data/v9.2/";
  const tableUrlSuffix = "s/";
  const odataSelect = "?$select=";
  const odataSelectIdSuffix = "id";
  const columnPrefix = "_";
  const columnSuffix = "_value";
  const listDate = [];
  try {
    let globalContext = Xrm.Utility.getGlobalContext(); // get the global context

    // compose the base request url, like "https://<organization URI>.crm.dynamics.com/api/data/v9.2/"
    let requestUrl = globalContext.getClientUrl() + urlSuffix;

    let formContext = executionContext.getFormContext(); // get the execution context

    // get the current table/entity name from the form context
    let tableName = formContext.data.entity.getEntityName();

    // get the current record from the form context, including entityType, id, and name
    let currentRecord = formContext.data.entity.getEntityReference();

    let startDate = formContext.getAttribute(startdateLN).getValue();
    let endDate = formContext.getAttribute(endDateLN).getValue();
    let roomNum = formContext.getAttribute(roomNumLN).getValue()[0];

    // let columnList = await ccc.util.getColumnList(tableName, requestUrl);

    console.log(startDate, endDate, roomNum);

    // let fetchTableUrl = requestUrl + tableName + tableUrlSuffix + odataSelect + columnList.join(",");

    // console.log(fetchTableUrl);

    // let result = await ccc.util.getTable(fetchTableUrl);

    // const startDate = "2017-02-01";
    // const endDate = "2017-02-10";
    // const dateMove = new Date(startDate);
    // let strDate = startDate;

    // while (strDate < endDate) {
    //   strDate = dateMove.toISOString().slice(0, 10);
    //   listDate.push(strDate);
    //   dateMove.setDate(dateMove.getDate() + 1);
    // }
  } catch (e) {
    ccc.util.displayExceptionInfo(e);
  }
};
