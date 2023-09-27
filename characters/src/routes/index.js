const {Router}=require("express");
const controllers = require("../controllers");
const middleware= require("../middleware");

const router=Router();

router.get("/characters", controllers.getCharacter);

router.get("/characters/:id",controllers.getCharacterId);

router.post("/characters", middleware.characterValidation,controllers.createCharacter);


module.exports=router;