const {Router}=require("express");
const controllers = require("../controllers");

const middleware=require("../middleware");

const router=Router();

router.get("/planets", controllers.getPlanet);

router.get("/planets/:id", controllers.getPlanetId);

router.post("/planets", middleware.planetValidator, controllers.createPlanet);

module.exports=router;