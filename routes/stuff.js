const express = require('express');
const StuffCtrl = require('../controllers/stuff');
const BCCtrl = require('../controllers/manageBCWebServices');
const router = express.Router();


////requetes service web
router.post('/saveSaleQuote',BCCtrl.saveSaleQuote)


///requetes de vue sql

router.get('/getSOList',StuffCtrl.getSOList);
router.get('/getSOCard/:id',StuffCtrl.getSOCard);

router.get('/getSQList',StuffCtrl.getSQList);
router.get('/getSQCard/:id',StuffCtrl.getSQCard);

router.get('/getCustomerList',StuffCtrl.getCustomerList);
router.get('/getCustomerCard/:id',StuffCtrl.getCustomerCard);

router.get('/getContactList/:id',StuffCtrl.getContactList);
router.get('/getContactCard/:id1/:id2',StuffCtrl.getContactCard);

router.get('/getLeadList',StuffCtrl.getLeadList);
router.get('/getLeadCard/:id',StuffCtrl.getLeadCard);

router.get('/getItemList',StuffCtrl.getItemList);
router.get('/getItemCard/:id',StuffCtrl.getItemCard);

router.get('/getLocationList',StuffCtrl.getLocationList);
router.get('/getLocationCard/:id',StuffCtrl.getLocationCard);

router.get('/getShipToAddressList/:id',StuffCtrl.getShipToAddressList);
router.get('/getShipToAddressCard/:id1/:id2',StuffCtrl.getShipToAddressCard);

router.get('/getItemAvailabilityInfo/:id1/:id2',StuffCtrl.getItemAvailabilityInfo);



  

  
  




module.exports = router;