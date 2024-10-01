const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';


app.on('request', async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!\n');

    if (req.url === '/students') {
        await countStudents(DB_FILE)
        .then((data) => {
            res.write('This is the list of our students\n');
            res.write(data);
            res.end();
        })
        .catch((error) => {
            res.write('This is the list of our students\n');
            res.write(error.message);
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.write('This is the list of our students\n');
        res.write('Student not found');
        res.end();
    }
});


app.listen(PORT, HOST, () => {
    process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
}); 


module.exports = app;