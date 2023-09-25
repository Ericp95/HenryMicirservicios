const {Router}=require("express");
const controllers = require("../controllers");

const router=Router();

router.get("/planets", controllers.getPlanet);

router.get("/planets/:id", controllers.getPlanetId);

module.exports=router;