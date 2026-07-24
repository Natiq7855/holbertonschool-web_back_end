const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2];
    const originalLog = console.log;
    const output = [];
    console.log = (...args) => { output.push(args.join(' ')); };
    countStudents(dbPath)
      .then(() => {
        console.log = originalLog;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${output.join('\n')}`);
      })
      .catch((err) => {
        console.log = originalLog;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${err.message}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
