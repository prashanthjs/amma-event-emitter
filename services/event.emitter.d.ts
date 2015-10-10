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
