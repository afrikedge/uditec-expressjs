const express = require('express');
const router = express.Router();
const SGRVCtrl = require('../controllers/SalesGlobalRelatedViews.js')


router.get('/getSalesModeList',SGRVCtrl.getSalesModeList);

router.get('/getPaymentTermList',SGRVCtrl.getPaymentTermList);

router.get('/getGlobalContactList',SGRVCtrl.getGlobalContactList);

router.get('/getVATBUSPostingGroupList',SGRVCtrl.getVATBUSPostingGroupList);

router.get('/getApprovalFlow',SGRVCtrl.getApprovalFlow);

router.get('/getPaymentRequestList',SGRVCtrl.getPaymentRequestList);
router.get('/getPaymentRequestCard',SGRVCtrl.getPaymentRequestCard);



  

  
  




module.exports = router;