const http = require('http');
const fs = require('fs');

// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served with the following content:
const server = http.createServer((req, res) => {
    if (req.url === '/comments.html') {
        fs.readFile('/path/to/comments.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});