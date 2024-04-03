const sql = require("mssql");

exports.getDRQList = ('/getDRQList',(req, res, next) => {
    var request = new sql.Request();
        request.query(`select * from [PROD].[DiscountRequest]`)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getDRQCard = ('/getDRQCard/:id',(req, res, next) => {
    const data = []
    var request = new sql.Request();
        request.query(`select * from [PROD].[DiscountRequest] where [No_]='${req.params.id}' `)
        .then((result1) => {
            if(result1.recordset.length>0){
                data.push[result1.recordset[0]]
                request.query(`select * from [PROD].[ApprovalFlow] where [Document No_]= '${req.params.id}'`)
                .then(result2 => {
                    if(result2.recordset.length>0){
                        data.push(result2.recordset)
                        res.status(200).json(data)
                    }
                    else{
                        data.push([])
                        res.status(200).json(data)
                    }
                })
                .catch(err => {res.status(500).json({ err });console.log(err)})
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});



exports.getRRQList = ('/getRRQList',(req, res, next) => {
    var request = new sql.Request();
        request.query(`select * from [PROD].[SalesOrderUnclocking]`)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getRRQCard = ('/getRRQCard/:id',(req, res, next) => {
    const data = []
    var request = new sql.Request();
        request.query(`select * from [PROD].[SalesOrderUnclocking] where [No_]='${req.params.id}' `)
        .then((result1) => {
            if(result1.recordset.length>0){
                data.push[result1.recordset[0]]
                request.query(`select * from [PROD].[CustomerHistory] where [Document No_]= '${req.params.id}'`)
                .then(result2 => {
                    if(result2.recordset.length>0){
                        data.push(result2.recordset)
                    }else{
                        data.push([])
                    }
                    request.query(`select * from [PROD].[ApprovalFlow] where [Document No_]= '${req.params.id}'`)
                    .then(result3 => {
                        if(result3.recordset.length>0){
                            data.push(result3.recordset)
                            res.status(200).json(data)
                        }else{
                            data.push([])
                            res.status(200).json(data)
                        }
                    })
                    .catch(err => {res.status(500).json({ err });console.log(err)})
                })
                .catch(err => {res.status(500).json({ err });console.log(err)})
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});



exports.getRAList = ('/getRAList',(req, res, next) => {
    var request = new sql.Request();
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

exports.getRACard = ('/getRACard/:id',(req, res, next) => {
    const data = []
    var request = new sql.Request();
        request.query(`select * from [PROD].[RecoveryActivityHeader] where [No_]='${req.params.id}' `)
        .then((result1) => {
            if(result1.recordset.length>0){
                data.push[result1.recordset[0]]
                request.query(`select * from [PROD].[RecoveryActivityLine] where [Document No_]= '${req.params.id}'`)
                .then(result2 => {
                    if(result2.recordset.length>0){
                        data.push(result2.recordset)
                        res.status(200).json(data)
                    }else{
                        data.push([])
                        res.status(200).json(data)
                    }
                })
                .catch(err => {res.status(500).json({ err });console.log(err)})
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});


exports.getPPList = ('/getPPList',(req, res, next) => {
    var request = new sql.Request();
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

exports.getPPCard = ('/getPPCard/:id',(req, res, next) => {
    var request = new sql.Request();
        request.query(`select * from [PROD].[PaymentPromise] where [No_]='${req.params.id}' `)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});



exports.getADList = ('/getADList',(req, res, next) => {
    var request = new sql.Request();
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

exports.getADCard = ('/getADCard/:id',(req, res, next) => {
    var request = new sql.Request();
        request.query(`select * from [PROD].[AssignedDebt] where [Document No_]='${req.params.id}' `)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});



exports.getRPRQList = ('/getRPRQList',(req, res, next) => {
    var request = new sql.Request();
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

exports.getRPRQCard = ('/getRPRQCard/:id',(req, res, next) => {
    var request = new sql.Request();
        request.query(`select * from [PROD].[RepossessionRequest] where [No_]='${req.params.id}' `)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset[0])
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});



exports.getPVRQList = ('/getPVRQList',(req, res, next) => {
    var request = new sql.Request();
        request.query(`select * from [PROD].[PaymentRequestHeader]`)
        .then((result) => {
            if(result.recordset.length>0){
                res.status(200).json(result.recordset)
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getPVRQCard = ('/getPVRQCard/:id',(req, res, next) => {
    const data = []
    var request = new sql.Request();
        request.query(`select * from [PROD].[PaymentRequestHeader] where [No_]='${req.params.id}' `)
        .then((result1) => {
            if(result1.recordset.length>0){
                data.push[result1.recordset[0]]
                request.query(`select * from [PROD].[PaymentRequestLine] where [Request No_]= '${req.params.id}'`)
                .then(result2 => {
                    if(result2.recordset.length>0){
                        data.push(result2.recordset)
                    }else{
                        data.push([])
                    }
                    request.query(`select * from [PROD].[ApprovalFlow] where [Document No_]= '${req.params.id}'`)
                    .then(result3 => {
                        if(result3.recordset.length>0){
                            data.push(result3.recordset)
                            res.status(200).json(data)
                        }else{
                            data.push([])
                            res.status(200).json(data)
                        }
                    })
                    .catch(err => {res.status(500).json({ err });console.log(err)})
                })
                .catch(err => {res.status(500).json({ err });console.log(err)})
            }else{
                res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
            }
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});