const db = require('../db');

exports.createIssue = (title, description, callback) => {
  const sql = 'INSERT INTO issues (title, description) VALUES (?, ?)';
  db.query(sql, [title, description], callback);
};

exports.getIssues = (callback) => {
  const sql = 'SELECT * FROM issues';
  db.query(sql, callback);
};
