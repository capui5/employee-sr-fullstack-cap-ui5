sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,i){"use strict";return e.extend("empreg.controller.View4",{onInit:function(){this.oTable=this.byId("table0")},onFilter:function(e){var r=[];var n=e.getParameter("query");if(n){r.push(new t("city",i.Contains,n))}var a=this.byId("table0");var o=a.getBinding("items");o.filter(r)}})});