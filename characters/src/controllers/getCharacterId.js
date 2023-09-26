//const axios=require("axios");
const data = require("../data");

module.exports=async(req,res)=>{

    const{id}=req.params
    const characterId= await data.characterID(id)
    //const characterIdResp= characterId.data

    res.status(200).json(characterId);
};