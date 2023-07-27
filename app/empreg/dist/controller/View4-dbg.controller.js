sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("empreg.controller.View4", {
            onInit: function () {
                this.oTable = this.byId("table0");
            },
            onFilter: function (oEvent) {
                // build filter array
                var aFilter = [];
                var sQuery = oEvent.getParameter("query");
                if (sQuery) {

                    aFilter.push(new Filter("city", FilterOperator.Contains, sQuery));
                }
                // filter binding
                var oList = this.byId("table0");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilter);
            }
        });
    });