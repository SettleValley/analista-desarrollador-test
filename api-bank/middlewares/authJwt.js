const jwt = require("jsonwebtoken");
// const User = require("../models/user");

module.exports.verifyToken = (req, res, next)=>{
    let token = req.headers["x-access-token"];
    console.log(token);
    
    if(!token) return res.status(403).send({message: "Que va no tienes token papa"})

    jwt.verify(token, "settlevalley-verify-token", (err, decoded)=>{
        if(err) return res.status(401).send({message: "De aqui no pasa papaaa, que pasa...!!! Quieto"})

        req.userId = decoded.id;
        next();
    });
}
