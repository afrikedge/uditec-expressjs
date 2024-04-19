const sql = require("mssql");

exports.getDiscountRequestList = ('/getDiscountRequestList',(req, res, next) => {
    const request = new sql.Request();
    request.query("select * from [PROD].[DiscountRequest]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getDiscountRequestCard = ('/getDiscountRequestCard',(req, res, next) => {
    const documentNo = req.query.documentNo
    if (documentNo) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query("select * from [PROD].[DiscountRequest] where [No_] = @inputField")
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





exports.getSOUnlockingList = ('/getSOUnlockingList',(req, res, next) => {
    const request = new sql.Request();
    request.query("select * from [PROD].[SalesOrderUnclocking]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getSOUnlockingCard = ('/getSOUnlockingCard',(req, res, next) => {
    const documentNo = req.query.documentNo
    if (documentNo) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query("select * from [PROD].[SalesOrderUnclocking] where [No_] = @inputField")
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


