var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Pabuaran_3 = new ol.format.GeoJSON();
var features_Pabuaran_3 = format_Pabuaran_3.readFeatures(json_Pabuaran_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pabuaran_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pabuaran_3.addFeatures(features_Pabuaran_3);
var lyr_Pabuaran_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pabuaran_3,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_Pabuaran_3,
                popuplayertitle: 'Pabuaran',
                interactive: true,
                title: '<img src="styles/legend/Pabuaran_3.png" /> Pabuaran'
            });
var format_Kuburan_4 = new ol.format.GeoJSON();
var features_Kuburan_4 = format_Kuburan_4.readFeatures(json_Kuburan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_4.addFeatures(features_Kuburan_4);
var lyr_Kuburan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_4,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_Kuburan_4,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_4.png" /> Kuburan'
            });
var format_Kesehatan_5 = new ol.format.GeoJSON();
var features_Kesehatan_5 = format_Kesehatan_5.readFeatures(json_Kesehatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kesehatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_5.addFeatures(features_Kesehatan_5);
var lyr_Kesehatan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_5,
maxResolution:7.00111653806549,
 
                style: style_Kesehatan_5,
                popuplayertitle: 'Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_5.png" /> Kesehatan'
            });
var format_Sekolah_6 = new ol.format.GeoJSON();
var features_Sekolah_6 = format_Sekolah_6.readFeatures(json_Sekolah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_6.addFeatures(features_Sekolah_6);
var lyr_Sekolah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_6,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_Sekolah_6,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_6.png" /> Sekolah'
            });
var format_BalaiDesa_7 = new ol.format.GeoJSON();
var features_BalaiDesa_7 = format_BalaiDesa_7.readFeatures(json_BalaiDesa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesa_7.addFeatures(features_BalaiDesa_7);
var lyr_BalaiDesa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesa_7,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_BalaiDesa_7,
                popuplayertitle: 'Balai Desa',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesa_7.png" /> Balai Desa'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_Pabuaran_3.setVisible(true);lyr_Kuburan_4.setVisible(true);lyr_Kesehatan_5.setVisible(true);lyr_Sekolah_6.setVisible(true);lyr_BalaiDesa_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleTerrainHybrid_2,lyr_Pabuaran_3,lyr_Kuburan_4,lyr_Kesehatan_5,lyr_Sekolah_6,lyr_BalaiDesa_7];
lyr_Pabuaran_3.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Kuburan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Kesehatan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sekolah_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BalaiDesa_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pabuaran_3.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Kuburan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Kesehatan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sekolah_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BalaiDesa_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pabuaran_3.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Kuburan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_Kesehatan_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_Sekolah_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_BalaiDesa_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_BalaiDesa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});