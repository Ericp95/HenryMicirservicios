const data=require("../data")


module.exports= async(req,res)=>{

    const{id}=req.params
    const filmId= await data.filmID(id)
    
    res.status(200).json(filmId)
}