import { readFileSync } from 'fs'; // Replacing require with import

export function countStudents(path) {
  try {
    // Read the file synchronously
    const data = readFileSync(path, 'utf8');

    // Split the data by new lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Add parentheses around 'line'

    // If no valid data is found, return early
    if (lines.length === 0) {
      console.log('No data found.');
      return;
    }

    // First line is the header, so we remove it
    lines.shift();

    // Create a map to hold field counts and lists of student names
    const fieldCounts = {};

    // Process each line in the CSV
    lines.forEach((line) => { // Add parentheses around 'line'
      const [firstname, , , field] = line.split(','); // Ignore unused values

      // If the field isn't already in the map, initialize it
      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, students: [] };
      }

      // Increment the count and add the student's first name to the list
      fieldCounts[field].count += 1;
      fieldCounts[field].students.push(firstname);
    });

    // Log the total number of students
    console.log(`Number of students: ${lines.length}`);

    // Log the number of students in each field and the list of first names
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        // Guard against prototype properties
        const { count, students } = fieldCounts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${students.join(', ')}`);
      }
    }
  } catch (err) {
    // If an error occurs (like file not found), throw an error with the appropriate message
    throw new Error('Cannot load the database');
  }
}

// Export the function using ES modules
export default countStudents;
