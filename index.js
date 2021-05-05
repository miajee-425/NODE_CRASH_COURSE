const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if(err) throw err;
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(data);
        });   
    }

    if(req.url === '/about') {
        const users = [
            {name:'Bob Smith', age:26},
            {name:'Jhon Doe', age:25},
        ];  
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(JSON.stringify(users));
    }
});  

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });
