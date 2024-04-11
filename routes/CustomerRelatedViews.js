const express = require('express');
const router = express.Router();
const CRVtrl = require('../controllers/CustomerRelatedViews.js')


router.get('/getCURList',CRVtrl.getCURList);
router.get('/getCUSList',CRVtrl.getCUSList);
router.get('/getCUHList',CRVtrl.getCUHList);
router.get('/getCUCList',CRVtrl.getCUCList);


  

  
  




module.exports = router;