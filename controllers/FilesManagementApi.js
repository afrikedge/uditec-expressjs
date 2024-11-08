const sql = require("mssql");
const fs =require('fs');
const multer = require('multer');
const { formidable } = require('formidable');

//const { exec } = require('child_process')


const upload1 = multer({dest:'\\\\10.64.25.10' });
const upload = multer({dest:'C:/Users/okala/Desktop/UDITEC_UMATEC/Frontend/public/assets/static' });
const pathForAssets = 'C:/Users/okala/Desktop/UDITEC_UMATEC/Frontend/public/'

const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`File ${filePath} is deleted.`);
        }
    });
}

exports.openFile = ('/getAPI/openFile',(req, res, next) => {
  let link = req.query.link
  // let docNo = req.query.docNo
  // docNo = new String(docNo).split('/').join('_')
  // link = new String(link).split(docNo)
  // let newLink = link[0] + docNo + '"'+link[1] + '"'
  //   exec(`start ${newLink}`, (err, stdout, stderr) => {
  //     if (err) {
  //         console.error(err);
  //         return;
  //     }
  //     res.status(200).json(stdout)
  //     console.log(stdout);
  //     // Optionally, you can exit the process once the file is opened
  //     //process.exit(0);
  //   });
    res.sendFile(link)
    //var file = fs.createReadStream('\\\\10.64.25.10\\WebNavDocs\\Lead\\PRP0000008\\doc02545020240522120959.pdf');
    // var data =fs.readFileSync(link);
    // res.contentType("application/pdf");
    // res.send(data);

});

exports.deleteFileFromLine = ('/deleteFile',(req, res, next) => {
    let link = req.query.link
    fs.unlink(pathForAssets+link, (err) => {
        if (err) {
          console.error(err);
          res.status(400).json({err})
        }else{
          console.log(`File ${link} is deleted.`);
          res.status(200).json({message:`File ${link} is deleted.`})
        }
  });
  
});





// use the multer instance as a middleware for POST requests
exports.uploadFile1 = ('/upload1',upload1.single('file'),(req, res, next) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        const documentDetail  = JSON.parse(fields.document[0])
        const folderName1 = documentDetail.type
        const folderName2 = documentDetail.documentNo
        const tempPath = files.file[0].filepath;
        //const mimetype = files.file[0].mimetype;
        const originalFilename = files.file[0].originalFilename;
        //const newFileName = folderName2 +'_'+ originalFilename;
        //const destination = '\\\\Z:WebNavDocs\\' + folderName1 + '\\' + folderName2
        const destination = '\\\\10.64.25.10\\WebNavDocs\\' + folderName1 + '\\' + folderName2
        const targetPath = destination + '\\' +originalFilename;

        if (!fs.existsSync(destination)){
            fs.mkdirSync(destination, { recursive: true });
        }

        fs.copyFile(tempPath, targetPath, (err)=>{
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Could not save file on Windows!' });
            } else {
              console.log(`File '${originalFilename}' created successfully on Windows!`);
              deleteFile(tempPath)
              res.status(200).json({name:originalFilename,link:targetPath});
            }
        })
    });
});


exports.uploadFile = ('/upload',upload.single('file'),(req, res, next) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        const documentDetail  = JSON.parse(fields.document[0])
        const folderName1 = documentDetail.type
        const folderName2 = documentDetail.documentNo
        const tempPath = files.file[0].filepath;
        const mimetype = files.file[0].mimetype;
        const originalFilename = files.file[0].originalFilename;
        const newFileName = documentDetail.criteriaNo +'_'+ originalFilename;
        const destination = `C:/Users/okala/Desktop/UDITEC_UMATEC/Frontend/public/assets/static/${folderName1}/${folderName2}`
        const targetPath = destination + '/' +newFileName;
        const serverPath = `assets/static/CreditRequest/${folderName2}/${newFileName}`

        if (!fs.existsSync(destination)){
            fs.mkdirSync(destination, { recursive: true });
        }
        fs.rename(tempPath, targetPath, (err)=>{
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Could not save file on Windows!' });
            } else {
              console.log(`File '${newFileName}' created successfully on Windows!`);
              //deleteFile(tempPath)
              res.status(200).json(serverPath);
            }
        })
    });
});

exports.getDocumentLinkList = ('/getDocumentLinkList', (req, res, next) => {
    const { functionCode,documentNo } = req.query
    if(functionCode,documentNo){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, functionCode);
        request.input('inputField2', sql.VarChar, documentNo);

        request.query("select * from [PROD].[DocumentLink] where [Function Code] = @inputField1 and [Document No_] = @inputField2")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
      res.status(400).json({message:"Un ou plusieurs paramètres absents de la requête Http"})
}
});
