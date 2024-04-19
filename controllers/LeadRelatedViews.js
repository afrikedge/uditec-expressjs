const sql = require("mssql");

exports.getLERList = ('/getLERList',(req, res, next) => {
    console.log('1',req.query)

    const { leadId,accountType,customerType,legalStatus,identificationMode } = req.query
    if (accountType && customerType && legalStatus && identificationMode) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, leadId);
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


exports.getLESList = ('/getLESList',(req, res, next) => {
    console.log('2',req.query)
    const { leadId,accountType,salesMode } = req.query
    if (accountType ) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, leadId);
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

exports.getLeadNewStatus = ('/getLeadNewStatus',(req, res, next) => {
    const { leadId,leadStatus,languageId } = req.query
    if(leadId && leadStatus && languageId){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, leadId);
        request.input('inputField2', sql.Int, leadStatus);
        request.input('inputField3', sql.VarChar, languageId);
        request.query("select * from [PROD].[LeadTransition](@inputField1,@inputField2,@inputField3)")
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

