const fs = require('fs');

const filePath = './database.csv';

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

        console.log(`Number of students: ${fileLines.length}`);
        for (const field in studentGroups) {
        if (field) {
            const listStudents = studentGroups[field];
            console.log(`Number of students in ${field}: ${listStudents.length}. List: ${listStudents.join(', ')}`);
        }
        }

        resolve(true);
    } catch (error) {
        reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;