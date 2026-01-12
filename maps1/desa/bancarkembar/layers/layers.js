var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_1 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_DesaBancarKembar_3 = new ol.format.GeoJSON();
var features_DesaBancarKembar_3 = format_DesaBancarKembar_3.readFeatures(json_DesaBancarKembar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaBancarKembar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaBancarKembar_3.addFeatures(features_DesaBancarKembar_3);
var lyr_DesaBancarKembar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaBancarKembar_3,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_DesaBancarKembar_3,
                popuplayertitle: 'Desa BancarKembar',
                interactive: true,
                title: '<img src="styles/legend/DesaBancarKembar_3.png" /> Desa BancarKembar'
            });
var format_Sekolah_4 = new ol.format.GeoJSON();
var features_Sekolah_4 = format_Sekolah_4.readFeatures(json_Sekolah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_4.addFeatures(features_Sekolah_4);
var lyr_Sekolah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_4,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_Sekolah_4,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_4.png" /> Sekolah'
            });
var format_kuburan_5 = new ol.format.GeoJSON();
var features_kuburan_5 = format_kuburan_5.readFeatures(json_kuburan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan_5.addFeatures(features_kuburan_5);
var lyr_kuburan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan_5,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_kuburan_5,
                popuplayertitle: 'kuburan',
                interactive: true,
                title: '<img src="styles/legend/kuburan_5.png" /> kuburan'
            });
var format_BalaiDesa_6 = new ol.format.GeoJSON();
var features_BalaiDesa_6 = format_BalaiDesa_6.readFeatures(json_BalaiDesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesa_6.addFeatures(features_BalaiDesa_6);
var lyr_BalaiDesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesa_6,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_BalaiDesa_6,
                popuplayertitle: 'Balai Desa',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesa_6.png" /> Balai Desa'
            });
var format_kesehatan_7 = new ol.format.GeoJSON();
var features_kesehatan_7 = format_kesehatan_7.readFeatures(json_kesehatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_7.addFeatures(features_kesehatan_7);
var lyr_kesehatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_7,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_kesehatan_7,
                popuplayertitle: 'kesehatan',
                interactive: true,
                title: '<img src="styles/legend/kesehatan_7.png" /> kesehatan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleTerrainHybrid_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_DesaBancarKembar_3.setVisible(true);lyr_Sekolah_4.setVisible(true);lyr_kuburan_5.setVisible(true);lyr_BalaiDesa_6.setVisible(true);lyr_kesehatan_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleTerrainHybrid_1,lyr_GoogleMaps_2,lyr_DesaBancarKembar_3,lyr_Sekolah_4,lyr_kuburan_5,lyr_BalaiDesa_6,lyr_kesehatan_7];
lyr_DesaBancarKembar_3.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Sekolah_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_kuburan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BalaiDesa_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_kesehatan_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_DesaBancarKembar_3.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Sekolah_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_kuburan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BalaiDesa_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_kesehatan_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_DesaBancarKembar_3.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Sekolah_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_kuburan_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_BalaiDesa_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_kesehatan_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_kesehatan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});