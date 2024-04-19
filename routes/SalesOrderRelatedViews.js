const express = require('express');
const router = express.Router();
const SORVCtrl = require('../controllers/SalesOrderRelatedViews.js')


router.get('/getDiscountRequestList',SORVCtrl.getDiscountRequestList);
router.get('/getDiscountRequestCard',SORVCtrl.getDiscountRequestCard);

router.get('/getSOUnlockingList',SORVCtrl.getSOUnlockingList);
router.get('/getSOUnlockingCard',SORVCtrl.getSOUnlockingCard);






  

  
  




module.exports = router;