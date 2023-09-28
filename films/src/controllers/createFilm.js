const data=require("../data");

const {response}=require("../utils")


module.exports= async(req,res)=>{

    
    const createFilm= await data.createFilm(req.body)
    
    //res.status(200).json(createFilm)
    response(res,200,createFilm);
} 