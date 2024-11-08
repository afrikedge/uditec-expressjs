const sql = require("mssql");

exports.getITCList = ('/getITCList',(req, res, next) => {
    const request = new sql.Request();
    request.query("select * from [PROD].[ItemCategory]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getInventoryAvaibilityPerItem = ('/getInventoryAvaibilityPerItem',(req, res, next) => {
    const itemNo = req.query.itemNo
    if(itemNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, itemNo);
        request.query("select * from [PROD].[ItemAvailability] where [No_] = @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <itemNo> absent de la requête Http"})
    }
});

exports.getItemAvaibilityPerCampaign = ('/getItemAvaibilityPerCampaign',(req, res, next) => {
    const campaignNo = req.query.campaignNo
    if(campaignNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, campaignNo);
        request.query("select * from [PROD].[CampaignItem] where [Code Promo] = @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <campaignNo> absent de la requête Http"})
    }
});


exports.getLocationBinList = ('/getLocationBinList',(req, res, next) => {
    const { locationCode, itemCode } = req.query

    if(locationCode && itemCode){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, locationCode);
        request.input('inputField2', sql.VarChar, itemCode);
        request.query("select * from [PROD].[LocationBin](@inputField1,@inputField2)")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"un ou plusieurs paramètres absents de la requête Http"})
    }
});






