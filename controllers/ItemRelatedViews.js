const sql = require("mssql");

exports.getITCList = ('/getITCList',(req, res, next) => {
    var request = new sql.Request();
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




