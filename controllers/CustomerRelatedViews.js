const sql = require("mssql");

exports.getCustomerType = ('/getCustomerType', (req, res, next) => {
    const customerId = req.query.customerId
    if (customerId) {
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, customerId);
        request.query(`SELECT [Customer Type] FROM [PROD].[Customer] WHERE [No_] = @inputField`)
        .then(result =>{
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)})
    }else{
        res.status(400).json({message:"Paramètre <customerId> absent de la requête Http"})
    }
});

exports.getCustomerListSimple = ('/getCustomerListSimple', (req, res, next) => {
    const request = new sql.Request();
    request.query(`select * from [PROD].[CustomerList]`)
    .then(result =>{
        res.status(200).json(result.recordset)
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)})
});

exports.getCustomerList = ('/getCustomerList', (req, res, next) => {
    const listLength = req.query.listLength
    if(listLength >=0){
        const request = new sql.Request();
        request.input('inputField', sql.Int, listLength);
        request.query(`SELECT * FROM [PROD].[Customer] order by No_ offset @inputField rows FETCH NEXT 50 ROWS ONLY`)
        .then(result =>{    
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)})
    }else{
        res.status(400).json({message:"Paramètre <listLength> absent de la requête Http"})
    }
});

exports.searchCustomerList = ('/searchCustomerList', (req, res, next) => {
    const { listLength, eltToSearch} = req.query
    if(eltToSearch && listLength >=0){
        const request = new sql.Request();
        request.input('inputField1', sql.VarChar, '%'+eltToSearch +'%');
        request.input('inputField2', sql.Int, listLength);
        request.query(`SELECT * FROM [PROD].[Customer]
                        where	[No_] LIKE @inputField1 or
                        [Name] LIKE @inputField1 or
                        [City] LIKE @inputField1 or
                        [Address] LIKE @inputField1
                        order by No_ 
                        offset @inputField2 rows 
                        FETCH NEXT 50 ROWS ONLY`)
        .then(result =>{    
            res.status(200).json(result.recordset)
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)})
    }else{
        res.status(400).json({message:"Paramètre <eltToSearch> ou <listLength> absent de la requête Http"})
    }
});

exports.getCURList = ('/getCURList',(req, res, next) => {
    console.log('1',req.query)
    const { customerId,accountType,customerType,legalStatus,identificationMode } = req.query
    if (accountType && customerType && legalStatus && identificationMode) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customerId);
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

exports.getCUSList = ('/getCUSList',(req, res, next) => {
    console.log('2',req.query)
    const { customerId,accountType,salesMode } = req.query
    if (accountType ) {
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, customerId);
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

exports.getGetCriditLimit = ('/getGetCriditLimit',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select [PROD].[CreditLimitCalculation](@inputField)")
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

exports.getActivityDetails = ('/getActivityDetails',(req, res, next) => {
    const customer = req.query.customerId
    if (customer) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, customer);
        request.query("select * from [PROD].[GetActivityDetails](@inputField)")
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

exports.getServiceZone = ('/getServiceZone',(req, res, next) => {
        var request = new sql.Request();
        request.query("select * from [PROD].[ServiceZone]")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getSalutationCode = ('/getSalutationCode',(req, res, next) => {
        var request = new sql.Request();
        request.query("select * from [PROD].[Salutation]")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getRevisionRequestList = ('/getRevisionRequestList',(req, res, next) => {
    const request = new sql.Request();
    request.query("select * from [PROD].[CustomerRevision]")
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getRevisionRequestCard = ('/getRevisionRequestCard',(req, res, next) => {
    const documentNo = req.query.documentNo
    if (documentNo) {
        var request = new sql.Request();
        request.input('inputField', sql.VarChar, documentNo);
        request.query("select * from [PROD].[CustomerRevision] where [Revision No_] = @inputField")
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







