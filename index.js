const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./server/routes/authRoutes');
const issueRoutes = require('./server/routes/issueRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/issues', issueRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
