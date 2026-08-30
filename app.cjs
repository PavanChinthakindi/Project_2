const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.argv[2];
const types = { '.css': 'text/css', '.js': 'text/javascript', '.html': 'text/html' };
http.createServer((req, res) => {
  const relative = req.url === '/' ? '/index.html' : decodeURIComponent(req.url);
  const file = path.resolve(root, `.${relative}`);
  if (!file.startsWith(path.resolve(root))) return res.writeHead(403).end();
  fs.readFile(file, (error, data) => {
    if (error) return res.writeHead(404).end('Not found');
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(4173);