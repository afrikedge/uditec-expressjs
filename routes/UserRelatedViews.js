const express = require('express');
const router = express.Router();
const URVtrl = require('../controllers/UserRelatedViews.js')


router.get('/getUserInfo',URVtrl.getUserInfo);










module.exports = router;