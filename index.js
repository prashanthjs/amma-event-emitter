var Plugin = require('amma-plugin-loader');
var pkg = require('./package.json');
var PluginLoader = Plugin.default;
var config = {
    services: {
        'eventEmitter': require('./services/event.emitter').default,
    },
    routes: [],
    attributes: {
        pkg: pkg
    }
};
var plugin = new PluginLoader(config);
module.exports = plugin;
