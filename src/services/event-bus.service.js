import EventEmitter from 'eventemitter3';

const eventEmitter = new EventEmitter();

const eventBus = {
    on: (event, callback) => eventEmitter.on(event, callback),
    once: (event, callback) => eventEmitter.once(event, callback),
    off: (event, callback) => eventEmitter.off(event, callback),
    emit: (event, payload) => eventEmitter.emit(event, payload)
};

Object.freeze(eventBus);

const EV_EDIT_ENTRY = 'ev-edit-entry';

export {
    eventBus,
    EV_EDIT_ENTRY
};