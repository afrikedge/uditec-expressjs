const express = require('express');
const StuffCtrl = require('../controllers/stuff');
const BCCtrl = require('../controllers/manageBCWebServices');
const router = express.Router();


////requetes service web
router.post('/getBCWSResponse',BCCtrl.getBCWSResponse)


///requetes de vue sql

//router.get('/getUserInfo',StuffCtrl.getUserInfo);
router.get('/getUserList',StuffCtrl.getUserList);

router.get('/getSOList',StuffCtrl.getSOList);
router.get('/getSOCard/:id',StuffCtrl.getSOCard);
router.get('/getSOCardLine/:id',StuffCtrl.getSOCardLine);

router.get('/getSQList',StuffCtrl.getSQList);
router.get('/getSQCard/:id',StuffCtrl.getSQCard);

router.get('/getSIList/:id',StuffCtrl.getSIList);
router.get('/getSILine/:id',StuffCtrl.getSILine);

router.get('/getCRList',StuffCtrl.getCRList);
router.get('/getCRCard/:id',StuffCtrl.getCRCard);
router.get('/getMirindraGP',StuffCtrl.getMirindraGP);
router.get('/getMirindraCV/:id',StuffCtrl.getMirindraCV);
router.get('/getMirindraRD',StuffCtrl.getMirindraRD);
router.get('/getMirindraDuration',StuffCtrl.getMirindraDuration);
router.get('/getItemVAT',StuffCtrl.getItemVAT);
router.get('/getAmortization',StuffCtrl.getAmortization);

router.get('/getContactListOfCustomer',StuffCtrl.getContactListOfCustomer);
router.get('/getCustomerCard/:id',StuffCtrl.getCustomerCard);

router.get('/getContactList',StuffCtrl.getContactList);
router.get('/getContactCard/:id',StuffCtrl.getContactCard);

router.get('/getLeadList',StuffCtrl.getLeadList);
router.get('/getLeadCard/:id',StuffCtrl.getLeadCard);

router.get('/getCampaignList',StuffCtrl.getCampaignList);

router.get('/getPaymentMethodList',StuffCtrl.getPaymentMethodList);
router.get('/getSaleOrderPaymentLine/:id',StuffCtrl.getSaleOrderPaymentLine);

router.get('/getShipmentMethodList',StuffCtrl.getShipmentMethodList);

router.get('/getItemList',StuffCtrl.getItemList);
router.get('/getItemCard/:id',StuffCtrl.getItemCard);
router.get('/getItemAttrib/:id',StuffCtrl.getItemAttrib);
router.get('/getItemWarrantyPlan/:id',StuffCtrl.getItemWarrantyPlan);

router.get('/getLocationList',StuffCtrl.getLocationList);
router.get('/getLocationCard/:id',StuffCtrl.getLocationCard); 

router.get('/getLocationBinCode/:id',StuffCtrl.getLocationBinCode); 

router.get('/getShipToAddressList/:id',StuffCtrl.getShipToAddressList);
router.get('/getShipToAddressCard/:id1/:id2',StuffCtrl.getShipToAddressCard);

router.get('/getItemAvailabilityInfo/:id1/:id2',StuffCtrl.getItemAvailabilityInfo);



  

  
  




module.exports = router;