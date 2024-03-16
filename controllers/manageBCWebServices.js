//const axios = require('axios')
const httpntlm = require('httpntlm')


exports.saveSaleQuote = ('/saveSaleQuote',(req, res, next) => {
    const url=`http://108.175.0.116:7048/BC230/ODataV4/quotes_run?Company=${req.query.company}`
    const credentials = Buffer.from('108.175.0.116\\webservices:Afrikedge@2003').toString('base64')
    httpntlm
    .post({
        url: url,
        username: 'webservices',
        password: 'Afrikedge@2003',
        workstation: 'choose.something',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `NTLM ${credentials}`,
            'accept': 'application/json',
        },
        body: req.body.data
        }, function (err, resp) {
            if (err) {
                res.status(500).json({ err })
                console.log('error',err)
            } else {
                switch (resp.statusCode){
                    case 200:
                        const quoteNo = JSON.parse(JSON.parse(resp.body).value).message
                        res.status(resp.statusCode).json({quoteNo}); break;
                    case 400:
                        const BCErrorMsg = JSON.parse(resp.body)
                        res.status(resp.statusCode).json(BCErrorMsg); break;
                    default:
                        res.status(resp.statusCode).json({message:'Unauthorized, contact your administrator'})
                }
            }
        });

  });