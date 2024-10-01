const express = require('express');


// read db async

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    try {
        if (!fs.existsSync(filePath)) {
            reject(new Error('Cannot load the database'));
        }
        if (!fs.statSync(filePath).isFile()) {
            reject(new Error('Cannot load the database'));
        }

        const file = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
        const studentGroups = {};
        const fileLines = file.toString('utf-8')
        .trim()
        .split('\n')
        .slice(1);

        for (const line of fileLines) {
        const student = line.split(',');
        if (student.length > 0) {
            const [firstName, lastName, age] = student;
            let field = student[student.length - 1].replace(/\r/g, '');
            if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
            }

            studentGroups[field].push(firstName);
        }
        }
        const report = [];

        report.push('This is the list of our students');

        report.push(`Number of students: ${fileLines.length}`);
        for (const field in studentGroups) {
            if (field) {
                const listStudents = studentGroups[field];
                report.push(`Number of students in ${field}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
            }
        }

        resolve(report.join('\n'));
    } catch (error) {
        reject(new Error('Cannot load the database'));
    }
  });
}

const app = express();
const PORT = 1245;
const HOST = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    try {
        const filePath = process.argv[2] || './database.csv';
        countStudents(filePath)
            .then((report) => {
                res.send(report);
            })
            .catch((err) => {
                res.send(err.message);
            });
    } catch (err) {
        res.send(err.message);
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening at -> http://${HOST}:${PORT}\n`);
});


module.exports = app;