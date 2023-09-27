const {Router}=require("express");
const controllers = require("../controllers");
const middleware= require("../middleware");

const router=Router();

router.get("/characters", middleware.characterValidation,controllers.getCharacter);

router.get("/characters/:id",middleware.characterValidation ,controllers.getCharacterId);

router.post("/characters", middleware.characterValidation,controllers.createCharacter);


module.exports=router;