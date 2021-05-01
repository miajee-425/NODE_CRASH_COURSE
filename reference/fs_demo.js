const fs = require('fs');
const path = require('path');

//Create a directory
// fs.mkdir(path.join(__dirname, 'new_test_folder'), {}, (err)=>{
//     if(err) throw err;
//     console.log('Folder Created...');
// });

// Create and write file
// fs.writeFile(path.join(__dirname, 'new_test_folder', 'hello.txt'), 'Hello world.', (err) => {
//     if(err) throw err;
//     console.log('File written...');
//     // File append
//     fs.appendFile(path.join(__dirname, 'new_test_folder', 'hello.txt'), ' I love nodejs', (err) => {
//         if(err) throw err;
//         console.log('File appended...');
//     });
// });

// Read File
// fs.readFile(path.join(__dirname, 'new_test_folder', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Rename File
fs.rename(path.join(__dirname, 'new_test_folder', 'hello.txt'), path.join(__dirname, 'new_test_folder', 'renamed_hello.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed.....');
});

