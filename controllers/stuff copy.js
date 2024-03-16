// var sql = require("mssql");
// const fs =require('fs');
// const multer = require('multer');
// const { formidable } = require('formidable');

// const upload = multer({ dest: 'C:/Users/okala/Documents/UDITEC' }); 

// const recordDocLink = (p1='',p2='',p3='',p4='',p5='',p6='',p7='',res) => {
//   var request = new sql.Request();
//   request.query(`exec [dbo].[saveDocLink] '${p1}','${p2}','${p3}','${p4}','${p5}','${p6}','${p7}'`)
//   .then(() => {res.status(200).json({ message:'File saved successfully!'});console.log('File saved successfully in DB')})
//   .catch((err) => {res.status(400).json({ err });console.log(err)});
// }



//   exports.getSOList = ('/getSOList',(req, res, next) => {
//     var request = new sql.Request();
//       request.query('select * from [dbo].[Sales order header]')
//       .then((soList) => res.status(200).json(soList))
//     .catch((err) => {res.status(400).json({ err });console.log(err)}); 
//   });




//  exports.getSOCard = ('getSOCard/:id', (req, res, next) => {
//     let data = []
//     var request = new sql.Request();
//       request.query(`SELECT * FROM [dbo].[Sales order header] WHERE [N° commande]='${req.params.id}'`)
//       .then(soHeader => {
//           request.query(`SELECT * FROM [dbo].[Sales order lines] WHERE [N° commande]='${req.params.id}'`)
//           .then(soLine =>{
//               data = [soHeader.recordset[0],soLine.recordset]
//               res.status(200).json(data) 
//           })
//           .catch((err) => {res.status(400).json({ err });console.log(err)})
//       })
//       .catch((err) => {res.status(400).json({ err });console.log(err)}); 
//     });




//     exports.getCustomerList = ('/getCustomerList', (req, res, next) => {
//       var request = new sql.Request();
//       request.query(`SELECT * FROM [dbo].[CRONUS France S_A_$Customer$437dbf0e-84ff-417a-965d-ed2bb9650972]`)
//       .then(customerList =>{
//           res.status(200).json(customerList)
//       })
//       .catch((err) => {res.status(400).json({ err });console.log(err)})
//     });




//     exports.getCustomerCard = ('/getCustomerCard/:id', (req, res, next) => {
//       var request = new sql.Request();
//       request.query(`SELECT * FROM [dbo].[CRONUS France S_A_$Customer$437dbf0e-84ff-417a-965d-ed2bb9650972] WHERE [No_]='${req.params.id}'`)
//       .then(customerCard =>{
//           res.status(200).json(customerCard)
//       })
//       .catch((err) => {res.status(400).json({ err });console.log(err)})
//     });




//     exports.getContactList = ('/getContactList', (req, res, next) => {
//       var request = new sql.Request();
//       request.query(`SELECT * FROM [dbo].[CRONUS France S_A_$Contact$437dbf0e-84ff-417a-965d-ed2bb9650972]`)
//       .then(contactList =>{
//           res.status(200).json(contactList)
//       })
//       .catch((err) => {res.status(400).json({ err });console.log(err)})
//     });




//     exports.getContactCard = ('/getContactCard/:id', (req, res, next) => {
//       var request = new sql.Request();
//       request.query(`SELECT * FROM [dbo].[CRONUS France S_A_$Contact$437dbf0e-84ff-417a-965d-ed2bb9650972] WHERE [No_]='${req.params.id}'`)
//       .then(contactCard =>{
//           res.status(200).json(contactCard)
//       })
//       .catch((err) => {res.status(400).json({ err });console.log(err)})
//     });






























// // use the multer instance as a middleware for POST requests
//  exports.uploadFile = ('/upload',upload.single('file'),(req, res, next) => {

//   const form = formidable({ multiples: true });
//     form.parse(req, (err, fields, files) => {

//       const documentDetail  = JSON.parse(fields.document[0])
//       const folderName = documentDetail.type + '_'+documentDetail.header
//       const tempPath = files.file[0].filepath;
//       const originalFilename = files.file[0].originalFilename;
//       const newFileName = documentDetail.target +'_'+ originalFilename;
//       const destination = 'C:/Users/okala/Documents/UDITEC/'
//       const targetPath = destination +''+folderName +'/'+newFileName;
//       const mimetype = files.file[0].mimetype;
//       //console.log(documentDetail)
//       fs.access(destination +''+folderName, (err) => {
//           if (err) {
//             fs.mkdir(destination +''+folderName, (err) => {
//               if (err) {
//                 console.error(err);
//                 return;
//               }
//               console.log(`Folder '${folderName}' created successfully on Windows!`);
//               fs.rename(tempPath, targetPath, (err)=>{
//                 if (err) {
//                   console.error(err);
//                   res.status(500).json({ error: 'Could not save file on Windows!' });
//                 } else {

//                   console.log(`File '${newFileName}' created successfully on Windows!`);
//                   recordDocLink(targetPath,documentDetail.description,documentDetail.header,documentDetail.targetType,mimetype,documentDetail.target,originalFilename,res)

//                 }
//               })
//             });
//           } else {
//             console.log(`Folder '${folderName}' already exists on Windows!!`);
//               fs.rename(tempPath, targetPath, (err)=>{
//                 if (err) {
//                   console.error(err);
//                   res.status(500).json({ error: 'Could not save file on Windows!' });
//                 } else {

//                   console.log(`File '${newFileName}' created successfully on Windows!`);
                 
//                   recordDocLink(targetPath,documentDetail.description,documentDetail.header,documentDetail.targetType,mimetype,documentDetail.target,originalFilename,res)
//                 }
//               })
//           }
//       });
//     });
//   });

 
// //  exports.recordDocLink = ('/docLink/record', (req, res, next) => {
  
// //   //{docLink,docDesc,docNo,docTargetType,docLinkType,docTargetNo} = req.body
// //   var request = new sql.Request();
// //   request.query(`exec [dbo].[saveDocLink] '${req.body.docLink}','${req.body.docDesc}','${req.body.docNo}','${req.body.docTargetType}','${req.body.docLinkType}','${req.body.docTargetNo}'`)
// //   .then(() => {res.status(200).json({ message: 'Lien inséré dans la base de données !'});})
// //   .catch((err) => {res.status(400).json({ err });console.log(err)});
// // });

//  exports.GetDocLink = ('/docLink/:id', (req, res, next) => {
//   var request = new sql.Request();
//   request.query(`select * from [dbo].[document link] where [N° document] = '${req.params.id}'`)
//   .then((result) => {res.status(200).json({ message: 'Liens envoyés avec success',docLink:result.recordset});})
//   .catch((err) => {res.status(400).json({ err });console.log(err)});
// });
