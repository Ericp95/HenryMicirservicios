const {Router}=require("express");
const controllers = require("../controllers");

const router=Router();

router.get("/characters", controllers.getCharacter);

router.get("/characters/:id", controllers.getCharacterId);


module.exports=router;