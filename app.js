const express = require('express');
//const cors = require('cors');
const app = express();
var sql = require("mssql");
const stuffRouter = require('./routes/stuff');
//const { error } = require('console');
//let stuff =[];
//app.use(cors({origin:"http://108.175.0.116:7048" ,credentials:true}));
//app.use(cors());
//script pour se connexter à slq server

var config = {
  user: 'Report',
  password: 'Afrikedge@2024',
  server: '108.175.0.116\\SQL2022', 
  database: 'Demo Database BC (23-0)', 
  encrypt: false
};
// var config = {
//   user: 'sa',
//   password: '123456789',
//   server: 'localhost', 
//   database: 'Demo Database BC (23-0)', 
//   encrypt: false
// };

sql.connect(config)
  .then(() => {console.log('Connexion à microsoft sql server réussie !');
})
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
app.use('/app',[stuffRouter]);








module.exports = app; 