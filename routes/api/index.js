const router = require("express").Router();
const unitData=require("./unitData");

// unit data routes
router.use("/unitData",unitData);
module.exports = router;
