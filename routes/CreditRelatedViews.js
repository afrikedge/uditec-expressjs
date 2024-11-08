const express = require('express');
const router = express.Router();
const CRVtrl = require('../controllers/CreditRelatedViews.js')



router.get('/getSCVList',CRVtrl.getSCVList);
router.get('/getCreditContractList',CRVtrl.getCreditContractList);
router.get('/getCreditContractCard',CRVtrl.getCreditContractCard);
router.get('/getCustomerHistory',CRVtrl.getCustomerHistory);
router.get('/getContractHistory',CRVtrl.getContractHistory);
router.get('/getContractBeneficiary',CRVtrl.getContractBeneficiary);
router.get('/getNbrOfContractBeneficiary',CRVtrl.getNbrOfContractBeneficiary);
router.get('/getCreditContractNewStatus',CRVtrl.getCreditContractNewStatus);
router.get('/getCreditContractGP',CRVtrl.getCreditContractGP);
router.get('/getCreditRequestNewStatus',CRVtrl.getCreditRequestNewStatus);
router.get('/getAGPDuration',CRVtrl.getAGPDuration);

/////////////////Nouveau///////////////////
router.get('/getMirindraMaxApprovedRate',CRVtrl.getMirindraMaxApprovedRate);
router.get('/getMirindraMaxReferredRate',CRVtrl.getMirindraMaxReferredRate);



  

  
  




module.exports = router;