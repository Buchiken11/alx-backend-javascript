import http from 'http';
import { readFile } from 'fs/promises';
import { URL } from 'url';

// Asynchronous function to read and count students from the CSV file
async function countStudents(database) {
  try {
    const data = await readFile(database, { encoding: 'utf8' });
    const lines = data.trim().split('\n').filter((line) => line !== ''); // Remove empty lines

    // Extract header and student information
    lines.shift(); // Remove and store header
    const students = lines.map((line) => line.split(',')); // Split each student entry by comma

    console.log(`Number of students: ${students.length}`);

    // Group students by field and display them
    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student; // Extract relevant columns
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    // Log the results
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    // Return the number of students in each field and their names
    return `Number of students: ${students.length}\n${Object.entries(fields).map(([field, names]) => `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`).join('\n')}`;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Create the HTTP server
const app = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const databasePath = process.argv[2]; // Get the database file from arguments

    try {
      const studentData = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentData}`);
    } catch (err) {
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

// Start the server and listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app for testing purposes
export default app;
