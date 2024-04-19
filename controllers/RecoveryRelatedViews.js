const sql = require("mssql");



exports.getRecoveryActivityList = ('/getRecoveryActivityList',(req, res, next) => {
    const request = new sql.Request();
    request.query(`select * from [PROD].[RecoveryActivityHeader]`)
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getRecoveryActivityCard = ('/getRecoveryActivityCard',(req, res, next) => {
    const data = []
    const recoveryActivityNo = req.query.recoveryActivityNo
    if(recoveryActivityNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, recoveryActivityNo);
        request.query("select * from [PROD].[RecoveryActivityHeader] where [No_]= @inputField")
        .then((result1) => {
            if(result1.recordset.length>0){
                data.push(result1.recordset[0])
                request.query("select * from [PROD].[RecoveryActivityLine] where [Document No_]= @inputField")
                .then(result2 => {
                    if(result2.recordset.length>0){
                        data.push(result2.recordset)
                    }else{
                        data.push([])
                    }
                    res.status(200).json(data)
                })
                .catch(err => {res.status(500).json({ err });console.log(err)})
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <recoveryActivityNo> absent de la requête Http"})
    }
});




exports.getPaymentPromiseList = ('/getPaymentPromiseList',(req, res, next) => {
    const request = new sql.Request();
    request.query(`select * from [PROD].[PaymentPromise]`)
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getPaymentPromiseCard = ('/getPaymentPromiseCard',(req, res, next) => {
    const paymentPromiseNo = req.query.paymentPromiseNo
    if(paymentPromiseNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, paymentPromiseNo);
        request.query("select * from [PROD].[PaymentPromise] where [No_]=@inputField ")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <paymentPromiseNo> absent de la requête Http"})
    }
});




exports.getAssignedDebtList = ('/getAssignedDebtList',(req, res, next) => {
    const request = new sql.Request();
    request.query(`select * from [PROD].[AssignedDebt]`)
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getAssignedDebtCard = ('/getAssignedDebtCard',(req, res, next) => {
    const assignedDebtNo = req.query.assignedDebtNo
    if(assignedDebtNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, assignedDebtNo);
        request.query("select * from [PROD].[AssignedDebt] where [Document No_]=@inputField ")
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <assignedDebtNo> absent de la requête Http"})
    }
});




exports.getRepossessionRequestList = ('/getRepossessionRequestList',(req, res, next) => {
    const request = new sql.Request();
    request.query(`select * from [PROD].[RepossessionRequest]`)
    .then((result) => {
        if(result.recordset.length>0){
            res.status(200).json(result.recordset)
        }else{
            res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
        }
    })
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});
exports.getRepossessionRequestCard = ('/getRepossessionRequestCard',(req, res, next) => {
    const repossessionRequestNo = req.query.repossessionRequestNo
    if(repossessionRequestNo){
        const request = new sql.Request();
        request.input('inputField', sql.VarChar, repossessionRequestNo);
        request.query("select * from [PROD].[RepossessionRequest] where [No_]=@inputField " )
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    }else{
        res.status(400).json({message:"Paramètre <repossessionRequestNo> absent de la requête Http"})
    }
});



