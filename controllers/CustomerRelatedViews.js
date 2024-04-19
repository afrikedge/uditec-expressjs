const sql = require("mssql");

exports.getCURList = ('/getCURList',(req, res, next) => {
    const { customerId,accountType,customerType,legalStatus,identificationMode } = req.query
    if (accountType && customerType && legalStatus && identificationMode) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customerId);
        request.input('inputField1', sql.Int, accountType);
        request.input('inputField2', sql.Int, customerType);
        request.input('inputField3', sql.Int, legalStatus);
        request.input('inputField4', sql.Int, identificationMode);

        request.query("select * from [PROD].[CustomerRequirement](@inputField,@inputField1,@inputField2,@inputField3,@inputField4)")
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


exports.getCUSList = ('/getCUSList',(req, res, next) => {
    const { customerId,accountType,salesMode } = req.query
    if (accountType ) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customerId);
        request.input('inputField1', sql.Int, accountType);
        request.input('inputField2', sql.VarChar, salesMode);
        request.query("select * from [PROD].[CustomerScoring](@inputField,@inputField1,@inputField2)")
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


exports.getCUHList = ('/getCUHList',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select * from [PROD].[CustomerHistory] where [Customer No_]= @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
    }
});


exports.getCUCList = ('/getCUCList',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select * from [PROD].[CreditContract] where [Customer No_]= @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
    }
});


// exports.getCURList = ('/getCURList',(req, res, next) => {
//     const customer = req.query.customerId
//     if (customer) {
//         var request = new sql.Request();
//         request.input('inputField', sql.VarChar, customer);
//         request.query("select * from [PROD].[CustomerRequirement] where [Customer No_]= @inputField")
//         .then((result) => {
//             if(result.recordset.length>0){
//                 res.status(200).json(result.recordset)
//             }else{
//                 res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
//             }
//         })
//         .catch((err) => {res.status(500).json({ err });console.log(err)}); 
//     }else{
//         res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
//     }
// });


// exports.getCUSList = ('/getCUSList',(req, res, next) => {
//     const customer = req.query.customerId
//     if (customer) {
//         var request = new sql.Request();
//         request.input('inputField', sql.VarChar, customer);
//         request.query("select * from [PROD].[CustomerScoring] where [Customer No_]= @inputField")
//         .then((result) => {
//             if(result.recordset.length>0){
//                 res.status(200).json(result.recordset)
//             }else{
//                 res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
//             }
//         })
//         .catch((err) => {res.status(500).json({ err });console.log(err)}); 
//     }else{
//         res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
//     }
// });


// exports.getCUHList = ('/getCUHList',(req, res, next) => {
//     const customer = req.query.customerId
//     if (customer) {
//         var request = new sql.Request();
//         request.input('inputField', sql.VarChar, customer);
//         request.query("select * from [PROD].[CustomerHistory] where [Customer No_]= @inputField")
//         .then((result) => {
//             if(result.recordset.length>0){
//                 res.status(200).json(result.recordset)
//             }else{
//                 res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
//             }
//         })
//         .catch((err) => {res.status(500).json({ err });console.log(err)}); 
//     }else{
//         res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
//     }
// });


exports.getGetCriditLimit = ('/getGetCriditLimit',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select [PROD].[CreditLimitCalculation](@inputField)")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
    }
});





exports.getRevisionRequestList = ('/getRevisionRequestList',(req, res, next) => {
    const request = new sql.Request();
    request.query("select * from [PROD].[CustomerRevision]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getRevisionRequestCard = ('/getRevisionRequestCard',(req, res, next) => {
    const documentNo = req.query.documentNo
    if (documentNo) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query("select * from [PROD].[CustomerRevision] where [Revision No_] = @inputField")
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







