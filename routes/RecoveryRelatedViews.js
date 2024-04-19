const express = require('express');
const router = express.Router();
const CMCtrl = require('../controllers/RecoveryRelatedViews')



router.get('/getRecoveryActivityList',CMCtrl.getRecoveryActivityList);
router.get('/getRecoveryActivityCard',CMCtrl.getRecoveryActivityCard);

router.get('/getAssignedDebtList',CMCtrl.getAssignedDebtList);
router.get('/getAssignedDebtCard',CMCtrl.getAssignedDebtCard);

router.get('/getPaymentPromiseList',CMCtrl.getPaymentPromiseList);
router.get('/getPaymentPromiseCard',CMCtrl.getPaymentPromiseCard);

router.get('/getRepossessionRequestList',CMCtrl.getRepossessionRequestList);
router.get('/getRepossessionRequestCard',CMCtrl.getRepossessionRequestCard);




  

  
  




module.exports = router;