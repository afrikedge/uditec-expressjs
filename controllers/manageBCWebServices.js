//const axios = require('axios')
const httpntlm = require('httpntlm')


exports.saveSaleQuote = ('/saveSaleQuote',(req, res, next) => {
    const url='http://108.175.0.116:7048/BC230/ODataV4/quotes_run?Company=b9643631-44bc-ee11-9080-6045bdc8c195'
    const credentials = Buffer.from('108.175.0.116\\webservices:Afrikedge@2003').toString('base64')
    // const headers ={
    //     'Content-Type': 'application/json',
    //     'Authorization': `NTLM ${credentials}`,
    //     'accept': 'application/json',
    // }

    // axios.post(url,{name:'okala'},{headers,withCredentials:true})
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
console.log(req.body)
httpntlm.post({
            url: url,
            username: '',
            password: '',
            workstation: 'choose.something',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `NTLM ${credentials}`,
                'accept': 'application/json',
            },
            body: req.body.data
        }, function (err, res) {
            if (err) {
                console.error(err);
            } else {
                console.log(res);
            }
        });


  });