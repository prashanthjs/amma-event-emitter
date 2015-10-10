import Path = require('path');
import Async = require('async');
import Fs = require('fs');
import Hapi = require('hapi');
import EE = require('events');
import AsyncEventEmitter = require('async-eventemitter');

export interface ICallback {
  (err?: any, results?: any): any;
}

export interface IEventEmitter extends NodeJS.EventEmitter {

}

export interface IEvent {
  get(): IEventEmitter;
}

export default class EventEmitter implements IEvent {

  get(): IEventEmitter {
    return new AsyncEventEmitter();
  }

}
