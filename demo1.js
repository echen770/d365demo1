if (typeof(demo1) == 'undefined') {
    demo1 = {
        __namespace: true
    }
}

demo1.validation = {
    // local variables
    myUniqueID: 'demo1ValidationUniqueID',

    // Validation objects for each field to customize validation behavior
    fieldValidationList: {
        emailValidation: {
            fieldKey: "email",
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            isValid: true,
            msgInvalid: "Invalid email address.",
        },
        phoneValidation: {
            fieldKey: "phone",
            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
            isValid: true,
            msgInvalid: "Invalid phone number.",
        }
    },

    // Timeout value for form notifications
    infoMsgDelay: 5000,

    fieldValidation: function(executionContext, displayName, logicalName) {
        //debugger;
        try {
            let formContext = executionContext.getFormContext(); // get formContext
            let atrToBeValidated = formContext.getAttribute(logicalName);
            let fieldControl = formContext.getControl(logicalName);

            // Iterate through the field validation list object to perform the validation
            for (const key in this.fieldValidationList) {
                if (Object.hasOwnProperty.call(this.fieldValidationList, key)) {
                    const field = this.fieldValidationList[key];
                    if (displayName.toLowerCase().includes(field.fieldKey)) { // Match validation object to field display name
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
    },

    saveForm: function(executionContext) {
        // debugger;
        try {
            let formContext = executionContext.getFormContext(); // get formContext
            let isValid = true;

            for (const key in this.fieldValidationList) {
                if (Object.hasOwnProperty.call(this.fieldValidationList, key)) {
                    const element = this.fieldValidationList[key];
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
                formContext.ui.clearFormNotification(this.myUniqueID);
                formContext.ui.setFormNotification("Saved.", 'INFO', this.myUniqueID);
                setTimeout(() => { formContext.ui.clearFormNotification(this.myUniqueID) }, this.infoMsgDelay);
            }
        } catch (e) {
            demo1.misc.displayExceptionInfo(e);
        }
    },

    validateParttern: function(str, pattern) {
        return str.match(pattern);
    }
}

demo1.WebApiOps = {
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
    setLookupRecord: function(
        executionContext,
        updateLogicalName,
        targetAttribute,
        updateTableName,
        lookupTableName,
        lookupLogicalName) {

        debugger;
        try {
            let formContext = executionContext.getFormContext(); // get formContext
            let targetID = formContext.data.entity.getId(); // get the id of the current record

            // Get the date the user entered
            let updateAttribute = formContext.getAttribute(updateLogicalName);
            let fieldValue = updateAttribute.getValue();
            if (fieldValue != null) { // Check for empty field

                // TODO: add code to test control type and matching code for value retrieval
                let lookupId = fieldValue[0].id; // for lookup fields only

                // Perform the lookup action
                Xrm.WebApi.retrieveRecord(
                    lookupTableName,
                    lookupId
                ).then(
                    function success(result) {
                        return result[targetAttribute]; // return the lookup result to the next Web api function
                    },
                    function(error) {
                        // handle error conditions
                        console.log(error.message);
                    }
                ).then(function(targetAttribute) { // sets the data in the form table based on the lookup result

                    // construct the data payload for the web api update using variables
                    let data = {};
                    let propertyName = lookupLogicalName + "@odata.bind";
                    let propertyValue = "/" + updateTableName + "s(" + targetAttribute + ")";
                    data[propertyName] = propertyValue;

                    // update the record
                    Xrm.WebApi.updateRecord(updateTableName, targetID, data).then(
                        function success(result) {
                            // refreshs the form to reflect the updated data
                            debugger;
                            formContext.data.refresh(true);
                        },
                        function(error) {
                            // handle error conditions
                            console.log(error.message);
                        }
                    );
                });
            }
        } catch (e) {
            demo1.misc.displayExceptionInfo(e);
        }
    }
}

demo1.ui = {
    toggleAssignment: function(executionContext, updateLogicalName, tabLogicalName, toggleLogicalName) {
        debugger;
        try {
            let formContext = executionContext.getFormContext(); // get formContext
            // Get the attribute from the updated control
            let updateAttribute = formContext.getAttribute(updateLogicalName);
            let fieldValue = updateAttribute.getValue();
            let tabObj = formContext.ui.tabs.get("tabLogicalName");
            let toggleControl = tabObj.sections.get(toggleLogicalName);
            toggleControl.setVisible((fieldValue == null) ? false : true); // hide control if field value is null(falsy)
            formContext.data.refresh(true);

        } catch (e) {
            demo1.misc.displayExceptionInfo(e);
        }
    }
}

demo1.misc = {
    displayExceptionInfo: function(e) {
        // display the error message
        let alertStrings = {
            confirmButtonLabel: "Yes, yes, I know, honey. Now SHUT UP!!!",
            text: e.stack,
            title: "Exception: " + e.message
        };
        let alertOptions = { height: 800, width: 1200 };
        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
    }
}