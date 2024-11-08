const express = require('express');
const router = express.Router();
const CRVtrl = require('../controllers/CustomerRelatedViews.js')


router.get('/getCURList',CRVtrl.getCURList);
router.get('/getCUSList',CRVtrl.getCUSList);
router.get('/getCUHList',CRVtrl.getCUHList);
router.get('/getCUCList',CRVtrl.getCUCList);
router.get('/getGetCriditLimit',CRVtrl.getGetCriditLimit);
router.get('/getActivityDetails',CRVtrl.getActivityDetails);
router.get('/getRevisionRequestList',CRVtrl.getRevisionRequestList);
router.get('/getRevisionRequestCard',CRVtrl.getRevisionRequestCard);
router.get('/getCustomerType',CRVtrl.getCustomerType);
router.get('/getServiceZone',CRVtrl.getServiceZone);
router.get('/getSalutationCode',CRVtrl.getSalutationCode);
router.get('/getCustomerListSimple',CRVtrl.getCustomerListSimple);
router.get('/getCustomerList',CRVtrl.getCustomerList);
router.get('/searchCustomerList',CRVtrl.searchCustomerList);



  

  
  




module.exports = router;