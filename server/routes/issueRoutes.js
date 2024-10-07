const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.post('/', issueController.submitIssue);
router.get('/', issueController.getAllIssues);

module.exports = router;
