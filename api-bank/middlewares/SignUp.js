//model data
const User = require("../models/user");

const checkDuplicateEmail = (req, res, next) =>{
    User.findOne({email: req.body.email})
        .exec((err, user)=>{
            if(err){
                res.status(500).send({message: err});
                return;
            }
            if(user){
                res.status(400).send({message: "El correo ya esta en uso <3"});
                return;
            }

            next();
        })
}
module.exports = checkDuplicateEmail;