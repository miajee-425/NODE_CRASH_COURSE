const Logger = require('./logger');

const logger = new Logger();

// to register listeners
logger.on('message', (data)=> { 
    console.log('Called Listener', data);
});

logger.log('Hello');