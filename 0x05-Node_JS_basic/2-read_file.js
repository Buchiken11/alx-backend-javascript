const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

        const lines = data.split('\n').filter((line) => line.trim() !== '');


        const header = lines.shift();

        const fieldGroups = {};

        for (const line of lines) {
            const student = line.split(',');

            if (student.length === 4) {
                const firstName = student[0];
                const field = student[3];

                if (!fieldGroups[field]) {
                    fieldGroups[field] = [];
                }
                fieldGroups[field].push(firstName);
            }
        }

        const totalStudents = Object.values(fieldGroups).reduce((sum, students) => sum + students.length, 0);
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, students] of Object.entries(fieldGroups)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
