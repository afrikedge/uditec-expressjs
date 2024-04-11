const sql = require("mssql");

exports.getOptionLabelList = ('/getOptionLabelList',(req, res, next) => {
  var request = new sql.Request();
  const language = req.query.lg
  const field = req.query.fd
    request.query(`select * from [PROD].[OptionList]('${language}','${field}')`)
    .then((optionLabelList) => res.status(200).json(optionLabelList))
  .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getSingleOptionLabel = ('/getSingleOptionLabel',(req, res, next) => {
  var request = new sql.Request();
  const language = req.query.lg
  const field = req.query.fd
  const value = req.query.vl
    request.query(`select [PROD].[OptionLabel]('${language}','${'['+field+']'}','${value}')`)
    .then((optionLabel) => res.status(200).json(optionLabel))
  .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
