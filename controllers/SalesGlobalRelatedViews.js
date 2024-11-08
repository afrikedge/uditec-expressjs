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

  exports.getPriceGroupList = ('/getPriceGroupList', (req, res, next) => {
    var request = new sql.Request();
    request.query("SELECT * FROM [PROD].[CustomerPriceGroup]")
    .then((result) => {
        res.status(200).json(result.recordset)
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });


exports.getApprovalFlow = ('/getApprovalFlow', (req, res, next) => {
    const documentNo = req.query.documentNo
    if(documentNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query("SELECT * FROM [PROD].[ApprovalFlow] where [Document No_]=@inputField ")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <documentNo> absent de la requête Http"})
    } 

  });




  exports.getPaymentRequestList = ('/getPaymentRequestList',(req, res, next) => {
    const request = new sql.Request();
    request.query(` `)
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getPaymentRequestCard = ('/getPaymentRequestCard',(req, res, next) => {
    const data = []
    const documentNo = req.query.documentNo
    if(documentNo){
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query(`select * from [PROD].[PaymentRequestHeader] where [No_]=@inputField `)
        .then((result1) => {
            console.log(result1)
            if(result1.recordset.length>0){
                data.push(result1.recordset[0])
                request.query(`select * from [PROD].[PaymentRequestLine] where [Document No_]= @inputField`)
                .then(result2 => {
                    if(result2.recordset.length>0){
                        data.push(result2.recordset)
                    }else{
                        data.push([])
                    }
                    res.status(200).json(data)
                })
                .catch(err => {res.status(500).json({ err });console.log(err)})
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <documentNom> absent de la requête Http"})
    }
});