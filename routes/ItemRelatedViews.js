const express = require('express');
const router = express.Router();
const IRVtrl = require('../controllers/ItemRelatedViews.js')


router.get('/getITCList',IRVtrl.getITCList);



  

  
  




module.exports = router;