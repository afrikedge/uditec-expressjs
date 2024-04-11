const sql = require("mssql");

exports.getCURList = ('/getCURList',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select * from [PROD].[CustomerRequirement] where [Customer No_]= @inputField")
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


exports.getCUSList = ('/getCUSList',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select * from [PROD].[CustomerScoring] where [Customer No_]= @inputField")
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


