var wms_layers = [];


var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
    'title': 'Google Terrain Hybrid',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
    })
});

var lyr_GoogleSatellite_1 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

var lyr_GoogleMaps_2 = new ol.layer.Tile({
    'title': 'Google Maps',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    })
});
var format_purwokertoutara_3 = new ol.format.GeoJSON();
var features_purwokertoutara_3 = format_purwokertoutara_3.readFeatures(json_purwokertoutara_3,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_purwokertoutara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_purwokertoutara_3.addFeatures(features_purwokertoutara_3);
var lyr_purwokertoutara_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_purwokertoutara_3,
    maxResolution: 70.0111653806549,

    style: style_purwokertoutara_3,
    popuplayertitle: 'purwokerto utara',
    interactive: true,
    title: '<img src="styles/legend/purwokertoutara_3.png" /> purwokerto utara'
});
var format_BatasWilayahDesa_4 = new ol.format.GeoJSON();
var features_BatasWilayahDesa_4 = format_BatasWilayahDesa_4.readFeatures(json_BatasWilayahDesa_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_BatasWilayahDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahDesa_4.addFeatures(features_BatasWilayahDesa_4);
var lyr_BatasWilayahDesa_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_BatasWilayahDesa_4,
    style: style_BatasWilayahDesa_4,
    popuplayertitle: 'Batas Wilayah Desa',
    interactive: true,
    title: '<img src="styles/legend/BatasWilayahDesa_4.png" /> Batas Wilayah Desa'
});
var format_purwanegara_5 = new ol.format.GeoJSON();
var features_purwanegara_5 = format_purwanegara_5.readFeatures(json_purwanegara_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_purwanegara_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_purwanegara_5.addFeatures(features_purwanegara_5);
var lyr_purwanegara_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_purwanegara_5,
    maxResolution: 14.00223307613098,

    style: style_purwanegara_5,
    popuplayertitle: 'purwanegara',
    interactive: true,
    title: '<img src="styles/legend/purwanegara_5.png" /> purwanegara'
});
var format_Desa_6 = new ol.format.GeoJSON();
var features_Desa_6 = format_Desa_6.readFeatures(json_Desa_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Desa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_6.addFeatures(features_Desa_6);
var lyr_Desa_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Desa_6,
    maxResolution: 28.00446615226196,

    style: style_Desa_6,
    popuplayertitle: 'Desa',
    interactive: true,
    title: 'Desa<br />\
    <img src="styles/legend/Desa_6_0.png" /> Bancarkembar<br />\
    <img src="styles/legend/Desa_6_1.png" /> Bobosan<br />\
    <img src="styles/legend/Desa_6_2.png" /> Grendeng<br />\
    <img src="styles/legend/Desa_6_3.png" /> Karangwangkal<br />\
    <img src="styles/legend/Desa_6_4.png" /> Pabuaran<br />\
    <img src="styles/legend/Desa_6_5.png" /> Sumampir<br />\
    <img src="styles/legend/Desa_6_6.png" /> <br />' });
