const axios=require("axios");

module.exports=async(req,res)=>{

    const{id}=req.params
    const characterId= await axios.getAdapter(`http://database:8004/Character/${id}`)
    const characterIdResp= characterId.data

    res.status(200).json(characterIdResp);
};