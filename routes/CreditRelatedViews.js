const express = require('express');
const router = express.Router();
const CRVtrl = require('../controllers/CreditRelatedViews.js')


router.get('/getSCVList',CRVtrl.getSCVList);
router.get('/getCreditContractCard',CRVtrl.getCreditContractCard);
router.get('/getCustomerHistory',CRVtrl.getCustomerHistory);



  

  
  




module.exports = router;