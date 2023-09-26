//const axios=require("axios");

const data= require("../data")

module.exports= async (req,res)=>{

    const character= await data.list();
    
    
    res.status(200).json(character)
}  