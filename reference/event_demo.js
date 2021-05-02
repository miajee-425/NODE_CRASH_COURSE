const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// to register listeners
myEmitter.on('event', () => {
  console.log('Event Fired!!!');
});

// to trigger the event
myEmitter.emit('event');