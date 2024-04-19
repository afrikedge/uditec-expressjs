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
  // console.log(field)
  // console.log(value)
  // console.log(language)
    request.query(`select [PROD].[OptionLabel]('${language}','${'['+field+']'}','${value}')`)
    .then((optionLabel) => res.status(200).json(optionLabel))
  .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getUserList = ('/getUserList',(req, res, next) => {
  var request = new sql.Request();
    request.query(`select * from [PROD].[ExternalUser]`)
    .then((userList) => res.status(200).json(userList))
  .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

exports.getUserInfo = ('/getUserInfo',(req, res, next) => {
  var request = new sql.Request();
  const webUser = req.query.webUser
    request.query(`select * from [PROD].[ExternalUser] where Code='${webUser}'`)
    .then((userData) => res.status(200).json(userData))
  .catch((err) => {res.status(500).json({ err });console.log(err)}); 
});

  exports.getSOList = ('/getSOList',(req, res, next) => {
    const respCenter = req.query.respCenter
    var request = new sql.Request();
      request.query(`select * from [PROD].[SalesOrderHeader] where [Responsibility Center] ='${respCenter}'`)
      .then((soList) => res.status(200).json(soList))
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

  exports.getSOCard = ('getSOCard/:id', (req, res, next) => {
    let data = []
    const respCenter = req.query.respCenter
    var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[SalesOrderHeader] WHERE [No_]='${req.params.id}' and [Responsibility Center] ='${respCenter}'`)
      .then(soHeader => {
          request.query(`SELECT * FROM [PROD].[SalesOrderLine] WHERE [Document No_]='${req.params.id}'`)
          .then(soLine =>{
              data = [soHeader.recordset[0],soLine.recordset]
              res.status(200).json(data) 
          })
          .catch((err) => {res.status(500).json({ err });console.log(err)})
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });

  exports.getSOCardLine = ('getSOCardLine/:id', (req, res, next) => {
    var request = new sql.Request();
        request.query(`SELECT * FROM [PROD].[SalesOrderLine] WHERE [Document No_]='${req.params.id}'`)
        .then(soLine =>{
            res.status(200).json(soLine) 
        })
        .catch((err) => {res.status(500).json({ err });console.log(err)})
    });





  exports.getSQList = ('/getSQList',(req, res, next) => {
    const respCenter = req.query.respCenter
    var request = new sql.Request();
      request.query(`select * from [PROD].[SalesQuoteHeader] where [Responsibility Center] ='${respCenter}'`)
      .then((sqList) => res.status(200).json(sqList))
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

 exports.getSQCard = ('getSQCard/:id', (req, res, next) => {
    let data = []
    const respCenter = req.query.respCenter
    var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[SalesQuoteHeader] WHERE [No_]='${req.params.id}' and [Responsibility Center] ='${respCenter}'`)
      .then(sqHeader => {
          request.query(`SELECT * FROM [PROD].[SalesQuoteLine] WHERE [Document No_]='${req.params.id}'`)
          .then(sqLine =>{
              data = [sqHeader.recordset[0],sqLine.recordset]
              res.status(200).json(data) 
          })
          .catch((err) => {res.status(500).json({ err });console.log(err)})
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });


    exports.getSIList = ('/getSIList/:id',(req, res, next) => {
      var request = new sql.Request();
        request.query(`select * from [PROD].[SalesInvoiceHeader] where [Customer No_] ='${req.params.id}'`)
        .then((siList) => res.status(200).json(siList))
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });

    exports.getSILine = ('/getSILine/:id',(req, res, next) => {
      var request = new sql.Request();
        request.query(`select * from [PROD].[SalesInvoiceLine] where [Document No_] = '${req.params.id}'`)
        .then((siLine) => res.status(200).json(siLine))
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });










  exports.getCRList = ('/getCRList',(req, res, next) => {
      const respCenter = req.query.respCenter
      var request = new sql.Request();
      request.query(`select * from [PROD].[MirindraRequestHeader] where [Responsibility Center] ='${respCenter}'`)
      .then((result) => {
          if(result.recordset.length>0){
              res.status(200).json(result.recordset)
          }else{
              res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
          }

      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

 exports.getCRCard = ('getCRCard/:id', (req, res, next) => {
      let data = []
      const respCenter = req.query.respCenter
      var request = new sql.Request();
          request.query(`SELECT * FROM [PROD].[MirindraRequestHeader] WHERE [No_]='${req.params.id}' and [Responsibility Center] ='${respCenter}'`)
          .then(result1 => {
              if(result1.recordset.length>0){
                  data.push(result1.recordset[0])
                  request.query(`SELECT * FROM [PROD].[MirindraRequestLine] WHERE [Document No_]='${req.params.id}'`)
                  .then(result2 =>{
                      data.push(result2.recordset)
                      request.query(`SELECT * FROM [PROD].[MirindraRequestCriteria] WHERE [Document No_]='${req.params.id}' and [Document Type]=0 `)
                      .then(result3 =>{
                          data.push(result3.recordset)
                          request.query(`SELECT * FROM [PROD].[CreditAmortization] WHERE [Document No_]='${req.params.id}' and [Document Type]=0 `)
                          .then(result4 =>{
                              data.push(result4.recordset)
                              res.status(200).json(data)                              
                          })
                          .catch((err) => {res.status(500).json({ err });console.log(err)})
                      })
                      .catch((err) => {res.status(500).json({ err });console.log(err)})
                  })
                  .catch((err) => {res.status(500).json({ err });console.log(err)})
              }else{
                  res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
              }
          })
          .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });

    exports.getMirindraGP = ('/getMirindraGP',(req, res, next) => {
      var request = new sql.Request();
      request.query(`select * from [PROD].[MirindraGlobalParameter]`)
      .then((result) => {
          if(result.recordset.length>0){
              res.status(200).json(result.recordset[0])
          }else{
              res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
          }
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });

    exports.getMirindraCV = ('/getMirindraCV/:id',(req, res, next) => {
      var request = new sql.Request();
      request.query(`select * from [PROD].[MirindraCriteriaValue] where [Criteria]='${req.params.id}'`)
      .then((result) => {
          if(result.recordset.length>0){
              res.status(200).json(result.recordset)
          }else{
              res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
          }
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });

    exports.getMirindraRD = ('/getMirindraRD',(req, res, next) => {
      var request = new sql.Request();
      const docNo = req.query.docNo
      request.query(`select [PROD].[MirindraDeposit](0,'${docNo?docNo:''}')`)
      .then((result) => {
          if(result.recordset.length>0){
              res.status(200).json(result.recordset[0][''])
          }else{
              res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
          }
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });

    exports.getItemVAT = ('/getItemVAT',(req, res, next) => {
      var request = new sql.Request();
      const VATOnItem = req.query.VATOnItem
      const VATOnCust = req.query.VATOnCust
      request.query(`select [PROD].[VATRate]('${VATOnCust}','${VATOnItem}')`)
      .then((result) => {
          if(result.recordset.length>0){
            console.log(result)
              res.status(200).json(result.recordset[0][''])
          }else{
              res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
          }
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });


    exports.getAmortization = ('/getAmortization',(req, res, next) => {
      var request = new sql.Request();
      const docNo = req.query.docNo
      const duration = req.query.duration
      const loanAmount = req.query.loanAmount
      const installment = req.query.installment
      const finalInstallment = req.query.finalInstallment
      const interestInclVAT = req.query.interestInclVAT

      request.query(`select * from [PROD].[CreditSimulation](0,'${docNo}',${duration},${loanAmount},${installment},${finalInstallment},${interestInclVAT}) order by [Line No_]`)
      .then((result) => {
          if(result.recordset.length>0){
              res.status(200).json(result.recordset)
          }else{
              res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
          }
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });






















    exports.getCustomerList = ('/getCustomerList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Customer]`)
      .then(customerList =>{
          res.status(200).json(customerList)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });

    exports.getCustomerCard = ('/getCustomerCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Customer] WHERE [No_] ='${req.params.id}'`)
      .then(customerCard =>{
          res.status(200).json(customerCard)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });



    exports.getContactList = ('/getContactList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Contact]`)
      .then(contactList =>{
          res.status(200).json(contactList)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });

    exports.getContactCard = ('/getContactCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Contact] where [No_] ='${req.params.id}'`)
      .then(contactCard =>{
          res.status(200).json(contactCard)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });



    exports.getLeadList = ('/getLeadList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Lead]`)
      .then(leadList =>{
          res.status(200).json(leadList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getLeadCard = ('/getLeadCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Lead] where [No_]='${req.params.id}'`)
      .then(leadCard =>{
          res.status(200).json(leadCard)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });



    exports.getItemList = ('/getItemList', (req, res, next) => {
      const respCenter = req.query.respCenter
      var request = new sql.Request();
      request.query(`select * from [PROD].[UserItem]('${respCenter}')`)
      .then(itemList =>{
          res.status(200).json(itemList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getItemCard = ('/getItemCard/:id', (req, res, next) => {
      const respCenter = req.query.respCenter
      var request = new sql.Request();
      request.query(`select * from [PROD].[UserItem]('${respCenter}') where [No_]='${req.params.id}'`)
      .then(itemCard =>{
          res.status(200).json(itemCard)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getItemAttrib = ('/getItemAttrib/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`select * from [PROD].[ItemAttribute]('${req.params.id}')`)
      .then(itemAttrib =>{
          res.status(200).json(itemAttrib)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getItemWarrantyPlan = ('/getItemWarrantyPlan/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`select * from [PROD].[ItemWarranty]('${req.params.id}')`)
      .then(itemWarrantyPlan =>{
          res.status(200).json(itemWarrantyPlan)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });



    exports.getLocationList = ('/getLocationList', (req, res, next) => {
      var request = new sql.Request();
      const respCenter = req.query.respCenter
      request.query(`SELECT * from [PROD].[UserLocation]('${respCenter}')`)
      .then(LocationList =>{
          res.status(200).json(LocationList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getLocationCard = ('/getLocationCard/:id', (req, res, next) => {
      var request = new sql.Request();
      const respCenter = req.query.respCenter
      request.query(`SELECT * from [PROD].[UserLocation]('${respCenter}') where [Code]='${req.params.id}'`)
      .then(locationCard =>{
          res.status(200).json(locationCard)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getLocationBinCode = ('/getLocationBinCode/:id', (req, res, next) => {
      var request = new sql.Request();
      const respCenter = req.query.respCenter
      request.query(`SELECT [Shipment Bin Code] FROM [PROD].[UserLocation]('${respCenter}') where [Code]='${req.params.id}'`)
      .then(locationBinCode =>{
          res.status(200).json(locationBinCode)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });


    exports.getShipToAddressList = ('/getShipToAddressList/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[ShipToAddress] where [Customer No_]='${req.params.id}'`)
      .then(result =>{
          res.status(200).json(result.recordset)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getShipToAddressCard = ('/getShipToAddressCard/:id1/:id2', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[ShipToAddress] where [Customer No_]='${req.params.id1}' AND [Code]='${req.params.id2}'`)
      .then(shipToAddressCard =>{
          res.status(200).json(shipToAddressCard)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });



    exports.getItemAvailabilityInfo = ('/getItemAvailabilityInfo/:id1/:id2', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT top(1) *  FROM [PROD].[ItemAvailability] where No_='${req.params.id1}' and [Location Code]='${req.params.id2}'`)
      .then(itemAvailibilityInfo =>{
          res.status(200).json(itemAvailibilityInfo)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });


    exports.getCampaignList = ('/getCampaignList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[Campaign]`)
      .then(campaignList =>{
          res.status(200).json(campaignList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getPaymentMethodList = ('/getPaymentMethodList', (req, res, next) => {
      var request = new sql.Request();
      const respCenter = req.query.respCenter
      request.query(`SELECT * FROM [PROD].[PaymentMethod] where [Responsability Center]='${respCenter}'`)
      .then(paymentMethodList =>{
          res.status(200).json(paymentMethodList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getSaleOrderPaymentLine = ('/getSaleOrderPaymentLine/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[SalesOrderPayment] where [Document No_]='${req.params.id}'`)
      .then(paymentLine =>{
          res.status(200).json(paymentLine)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getShipmentMethodList = ('/getShipmentMethodList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [PROD].[ShipmentMethod]`)
      .then(shipmentMethodList =>{
          res.status(200).json(shipmentMethodList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });






  //   exports.getCRList = ('/getCRList',(req, res, next) => {
  //     const respCenter = req.query.respCenter
  //     var request = new sql.Request();
  //     request.query(`select * from [PROD].[MirindraRequestHeader] where [Responsibility Center] ='${respCenter}'`)
  //     .then((result) => {
  //         if(result.recordset.length>0){
  //             res.status(200).json(result.recordset)
  //         }else{
  //             res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
  //         }

  //     })
  //     .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  // });

//  exports.getCRCard = ('getCRCard/:id', (req, res, next) => {
//       let data = []
//       const respCenter = req.query.respCenter
//       //let crCardHeader, crCardLine, crCardCriteria, crCardAmortization
//       var request = new sql.Request();
//           request.query(`SELECT * FROM [PROD].[MirindraRequestHeader] WHERE [No_]='${req.params.id}' and [Responsibility Center] ='${respCenter}'`)
//           .then(result1 => {
//               if(result1.recordset.length>0){
//                   data.push(result1.recordset[0])
//                   request.query(`SELECT * FROM [PROD].[MirindraRequestLine] WHERE [Document No_]='${req.params.id}'`)
//                   .then(result2 =>{
//                       data.push(result2.recordset)
//                       request.query(`SELECT * FROM [PROD].[MirindraRequestCriteria] WHERE [Document No_]='${req.params.id}' and [Document Type]=0 `)
//                       .then(result3 =>{
//                           data.push(result3.recordset)
//                           res.status(200).json(data)
//                           // request.query(`SELECT * FROM [PROD].[CreditAmortization] WHERE [Document No_]='${req.params.id}' and [Document Type]=0 `)
//                           // .then(result4 =>{
//                           //     data.push(result4.recordset)
//                           //     res.status(200).json(data)                              
//                           // })
//                           // .catch((err) => {res.status(500).json({ err });console.log(err)})
//                       })
//                       .catch((err) => {res.status(500).json({ err });console.log(err)})
//                   })
//                   .catch((err) => {res.status(500).json({ err });console.log(err)})
//               }else{
//                   res.status(404).json({message:"Aucun enregistrement n'a été trouvé"})
//               }
//           })
//           .catch((err) => {res.status(500).json({ err });console.log(err)}); 
//     });