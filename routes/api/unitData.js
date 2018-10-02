const router=require("express").Router();
const unitDataController=require("../../controllers/unitDataController");

router.route("/")//matches with /api/unitData
  .get(unitDataController.findAll);//sends all faction data

//router.route("/:")
module.exports=router;