var format_PointKantorKec_7 = new ol.format.GeoJSON();
var features_PointKantorKec_7 = format_PointKantorKec_7.readFeatures(json_PointKantorKec_7,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PointKantorKec_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointKantorKec_7.addFeatures(features_PointKantorKec_7);
var lyr_PointKantorKec_7 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PointKantorKec_7,
    maxResolution: 14.00223307613098,
    minResolution: 0.28004466152261964,

    style: style_PointKantorKec_7,
    popuplayertitle: 'Point Kantor Kec',
    interactive: true,
    title: '<img src="styles/legend/PointKantorKec_7.png" /> Point Kantor Kec'
});
var format_Kuburan_8 = new ol.format.GeoJSON();
var features_Kuburan_8 = format_Kuburan_8.readFeatures(json_Kuburan_8,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Kuburan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_8.addFeatures(features_Kuburan_8);
var lyr_Kuburan_8 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Kuburan_8,
    maxResolution: 7.00111653806549,

    style: style_Kuburan_8,
    popuplayertitle: 'Kuburan',
    interactive: true,
    title: '<img src="styles/legend/Kuburan_8.png" /> Kuburan'
});
var format_BalaiDesa_9 = new ol.format.GeoJSON();
var features_BalaiDesa_9 = format_BalaiDesa_9.readFeatures(json_BalaiDesa_9,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_BalaiDesa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesa_9.addFeatures(features_BalaiDesa_9);
var lyr_BalaiDesa_9 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_BalaiDesa_9,
    maxResolution: 14.00223307613098,
    minResolution: 0.28004466152261964,

    style: style_BalaiDesa_9,
    popuplayertitle: 'BalaiDesa',
    interactive: true,
    title: '<img src="styles/legend/BalaiDesa_9.png" /> BalaiDesa'
});
var format_sekolah_10 = new ol.format.GeoJSON();
var features_sekolah_10 = format_sekolah_10.readFeatures(json_sekolah_10,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_sekolah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_10.addFeatures(features_sekolah_10);
var lyr_sekolah_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_sekolah_10,
    maxResolution: 7.00111653806549,

    style: style_sekolah_10,
    popuplayertitle: 'sekolah',
    interactive: true,
    title: '<img src="styles/legend/sekolah_10.png" /> sekolah'
});

lyr_GoogleTerrainHybrid_0.setVisible(true); lyr_GoogleSatellite_1.setVisible(true); lyr_GoogleMaps_2.setVisible(true); lyr_purwokertoutara_3.setVisible(true); lyr_BatasWilayahDesa_4.setVisible(false); lyr_purwanegara_5.setVisible(false); lyr_Desa_6.setVisible(false); lyr_PointKantorKec_7.setVisible(false); lyr_Kuburan_8.setVisible(false); lyr_BalaiDesa_9.setVisible(false); lyr_sekolah_10.setVisible(false);
var layersList = [lyr_GoogleTerrainHybrid_0, lyr_GoogleSatellite_1, lyr_GoogleMaps_2, lyr_purwokertoutara_3, lyr_BatasWilayahDesa_4, lyr_purwanegara_5, lyr_Desa_6, lyr_PointKantorKec_7, lyr_Kuburan_8, lyr_BalaiDesa_9, lyr_sekolah_10];
lyr_purwokertoutara_3.set('fieldAliases', { 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_BatasWilayahDesa_4.set('fieldAliases', { 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_purwanegara_5.set('fieldAliases', { 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Desa_6.set('fieldAliases', { 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_PointKantorKec_7.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama', });
lyr_Kuburan_8.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama', });
lyr_BalaiDesa_9.set('fieldAliases', { 'id': 'id', 'Nama': 'Nama', });
lyr_sekolah_10.set('fieldAliases', { 'id': 'id', 'nama': 'nama', });
lyr_purwokertoutara_3.set('fieldImages', { 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_BatasWilayahDesa_4.set('fieldImages', { 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_purwanegara_5.set('fieldImages', { 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Desa_6.set('fieldImages', { 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_PointKantorKec_7.set('fieldImages', { 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kuburan_8.set('fieldImages', { 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BalaiDesa_9.set('fieldImages', { 'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_sekolah_10.set('fieldImages', { 'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_purwokertoutara_3.set('fieldLabels', { 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_BatasWilayahDesa_4.set('fieldLabels', { 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_purwanegara_5.set('fieldLabels', { 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Desa_6.set('fieldLabels', { 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_PointKantorKec_7.set('fieldLabels', { 'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_Kuburan_8.set('fieldLabels', { 'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_BalaiDesa_9.set('fieldLabels', { 'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_sekolah_10.set('fieldLabels', { 'id': 'no label', 'nama': 'inline label - always visible', });
lyr_sekolah_10.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});