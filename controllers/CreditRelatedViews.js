const sql = require("mssql");


exports.getSCVList = ('/getSCVList',(req, res, next) => {
    const criteria = req.query.criteria
    if (criteria) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, criteria);
        request.query("select * from [PROD].[CriteriaValue] where [Criteria]= @inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <criteria> absent de la requête Http"})
    }
});

exports.getCreditContractList = ('/getCreditContractList',(req, res, next) => {
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

exports.getCustomerHistory = ('/getCustomerHistory',(req, res, next) => {
    if(req.query.customerNo){
        const customerNo = req.query.customerNo
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customerNo);
        request.query("select * from [PROD].[CustomerHistory] where [Customer No_] =@inputField")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <customerNo> absent de la requête Http"})
    }
});

exports.getCreditContractCard = ('/getCreditContractCard',(req, res, next) => {
    if(req.query.contractNo){
        const data= []
        const documentNo = req.query.contractNo
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query("select * from [PROD].[CreditContract] where [No_]=@inputField")
        .then((result) => {
            if(result.recordset.length>0){
                data.push(result.recordset[0])
                request.query("select * from [PROD].[ContractBeneficiary] where [Contract No_] =@inputField")
                .then(result1 => {
                    if(result1.recordset.length>0){
                        data.push(result1.recordset)
                    }else{
                        data.push([])
                    }
                    request.query("select * from [PROD].[ContractHistory] where [Contract No_]=@inputField")
                    .then(result2 => {
                        if(result2.recordset.length>0){
                            data.push(result2.recordset)
                        }else{
                            data.push([])
                        }
                        res.status(200).json(data)
                    })
                    .catch((err) => {res.status(500).json({ err });console.log(err)})
                })
                .catch((err) => {res.status(500).json({ err });console.log(err)})

            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <contractNo> absent de la requête Http"})
    }
});

