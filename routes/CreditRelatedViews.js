const express = require('express');
const router = express.Router();
const CRVtrl = require('../controllers/CreditRelatedViews.js')


router.get('/getSCVList',CRVtrl.getSCVList);
router.get('/getCreditContractCard',CRVtrl.getCreditContractCard);
router.get('/getCreditContractList',CRVtrl.getCreditContractList);
router.get('/getCustomerHistory',CRVtrl.getCustomerHistory);
router.get('/getCreditContractNewStatus',CRVtrl.getCreditContractNewStatus);
router.get('/getCreditContractGP',CRVtrl.getCreditContractGP);



  

  
  




module.exports = router;