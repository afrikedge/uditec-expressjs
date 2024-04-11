const sql = require("mssql");

exports.getLERList = ('/getLERList',(req, res, next) => {
    const lead = req.query.leadId
    if (lead) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, lead);
        request.query("select * from [PROD].[CustomerRequirement] where [Lead No_]= @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <leadId> absent de la requête Http"})
    }
});


exports.getLESList = ('/getLESList',(req, res, next) => {
    const lead = req.query.leadId
    if (lead) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, lead);
        request.query("select * from [PROD].[CustomerScoring] where [Lead No_]= @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <leadId> absent de la requête Http"})
    }
});

exports.getLECList = ('/getLECList',(req, res, next) => {
        var request = new sql.Request();
        request.query("select * from [PROD].[CreditContract]")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

