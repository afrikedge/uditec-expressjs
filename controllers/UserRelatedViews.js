const sql = require("mssql");

exports.getUserInfo = ('/getUserInfo',(req, res, next) => {
    const userCode = req.query.webUser
    if(userCode){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, userCode);
        request.query("select * from [PROD].[ExternalUser] where [Code] = @inputField")
        .then((result) => {
            console.log(result)
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"L'utilisateur n'existe pas!"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <webUser> absent de la requête Http"})
    }
});
