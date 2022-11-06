import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

function SellerData() {
              const data = [{
                "product": "aaa",
                "units": 10000,
                "color": am4core.color("#ED1C24")
              }, {
                "product": "bbb",
                "units": 20000,
                "color": am4core.color("#235789")
              }, {
                "product": "ccc",
                "units": 30000,
                "color": am4core.color("#F1D302")
              }, {
                "product": "aaa",
                "units": 2000,
                "color": am4core.color("#020100")
              }];
    var chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.data = data;
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "units";
        pieSeries.dataFields.category = "product";
        pieSeries.slices.template.propertyFields.fill = "color";
        chart.legend = new am4charts.Legend();
        chart.current = pieSeries;
        return (
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        );
}

function SellerData2(props) {
        var chart = am4core.create("chartdiv2", am4charts.XYChart3D);
        am4core.useTheme(am4themes_animated);
        chart.data = [{
            "country": "Units Sold",
            "litres": 301.9,
            "units": 250
          },  {
            "country": "Profits Earned",
            "litres": 139.9,
            "units": 99
          }, {
            "country": "Profits Earned",
            "litres": 128.3,
            "units": 85
          }, {
            "country": "New Customers",
            "litres": 76,
            "units": 93
          }, {
            "country": "New Products",
            "litres": 11,
            "units": 16
          }, {
            "country": "Average Reviews",
            "litres": 200,
            "units": 160
          }];
          var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "";
    
    var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Units";
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Sales";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    
    var series2 = chart.series.push(new am4charts.ColumnSeries3D());
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";
    series2.name = "Units";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    
      return (
        <div id="chartdiv2" style={{ width: "100%", height: "500px" }}></div>
      );
    }

function Data() {
        
        return (
                <>
                <h2 style={{textAlign:"center", padding:"10%"}}>A recap of the products sold so far</h2>
                <SellerData/>
                <h2 style={{textAlign:"center", padding:"10%"}}>Here's how you compare to other users!</h2>
                <SellerData2/>
                </>
        )
};

export default Data;