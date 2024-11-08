const express = require('express');
//const cors = require('cors');
const app = express();
var sql = require("mssql");
const stuffRouter = require('./routes/stuff');
const RecoveryRelatedViewsRouter = require('./routes/RecoveryRelatedViews')
const CustomerRelatedViewsRouter = require('./routes/CustomerRelatedViews')
const LabelManagementApiRouter = require('./routes/LabelManagementApi')
const CreditRelatedViewsRouter = require('./routes/CreditRelatedViews')
const LeadRelatedViewsRouter = require('./routes/LeadRelatedViews')
const SalesGlobalRelatedViewsRouter = require('./routes/SalesGlobalRelatedViews')
const ItemRelatedViewsRouter = require('./routes/ItemRelatedViews')
const SalesOrderRelatedViewsRouter = require('./routes/SalesOrderRelatedViews')
const UserRelatedViewsRouter = require('./routes/UserRelatedViews')
const FilesManagementApiRouter = require('./routes/FilesManagementApi')

//const { error } = require('console');
//let stuff =[];
//app.use(cors({origin:"http://108.175.0.116:7048" ,credentials:true}));
//app.use(cors());
//script pour se connexter à slq server

 var config = {
    user: 'WebApp',
    password: '@Fr!kedge20$4',
    server: '10.64.25.9', 
    database: 'UDT-BC365', 
    encrypt: false
  };

sql.connect(config)
  .then(() => {console.log('Connexion à microsoft sql server réussie !')})
  .catch((err) => console.log(err));

app.use(express.json());

// script pour définir des hearders à nos objets de réponse
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/app',[stuffRouter,RecoveryRelatedViewsRouter,CustomerRelatedViewsRouter,LabelManagementApiRouter,CreditRelatedViewsRouter,LeadRelatedViewsRouter,SalesGlobalRelatedViewsRouter,ItemRelatedViewsRouter,SalesOrderRelatedViewsRouter,UserRelatedViewsRouter,FilesManagementApiRouter]);








module.exports = app; 