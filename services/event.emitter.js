var AsyncEventEmitter = require('async-eventemitter');
var EventEmitter = (function () {
    function EventEmitter() {
    }
    EventEmitter.prototype.get = function () {
        return new AsyncEventEmitter();
    };
    return EventEmitter;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventEmitter;
