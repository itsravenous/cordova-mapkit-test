cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/no.hotdot.mapkit/www/mapkit.js",
        "id": "no.hotdot.mapkit.mapkit",
        "pluginId": "no.hotdot.mapkit",
        "clobbers": [
            "mapkit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "no.hotdot.mapkit": "0.0.2"
}
// BOTTOM OF METADATA
});