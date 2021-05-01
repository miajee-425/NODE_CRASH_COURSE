const path = require('path');

// Directory name
console.log(path.dirname(__filename));

// File Extention 
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename))
console.log(__filename);

// Concatenate path
console.log(path.join(__filename, 'test', 'hello.html'));
