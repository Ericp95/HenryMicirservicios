const{Router}=require("express");
const controllers = require("../controllers");
const middleware = require("../middleware");

const router=Router();


router.get("/films", controllers.getFilm);

router.get("/films/:id", controllers.getFilmId);

router.post("/films", middleware.filmValidation ,controllers.createFilm);

 
module.exports=router;