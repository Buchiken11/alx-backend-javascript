import express from 'express';

// Create an instance of the express application
const app = express();

// Define the route for the root URL "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Export the app for testing purposes
export default app;

// If the module is run directly, start the server
if (require.main === module) {
  const port = 1245;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}
