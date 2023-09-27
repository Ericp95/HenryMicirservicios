//const axios=require("axios");

const data= require("../data");

const {response}=require("../utils");

module.exports= async (req,res)=>{

    const character= await data.list();
    
    
   // res.status(200).json(character)
   response(res,200,character);
}  