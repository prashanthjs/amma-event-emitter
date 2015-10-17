
declare module 'amma-event-emitter/index' {
	import Plugin = require('amma-plugin-loader'); let plugin: Plugin.IPluginLoader;
	export = plugin;

}
declare module 'amma-event-emitter/services/event.emitter' {
	export interface ICallback {
	    (err?: any, results?: any): any;
	}
	export interface IEventEmitter extends NodeJS.EventEmitter {
	}
	export interface IEvent {
	    get(): IEventEmitter;
	}
	export default class EventEmitter implements IEvent {
	    get(): IEventEmitter;
	}

}
declare module 'amma-event-emitter' {
	import main = require('amma-event-emitter/index');
	export = main;
}
