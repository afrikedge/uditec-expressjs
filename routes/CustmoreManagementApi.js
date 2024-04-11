const express = require('express');
const router = express.Router();
const CMCtrl = require('../controllers/CustmoreManagementApi')


router.get('/getDRQList',CMCtrl.getDRQList);
router.get('/getDRQCard/:id',CMCtrl.getDRQCard);

router.get('/getRRQList',CMCtrl.getRRQList);
router.get('/getRRQCard/:id',CMCtrl.getRRQCard);

router.get('/getRAList',CMCtrl.getRAList);
router.get('/getRACard/:id',CMCtrl.getRACard);

router.get('/getPPList',CMCtrl.getPPList);
router.get('/getPPCard/:id',CMCtrl.getPPCard);

router.get('/getADList',CMCtrl.getADList);
router.get('/getADCard/:id',CMCtrl.getADCard);

router.get('/getRPRQList',CMCtrl.getRPRQList);
router.get('/getRPRQCard/:id',CMCtrl.getRPRQCard);

router.get('/getPVRQList',CMCtrl.getPVRQList);
router.get('/getPVRQCard/:id',CMCtrl.getPVRQCard);

  

  
  




module.exports = router;