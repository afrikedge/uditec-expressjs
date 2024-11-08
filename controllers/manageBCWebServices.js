//const axios = require('axios')
const httpntlm = require('httpntlm')
//const credentials = Buffer.from('108.175.0.116\\webservices:Afrikedge@2003').toString('base64')
const credentials = Buffer.from('10.64.25.5\\WEBSERVICES:@Fr!kedge20$4').toString('base64')
const getHttpntlmConfig = (param,data) => {

    return {
        url: `http://10.64.25.5:7048/UDTBC/ODataV4/api_run?Company=${param}`,
        username: 'WEBSERVICES',
        password: '@Fr!kedge20$4',
        workstation: 'choose.something',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `NTLM ${credentials}`,
            'accept': 'application/json',
        },
        body:data
    }
}

const sendServerResponse = (res,err,resp) => {
    if (err) {
        res.status(500).json({ err })
    } else {
        console.log('bjr',resp.body)
        switch (resp.statusCode){
            case 200:
                const message = JSON.parse(resp.body).value
                if (new String(message).includes("Unkwnown parameter")) res.status(400).json(message)
                else {
                    const documentNo = JSON.parse(JSON.parse(resp.body).value).message
                    res.status(resp.statusCode).json({documentNo})
                }; break;
            case 400:
                const BCErrorMsg400 = JSON.parse(resp.body)
                res.status(resp.statusCode).json(BCErrorMsg400); break;
            case 404:
                const BCErrorMsg404 = JSON.parse(resp.body)
                res.status(resp.statusCode).json(BCErrorMsg404); break;
            default:
                res.status(resp.statusCode).json({message:'Unauthorized, contact your administrator'})
        }
    }
}

exports.getBCWSResponse = ('/getBCWSResponse',(req, res, next) => {
    httpntlm
    .post(
        getHttpntlmConfig(req.query.company,req.body.data),
        function (err, resp) {
            sendServerResponse(res,err,resp)
        });
  });

