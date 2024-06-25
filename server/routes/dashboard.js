const express = require('express')
const router = express.Router();

const dashboardController = require("C:\Users\User\Desktop\notes\server\controllers\dashboardController.js");

router.get('/dashboard', dashboardController.dashboard);

module.exports = router;