const axios=require("axios");


module.exports= async (req,res)=>{

    const character= await axios.get("http://database:8004/Character")
    const characterResp= character.data
    
    res.status(200).json(characterResp)
}  