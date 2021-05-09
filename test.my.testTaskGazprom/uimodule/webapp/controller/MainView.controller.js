sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent",
  "sap/ui/core/HTML"
], function (Controller, History, UIComponent, HTML) {
  "use strict";
  return Controller.extend("test.my.testTaskGazprom.controller.MainView", {

    indicatorColor: function (val, minVal, el){
      return val <= minVal
        ? el === 'st' ? "background:#ea1414" : "border-color:#ea1414"
        : ''
    },

    onInit: function (oEvent) {
      let oHtml = this.byId("htmlControl");
      // let oModel = this.getOwnerComponent().getModel("towers");
      let oData = this.getOwnerComponent().getModel("towers").oData.towerIndicator;

      if (!oHtml) {
        let sHtml = "<div class='main'>";
        for (let data of oData) {
          sHtml +=
          "<div class='column'>"+
            "<h1>" +
            data.title +
            "</h1>" +
            "<h2>"+
            Math.round(data.value/data.maxValue*100)+
            "%</h2>" +
            "<hr class='status' style='"+
            this.indicatorColor(data.value,data.minValue, 'st')+
            "'>" +
            "<div class='tower'>" +
              "<hr class='top-line'>" +
              "<hr class='line'>" +
              "<div class='forIndicator'>" +
                "<div class='indicator' style='top:"+
                Math.round(100-(data.value/data.maxValue*100)) +
                "%;"+
                this.indicatorColor(data.value,data.minValue, 'st')+
                "'></div>"+
                "<div class='box'></div>" +
                "<hr class='line'>" +
                "<div class='box'></div>" +
                "<hr class='line'>" +
                "<div class='box'></div>" +
                "<hr class='line'>" +
                "<div class='box'></div>" +
              "</div>"+
              "<hr class='line'>" +
              "<div class='triangle'>" +
                "<div class='rectangle' style='"+
                this.indicatorColor(data.value,data.minValue, 'br')+
                "'></div>" +
              "</div>" +
            "</div>" +
            "<h3>Масса карналита</h3>" +
            "<h4>"+new Intl.NumberFormat('ru-RU').format(data.value) +
            "</h4>" +
            "<hr class='status' style='"+
            this.indicatorColor(data.value,data.minValue, 'st')+
            "'>"+
          "</div>"
        }

        sHtml += "</div>";
        let sId = this.createId("htmlControl");
        oHtml = new HTML(sId, {
          content: sHtml,
          preferDOM: false
        });

        let oLayout = this.byId("staticContentLayout");
        oLayout.addContent(oHtml);
      }
    }
  });
});
