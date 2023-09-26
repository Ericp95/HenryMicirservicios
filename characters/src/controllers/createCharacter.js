const data = require("../data");

module.exports=async(req,res)=>{

    
    const createCharac= await data.createCharacter(req.body)
    //const characterIdResp= characterId.data

    res.status(200).json(createCharac);
}     