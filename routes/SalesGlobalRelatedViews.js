const express = require('express');
const router = express.Router();
const SGRVCtrl = require('../controllers/SalesGlobalRelatedViews.js')


router.get('/getSalesModeList',SGRVCtrl.getSalesModeList);
router.get('/getPaymentTermList',SGRVCtrl.getPaymentTermList);
router.get('/getGlobalContactList',SGRVCtrl.getGlobalContactList);
router.get('/getVATBUSPostingGroupList',SGRVCtrl.getVATBUSPostingGroupList);



  

  
  




module.exports = router;