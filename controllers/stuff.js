var sql = require("mssql");


  exports.getSOList = ('/getSOList',(req, res, next) => {
    var request = new sql.Request();
      request.query('select * from [TEST].[SalesOrderHeader]')
      .then((soList) => res.status(200).json(soList))
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

  exports.getSOCard = ('getSOCard/:id', (req, res, next) => {
    let data = []
    var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[SalesOrderHeader] WHERE [No_]='${req.params.id}'`)
      .then(soHeader => {
          request.query(`SELECT * FROM [TEST].[SalesOrderLine] WHERE [Document No_]='${req.params.id}'`)
          .then(soLine =>{
              data = [soHeader.recordset[0],soLine.recordset]
              res.status(200).json(data) 
          })
          .catch((err) => {res.status(500).json({ err });console.log(err)})
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });





  exports.getSQList = ('/getSQList',(req, res, next) => {
    var request = new sql.Request();
      request.query('select * from [TEST].[SalesQuoteHeader]')
      .then((sqList) => res.status(200).json(sqList))
    .catch((err) => {res.status(500).json({ err });console.log(err)}); 
  });

 exports.getSQCard = ('getSQCard/:id', (req, res, next) => {
    let data = []
    var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[SalesQuoteHeader] WHERE [No_]='${req.params.id}'`)
      .then(sqHeader => {
          request.query(`SELECT * FROM [TEST].[SalesQuoteLine] WHERE [Document No_]='${req.params.id}'`)
          .then(sqLine =>{
              data = [sqHeader.recordset[0],sqLine.recordset]
              res.status(200).json(data) 
          })
          .catch((err) => {res.status(500).json({ err });console.log(err)})
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)}); 
    });





    exports.getCustomerList = ('/getCustomerList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Customer]`)
      .then(customerList =>{
          res.status(200).json(customerList)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });

    exports.getCustomerCard = ('/getCustomerCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Customer] WHERE [No_] ='${req.params.id}'`)
      .then(customerCard =>{
          res.status(200).json(customerCard)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });





    exports.getContactList = ('/getContactList/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Contact] where [Customer No_]='${req.params.id}'`)
      .then(contactList =>{
          res.status(200).json(contactList)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });

    exports.getContactCard = ('/getContactCard/:id1/:id2', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Contact] where [Customer No_]='${req.params.id1}' AND [No_]='${req.params.id2}'`)
      .then(contactCard =>{
          res.status(200).json(contactCard)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });





    exports.getLeadList = ('/getLeadList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Lead]`)
      .then(leadList =>{
          res.status(200).json(leadList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getLeadCard = ('/getLeadCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Lead] where [No_]='${req.params.id}'`)
      .then(leadCard =>{
          res.status(200).json(leadCard)
      })
      .catch((err) => {res.status(500).json({ err });console.log(err)})
    });





    exports.getItemList = ('/getItemList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Item]`)
      .then(itemList =>{
          res.status(200).json(itemList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getItemCard = ('/getItemCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Item] where [No_]='${req.params.id}'`)
      .then(itemCard =>{
          res.status(200).json(itemCard)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });





    exports.getLocationList = ('/getLocationList', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Location]`)
      .then(LocationList =>{
          res.status(200).json(LocationList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getLocationCard = ('/getLocationCard/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[Location] where [No_]='${req.params.id}'`)
      .then(locationCard =>{
          res.status(200).json(locationCard)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });





    exports.getShipToAddressList = ('/getShipToAddressList/:id', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[ShipToAddress] where [Customer No_]='${req.params.id}'`)
      .then(shipToAddressList =>{
          res.status(200).json(shipToAddressList)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });

    exports.getShipToAddressCard = ('/getShipToAddressCard/:id1/:id2', (req, res, next) => {
      var request = new sql.Request();
      request.query(`SELECT * FROM [TEST].[ShipToAddress] where [Customer No_]='${req.params.id1}' AND [Code]='${req.params.id2}'`)
      .then(shipToAddressCard =>{
          res.status(200).json(shipToAddressCard)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });



    exports.getItemAvailabilityInfo = ('/getItemAvailabilityInfo/:id1/:id2', (req, res, next) => {
      var request = new sql.Request();
      console.log('salut')
      request.query(`SELECT * FROM [TEST].[ItemAvailability] where No_='${req.params.id1}' and [Location Code]='${req.params.id2}'`)
      .then(itemAvailibilityInfo =>{
        console.log('salut 2')
          res.status(200).json(itemAvailibilityInfo)
      })
      .catch((err) => {res.status(400).json({ err });console.log(err)})
    });


