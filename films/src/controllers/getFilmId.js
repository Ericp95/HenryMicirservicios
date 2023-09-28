const data=require("../data")
const {response}=require("../utils")

module.exports= async(req,res)=>{

    const{id}=req.params
    const filmId= await data.filmID(id)
    
    //res.status(200).json(filmId)
    response(res,200,filmId)
} 