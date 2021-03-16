const express = require('express');
const router = express.Router();
// verify sign up
const verifySignUp = require("../middlewares/SignUp");
const authController = require("../controllers/auth");


// used in all the routes below here
router.use((req, res, next)=>{
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
/* signup. */
router.post("/signup", verifySignUp, authController.signup);

/* signin. */
router.post("/signin", authController.signin);



module.exports = router;
