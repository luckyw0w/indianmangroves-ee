var Region = ee.FeatureCollection("users/tobishivang/mangrove_india"),
    L8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR"),
    L5 = ee.ImageCollection("LANDSAT/LT05/C01/T1_SR");
    
Map.centerObject(Region, 10);

// ..........................................................................................
var Image1990=L5.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('1990-01-01','1990-12-31').median();
Map.addLayer(Region, {}, 'Sunderbans');

var swir=Image1990.select('B5');
var nir=Image1990.select('B4');
var red=Image1990.select('B3');
var green=Image1990.select('B2');

var ndvi1990 = nir.subtract(red).divide(nir.add(red)).rename('NDVI 1990');
var ndwi1990 = green.subtract(nir).divide(green.add(nir)).rename('NDWI 1990');


var ndviParams = {min: -1, max: 1, palette: ['white','green']};
ndvi1990 = ndvi1990.clip(Region);
//Map.addLayer(ndvi1990, ndviParams, 'NDVI 1990');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi1990 = ndwi1990.clip(Region);
//Map.addLayer(ndwi1990, ndwiParams, 'NDWI 1990');

var ndvi1990_binary = ndvi1990.gt(0);
Map.addLayer(ndvi1990_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 1990');
var ndwi1990_binary = ndwi1990.gt(0);
Map.addLayer(ndwi1990_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 1990');

// ..........................................................................................

// ..........................................................................................
var Image1995=L5.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('1995-01-01','1995-12-31').median();

var swir=Image1995.select('B5');
var nir=Image1995.select('B4');
var red=Image1995.select('B3');
var green=Image1995.select('B2');

var ndvi1995 = nir.subtract(red).divide(nir.add(red)).rename('NDVI 1995');
var ndwi1995 = green.subtract(nir).divide(green.add(nir)).rename('NDWI 1995');


var ndviParams = {min: -1, max: 1, palette: ['white','green']};
ndvi1995 = ndvi1995.clip(Region);
//Map.addLayer(ndvi1995, ndviParams, 'NDVI 1990');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi1995 = ndwi1995.clip(Region);
//Map.addLayer(ndwi1995, ndwiParams, 'NDWI 1990');

var ndvi1995_binary = ndvi1995.gt(0);
Map.addLayer(ndvi1995_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 1995');
var ndwi1995_binary = ndwi1995.gt(0);
Map.addLayer(ndwi1995_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 1995');

// ..........................................................................................
// ..........................................................................................
var Image2000=L5.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('2000-01-01','2000-12-31').median();

var swir=Image2000.select('B5');
var nir=Image2000.select('B4');
var red=Image2000.select('B3');
var green=Image2000.select('B2');

var ndvi2000 = nir.subtract(red).divide(nir.add(red)).rename('NDVI 2000');
var ndwi2000 = green.subtract(nir).divide(green.add(nir)).rename('NDWI 2000');


var ndviParams = {min: -1, max: 1, palette: ['white','green']};
ndvi2000 = ndvi2000.clip(Region);
//Map.addLayer(ndvi2000, ndviParams, 'NDVI 2000');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi2000 = ndwi2000.clip(Region);
//Map.addLayer(ndwi2000, ndwiParams, 'NDWI 2000');

var ndvi2000_binary = ndvi2000.gt(0);
Map.addLayer(ndvi2000_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 2000');
var ndwi2000_binary = ndwi2000.gt(0);
Map.addLayer(ndwi2000_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 2000');

// ..........................................................................................
// ..........................................................................................
var Image2005=L5.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('2005-01-01','2005-12-31').median();

var swir=Image2005.select('B5');
var nir=Image2005.select('B4');
var red=Image2005.select('B3');
var green=Image2005.select('B2');

var ndvi2005 = nir.subtract(red).divide(nir.add(red)).rename('NDVI 2005');
var ndwi2005 = green.subtract(nir).divide(green.add(nir)).rename('NDWI 2005');


var ndviParams = {min: -1, max: 1, palette: ['white','green']};
ndvi2005 = ndvi2005.clip(Region);
//Map.addLayer(ndvi2005, ndviParams, 'NDVI 2005');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi2005 = ndwi2005.clip(Region);
//Map.addLayer(ndwi2005, ndwiParams, 'NDWI 2005');

var ndvi2005_binary = ndvi2005.gt(0);
Map.addLayer(ndvi2005_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 2005');
var ndwi2005_binary = ndwi2005.gt(0);
Map.addLayer(ndwi2005_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 2005');

// ..........................................................................................
// ..........................................................................................
var Image2010=L5.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('2010-01-01','2010-12-31').median();

var swir=Image2010.select('B5');
var nir=Image2010.select('B4');
var red=Image2010.select('B3');
var green=Image2010.select('B2');

var ndvi2010 = nir.subtract(red).divide(nir.add(red)).rename('NDVI 2010');
var ndwi2010 = green.subtract(nir).divide(green.add(nir)).rename('NDWI 2010');


var ndviParams = {min: -1, max: 1, palette: ['white','green']};
ndvi2010 = ndvi2010.clip(Region);
//Map.addLayer(ndvi2010, ndviParams, 'NDVI 2010');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi2010 = ndwi2010.clip(Region);
//Map.addLayer(ndwi2010, ndwiParams, 'NDWI 2010');

var ndvi2010_binary = ndvi2010.gt(0);
Map.addLayer(ndvi2010_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 2010');
var ndwi2010_binary = ndwi2010.gt(0);
Map.addLayer(ndwi2010_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 2010');

// ..........................................................................................
// ..........................................................................................
var Image2015=L8.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('2015-01-01','2015-12-31').median();

var SWIR=Image2015.select('B6');
var NIR=Image2015.select('B5');
var RED=Image2015.select('B4');
var GREEN=Image2015.select('B3');

var ndvi2015 = NIR.subtract(RED).divide(NIR.add(RED)).rename('NDVI 2015');
var ndwi2015 = GREEN.subtract(NIR).divide(GREEN.add(NIR)).rename('NDWI 2015');

var ndviParams = {min: -1, max: 1, palette: ['white','green']};
var ndvi2015 = ndvi2015.clip(Region);
//Map.addLayer(ndvi2015, ndviParams, 'NDVI 2015');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi2015 = ndwi2015.clip(Region);
//Map.addLayer(ndwi2015, ndwiParams, 'NDWI 2015');

var ndvi2015_binary = ndvi2015.gt(0);
Map.addLayer(ndvi2015_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 2015');
var ndwi2015_binary = ndwi2015.gt(0);
Map.addLayer(ndwi2015_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 2015');

// ......................................................................
var Image2020=L8.filterBounds(Region)
.filterMetadata('CLOUD_COVER','less_than',1)
.filterDate('2020-01-01','2020-12-31').median();

var SWIR=Image2020.select('B6');
var NIR=Image2020.select('B5');
var RED=Image2020.select('B4');
var GREEN=Image2020.select('B3');

var ndvi2020 = NIR.subtract(RED).divide(NIR.add(RED)).rename('NDVI 2020');
var ndwi2020 = GREEN.subtract(NIR).divide(GREEN.add(NIR)).rename('NDWI 2020');

var ndviParams = {min: -1, max: 1, palette: ['white','green']};
ndvi2020 = ndvi2020.clip(Region);
//Map.addLayer(ndvi2020, ndviParams, 'NDVI 2020');

var ndwiParams = {min: -1, max: 1, palette: ['white', 'blue']};
ndwi2020 = ndwi2020.clip(Region);
//Map.addLayer(ndwi2020, ndwiParams, 'NDWI 2020');

var ndvi2020_binary = ndvi2020.gt(0);
Map.addLayer(ndvi2020_binary ,{min: 0, max: 1, palette: ['white', 'darkgreen']},'NDVI Binary 2020');
var ndwi2020_binary = ndwi2020.gt(0);
Map.addLayer(ndwi2020_binary ,{min: 0, max: 1, palette: ['white', 'darkblue']},'NDWI Binary 2020');

// ......................................................................

var v_diffParams = {min: 0, max: 1, palette: [ 'white', 'darkgreen']};
var w_diffParams = {min: 0, max: 1, palette: [ 'white', 'darkblue']};


var ndvi_diff = ndvi1990_binary.subtract(ndvi2020_binary);
Map.addLayer(ndvi_diff,v_diffParams , "NDVI DIFF");
var ndwi_diff = ndwi2020_binary.subtract(ndwi1990_binary);
Map.addLayer(ndwi_diff,w_diffParams, "NDWI DIFF");

var ndvi_binary = [ndvi2020_binary, ndvi2015_binary, ndvi2010_binary, ndvi2005_binary ,ndvi2000_binary, ndvi1995_binary, ndvi1990_binary];

var area_calc = function(image) {
  var area = image.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: Region,
  scale: 30,
  maxPixels: 1e13
  });
  return area.values().get(0);
}
area_calc(ndvi1990_binary);
area_calc(ndwi1990_binary);
area_calc(ndvi1995_binary);
area_calc(ndwi1995_binary);
area_calc(ndvi2000_binary);
area_calc(ndwi2000_binary);
area_calc(ndvi2005_binary);
area_calc(ndwi2005_binary);
area_calc(ndvi2010_binary);
area_calc(ndwi2010_binary);
area_calc(ndvi2015_binary);
area_calc(ndwi2015_binary);
area_calc(ndvi2020_binary);
area_calc(ndwi2020_binary);
var ndvi_binary = ee.List([area_calc(ndvi1990_binary),area_calc(ndvi1995_binary),area_calc(ndvi2000_binary), area_calc(ndvi2005_binary), area_calc(ndvi2010_binary), area_calc(ndvi2015_binary), area_calc(ndvi2020_binary)]);
var ndwi_binary = ee.List([area_calc(ndwi1990_binary), area_calc(ndwi1995_binary), area_calc(ndwi2000_binary), area_calc(ndwi2005_binary), area_calc(ndwi2010_binary), area_calc(ndwi2015_binary), area_calc(ndwi2020_binary)]);
var years = ee.List([1990,1995,2000,2005,2010,2015,2020]);
print(years);
print(ndvi_binary);
print(ndwi_binary);

var chart = ui.Chart.array.values({array: ndvi_binary, axis: 0, xLabels: years})
                .setOptions({
                  title: 'NDVI',
                  hAxis: {
                    title: 'Years',
                    viewWindow: {min: 1990, max: 2020},
                    titleTextStyle: {italic: false, bold: true}
                  },
                  vAxis: {
                    title: 'Area',
                    //viewWindow: {min: 3000000, max: 2500000},
                    titleTextStyle: {italic: false, bold: true}
                  },
                  colors: ['1d6b99'],
                  lineSize: 5,
                  pointSize: 0,
                  legend: {position: 'none'}
                });
print(chart);

var chart2 = ui.Chart.array.values({array: ndwi_binary, axis: 0, xLabels: years})
                .setOptions({
                  title: 'NDWI',
                  hAxis: {
                    title: 'Years',
                    viewWindow: {min: 1990, max: 2020},
                    titleTextStyle: {italic: false, bold: true}
                  },
                  vAxis: {
                    title: 'Area',
                    //viewWindow: {min: 2000000, max: 2500000},
                    titleTextStyle: {italic: false, bold: true}
                  },
                  colors: ['1d6b99'],
                  lineSize: 5,
                  pointSize: 0,
                  legend: {position: 'none'}
                });
print(chart2);
