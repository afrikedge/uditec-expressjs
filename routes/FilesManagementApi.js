const express = require('express');
const FMACtrl = require('../controllers/FilesManagementApi');
const router = express.Router();


////requetes service web
router.post('/upload',FMACtrl.uploadFile)
router.post('/upload1',FMACtrl.uploadFile1)
router.get('/getDocumentLinkList',FMACtrl.getDocumentLinkList)
router.get('/getAPI/openFile',FMACtrl.openFile)
router.get('/deleteFile',FMACtrl.deleteFileFromLine)




  

  
  




module.exports = router;