const Client = require("../models/client");
const request = require('request');


exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content Login.");
};

exports.clientData = (req, res) => {    
    const clientID = req.params.id;

    Client.findOne({CLIENTNUM: clientID})
        .exec((err, data)=>{
            console.log(data);
            if(err) res.status(200).send({message: err});
            res.status(200).send(data);

        });
};

exports.kmeans = (req, res)=>{
    const clientID = req.params.id;
    const option = {
        url: `http://localhost:5000/users/${clientID}`,
    }
    function callback(error, response,body){
        if(!error && response.statusCode == 200){
            res.status(200).send(JSON.parse(body));
        }
    }
    request(option, callback)

    
}