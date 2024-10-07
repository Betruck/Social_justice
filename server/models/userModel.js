const db = require('../db');

exports.createUser = (username, password, callback) => {
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], callback);
};

exports.findUser = (username, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], callback);
};
