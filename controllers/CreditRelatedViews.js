const sql = require("mssql");

exports.getCreditRequestNewStatus = ('/getCreditRequestNewStatus',(req, res, next) => {
    const { creditRequestId,creditRequestStatus,languageId } = req.query
    if(creditRequestId && creditRequestStatus && languageId){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, creditRequestId);
        request.input('inputField2', sql.Int, creditRequestStatus);
        request.input('inputField3', sql.VarChar, languageId);
        request.query("select * from [PROD].[MirindraRequestTransition](@inputField1,@inputField2,@inputField3)")
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
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getAGPDuration = ('/getAGPDuration',(req, res, next) => {
    if(req.query.orderNo){
        const orderNo = req.query.orderNo
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, orderNo);
        request.query("select [PROD].[AGPDurationCalculation](@inputField)")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)});
    }else{
        res.status(400).json({message:"Paramètre <orderNo> absent de la requête Http"})
    }
});

exports.getCustomerHistory = ('/getCustomerHistory',(req, res, next) => {
    if(req.query.customerNo){
        const customerNo = req.query.customerNo
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customerNo);
        request.query("select * from [PROD].[CustomerHistory] where [Customer No_] =@inputField")
        .then((result) => {
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <customerNo> absent de la requête Http"})
    }
});

exports.getContractHistory = ('/getContractHistory',(req, res, next) => {
    const {ContractNo,listLength} = req.query
    if(ContractNo && listLength >= 0){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, ContractNo);
        request.input('inputField2', sql.Int, listLength);
        request.query("select * from [PROD].[ContractHistory] where [Contract No_] =@inputField1 order by [Customer No_] offset @inputField2 rows FETCH NEXT 50 ROWS ONLY")
        .then((result) => {
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <ContractNo> ou <listLength> absent de la requête Http"})
    }
});

exports.getContractBeneficiary = ('/getContractBeneficiary',(req, res, next) => {
    const {ContractNo,listLength} = req.query
    if(ContractNo && listLength >= 0){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, ContractNo);
        request.input('inputField2', sql.Int, listLength);
        request.query("select * from [PROD].[ContractBeneficiary] where [Contract No_] =@inputField1 order by [Customer No_] offset @inputField2 rows FETCH NEXT 50 ROWS ONLY")
        .then((result) => {
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <ContractNo> ou <listLength> absent de la requête Http"})
    }
});

exports.getNbrOfContractBeneficiary = ('/getNbrOfContractBeneficiary',(req, res, next) => {
    const {ContractNo} = req.query
    if(ContractNo){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, ContractNo);
        request.query("select count(*) from [PROD].[ContractBeneficiary] where [Contract No_] =@inputField1")
        .then((result) => {
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <ContractNo> ou <listLength> absent de la requête Http"})
    }
});

exports.getCreditContractCard = ('/getCreditContractCard',(req, res, next) => {
    if(req.query.contractNo){
        const ContractNo = req.query.contractNo
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, ContractNo);
        request.query("select * from [PROD].[CreditContract] where [No_]=@inputField")
        .then((result) => {
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <contractNo> absent de la requête Http"})
    }
});

exports.getCreditContractNewStatus = ('/getCreditContractNewStatus',(req, res, next) => {
    const { creditContractNo,creditContractStatus,languageId } = req.query
    if(creditContractNo && creditContractStatus && languageId){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, creditContractNo);
        request.input('inputField2', sql.Int, creditContractStatus);
        request.input('inputField3', sql.VarChar, languageId);
        request.query("select * from [PROD].[CreditContractTransition](@inputField1,@inputField2,@inputField3)")
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

exports.getCreditContractGP = ('/getCreditContractGP',(req, res, next) => {
    var request = new sql.Request();
    request.query(`select * from [PROD].[AGPGlobalParameter]`)
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset[0])
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

 ///////////////////Nouveau////////////// 
exports.getMirindraMaxApprovedRate = ('/getMirindraMaxApprovedRate',(req, res, next) => {
    if(req.query.Score){
        const Score = req.query.Score
        const request = new sql.Request();
        request.input('inputField', sql.Decimal, Score);
        request.query(`SELECT [PROD].[MirindraMaxApprovedRate](@inputField)`)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0][''])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)});
    }else{
        res.status(400).json({message:"Paramètre <Score> absent de la requête Http"})
    } 
});

exports.getMirindraMaxReferredRate = ('/getMirindraMaxReferredRate',(req, res, next) => {
    if(req.query.Score){
        const Score = req.query.Score
        const request = new sql.Request();
        request.input('inputField', sql.Decimal, Score);
        request.query(`SELECT [PROD].[MirindraMaxReferredRate](@inputField)`)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0][''])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)});
    }else{
        res.status(400).json({message:"Paramètre <Score> absent de la requête Http"})
    } 
});

