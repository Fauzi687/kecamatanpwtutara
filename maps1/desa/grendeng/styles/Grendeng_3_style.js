var size = 0;
var placement = 'point';

var style_Grendeng_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    // Label hanya muncul pada zoom awal (resolution > 600, zoom <= 14)
    // Saat di-zoom, label hilang
    var labelText = "";
    if (resolution > 600) {
        labelText = String(feature.get("NAME_4") || "");
    }
    
    var value = feature.get("");
    var labelFont = "bold 19.5px \'Open Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,62,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
