const router=require("express").Router();
const unitDataController=require("../../controllers/unitDataController");

router.route("/")//matches with /api/unitData
  .get(unitDataController.findAll);//sends all faction data
// app.get("/api/hello",(req,res)=>{
//   res.send({express:"hello from express"})
// });
router.route("/api/hello")
  .get((req,res)=>res.send({express:"hello from express"}))
//router.route("/:")
module.exports=router;