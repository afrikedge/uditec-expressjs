const express = require('express');
const router = express.Router();
const CMCtrl = require('../controllers/RecoveryRelatedViews')



router.get('/getRecoveryActivityList',CMCtrl.getRecoveryActivityList);
router.get('/getRecoveryActivityCard',CMCtrl.getRecoveryActivityCard);

router.get('/getActivityFeedbackList',CMCtrl.getActivityFeedbackList);

router.get('/getAssignedCustomerList',CMCtrl.getAssignedCustomerList);
router.get('/getAssignedCustomerCard',CMCtrl.getAssignedCustomerCard);

router.get('/getPaymentPromiseList',CMCtrl.getPaymentPromiseList);
router.get('/getPaymentPromiseCard',CMCtrl.getPaymentPromiseCard);

router.get('/getRepossessionRequestList',CMCtrl.getRepossessionRequestList);
router.get('/getRepossessionRequestCard',CMCtrl.getRepossessionRequestCard);




  

  
  




module.exports = router;