const{Router}=require("express");
const controllers = require("../controllers");

const router=Router();


router.get("/films", controllers.getFilm);

router.get("/films/:id", controllers.getFilmId);


module.exports=router;