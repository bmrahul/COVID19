import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private chart: am4maps.MapChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4maps.MapChart);
      chart.paddingRight = 20;

      let mapData = [
        { "id":"UA", "latitude": 48.856614, "longitude": 2.352222, "name":"Ukraine", "value":45190180, "color":"#E60000" },
        { "id":"AE", "latitude": 53.1355, "longitude": -57.6604,  "name":"United Arab Emirates", "value":7890924, "color": "#E60000" },
        { "id":"GB", "latitude": 19.3133, "longitude": -81.2546,  "name":"United Kingdom", "value":62417431, "color":"#E60000" },
        { "id":"US", "latitude": 37.09024, "longitude": -95.712891,  "name":"United States", "value":313085380, "color":"#E60000" }
      ];

      chart.geodata = am4geodata_worldLow;

      chart.projection = new am4maps.projections.Miller();

      let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.exclude = ["AQ"];
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeWidth = 0.5;
      polygonSeries.calculateVisualCenter = true;

      var polygonTemplate = polygonSeries.mapPolygons.template;
      // polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#E60000");

      let imageSeries = chart.series.push(new am4maps.MapImageSeries());
      imageSeries.data = mapData;
      imageSeries.dataFields.value = "value";

      let imageTemplate = imageSeries.mapImages.template;
      imageTemplate.propertyFields.latitude = "latitude";
      imageTemplate.propertyFields.longitude = "longitude";
      imageTemplate.nonScaling = true

      let circle = imageTemplate.createChild(am4core.Circle);
      circle.fillOpacity = 0.5;
      circle.propertyFields.fill = "color";
      circle.tooltipText = "{name}: [bold]{value}[/]";

      imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 4,
        "max": 30,
        "dataField": "value"
      });

      // imageTemplate.adapter.add("latitude", function(latitude, target) {
      //   let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
      //   if(polygon){
      //     return polygon.visualLatitude;
      //    }
      //    return latitude;
      // });

      // imageTemplate.adapter.add("longitude", function(longitude, target) {
      //   let polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
      //   if(polygon){
      //     return polygon.visualLongitude;
      //    }
      //    return longitude;
      // });


      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
