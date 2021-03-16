const User = require("../models/user");

const jwt = require("jsonwebtoken");

exports.signup = (req, res)=>{
    const user = new User();
    user.email = req.body.email;
    user.password = user.encryptPassword(req.body.password);
    user.save((err, user)=>{
        if(err){
            res.status(500).send({message: err});
            return;
        }
        res.send({message: "Te guardaste bien en la db, guapo"});
    })
}

exports.signin = (req, res)=>{
    User.findOne({email: req.body.email})
        .exec((err, user)=>{
            if(err){
                res.status(500).send({message:err})
                return;
            }
            if(!user){
                res.status(401).send({message: "No te encontramos"});
                return;
            }
            if(!user.validPassword(req.body.password)){
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                  });
            }
            const token = jwt.sign({ id: user.id }, "settlevalley-verify-token", {
                expiresIn: 86400 // 24 hours
              });

            res.status(200).send({
                id: user._id,
                email: user.email,
                accessToken: token
            });
        })
}
