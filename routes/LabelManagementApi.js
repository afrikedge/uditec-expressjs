const express = require('express');
const router = express.Router();
const MlACtrl = require('../controllers/LabelManagementApi')

  

router.get('/getOptionLabelList',MlACtrl.getOptionLabelList)
router.get('/getSingleOptionLabel',MlACtrl.getSingleOptionLabel)
  




module.exports = router;