const express = require('express');
const router = express.Router();
const CRVtrl = require('../controllers/CustomerRelatedViews.js')


router.get('/getCURList',CRVtrl.getCURList);
router.get('/getCUSList',CRVtrl.getCUSList);
router.get('/getCUHList',CRVtrl.getCUHList);
router.get('/getCUCList',CRVtrl.getCUCList);
router.get('/getGetCriditLimit',CRVtrl.getGetCriditLimit);
router.get('/getRevisionRequestList',CRVtrl.getRevisionRequestList);
router.get('/getRevisionRequestCard',CRVtrl.getRevisionRequestCard);


  

  
  




module.exports = router;