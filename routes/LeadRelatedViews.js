const express = require('express');
const router = express.Router();
const LRVtrl = require('../controllers/LeadRelatedViews.js')


router.get('/getLERList',LRVtrl.getLERList);
router.get('/getLESList',LRVtrl.getLESList);
router.get('/getLECList',LRVtrl.getLECList);



  

  
  




module.exports = router;