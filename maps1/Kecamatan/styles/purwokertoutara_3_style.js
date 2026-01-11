var size = 0;
var placement = 'point';

var style_purwokertoutara_3 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };

    var labelText = "";
    var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NAME_3") !== null) {
        labelText = String(feature.get("NAME_3"));
    }
    var strokeOpacity = resolution > 70 ? 1.0 : 0.5;
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(228,26,28,' + strokeOpacity + ')', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997 }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
            labelFill, placement, bufferColor,
            bufferWidth)
    })];

    return style;
};
