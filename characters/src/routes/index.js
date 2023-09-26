const {Router}=require("express");
const controllers = require("../controllers");

const router=Router();

router.get("/characters", controllers.getCharacter);

router.get("/characters/:id", controllers.getCharacterId);

router.post("/characters", controllers.createCharacter);


module.exports=router;