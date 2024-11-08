const express = require('express');
const router = express.Router();
const IRVtrl = require('../controllers/ItemRelatedViews.js')


router.get('/getITCList',IRVtrl.getITCList);
router.get('/getInventoryAvaibilityPerItem',IRVtrl.getInventoryAvaibilityPerItem);
router.get('/getItemAvaibilityPerCampaign',IRVtrl.getItemAvaibilityPerCampaign);
router.get('/getLocationBinList',IRVtrl.getLocationBinList);




  

  
  




module.exports = router;