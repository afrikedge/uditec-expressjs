const sql = require("mssql");

exports.getSalesModeList = ('/getSalesModeList',(req, res, next) => {
        var request = new sql.Request();
        request.query("select * from [PROD].[SalesMode]")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getPaymentTermList = ('/getPaymentTermList',(req, res, next) => {
        var request = new sql.Request();
        request.query("select * from [PROD].[PaymentTerms]")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});


exports.getGlobalContactList = ('/getGlobalContactList', (req, res, next) => {
    var request = new sql.Request();
    request.query("SELECT * FROM [PROD].[Contact]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

exports.getVATBUSPostingGroupList = ('/getVATBUSPostingGroupList', (req, res, next) => {
    var request = new sql.Request();
    request.query("SELECT * FROM [PROD].[VAT Bus_ Posting Group]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });



