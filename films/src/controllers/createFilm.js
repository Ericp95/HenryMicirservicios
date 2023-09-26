const data=require("../data")


module.exports= async(req,res)=>{

    
    const createFilm= await data.createFilm()
    
    res.status(200).json(createFilm)
}