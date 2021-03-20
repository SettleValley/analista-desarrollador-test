const Client = require("../models/client");

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