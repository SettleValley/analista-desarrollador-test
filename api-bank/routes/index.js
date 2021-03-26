var express = require('express');
var router = express.Router();

const authJWT = require("../middlewares/authJwt");
const userController = require("../controllers/user");

// used in all the routes below here
router.use((req, res, next)=>{
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// All can get access
router.get("/all", userController.allAccess);

/* GET home page. */
router.get('/dashboard', authJWT.verifyToken, userController.userBoard);

router.get('/client/:id', authJWT.verifyToken, userController.clientData);

router.get('/clientKmeans/:id', authJWT.verifyToken, userController.kmeans);

module.exports = router;
