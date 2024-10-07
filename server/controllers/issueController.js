const issueModel = require('../models/issueModel');

exports.submitIssue = (req, res) => {
  const { title, description } = req.body;
  issueModel.createIssue(title, description, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to submit issue' });
    }
    res.status(201).json({ success: true, message: 'Issue submitted successfully' });
  });
};

exports.getAllIssues = (req, res) => {
  issueModel.getIssues((err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to retrieve issues' });
    }
    res.status(200).json(results);
  });
};
