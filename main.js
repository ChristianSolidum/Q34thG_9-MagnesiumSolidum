const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to Handlebars
app.set('view engine', 'hbs');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: '4th Graded Exercise', message: 'Welcome to my 4th Graded Exercise' });
});


// Handle form submission
app.post('/submit', (req, res) => {
  const { nah } = req.body;
  const { studentId } = req.body;
  const { birth } = req.body;
  const { eMail } = req.body;
  const { num } = req.body;
  const { gL } = req.body;
  const { place } = req.body;
  const { club } = req.body;
  const { reason } = req.body;

  res.render('result', { title: 'Form Submission', nah, studentId, birth, eMail, num, gL, place, club, reason});
});


  



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
