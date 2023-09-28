const data=require("../data");
const {response}=require("../utils");

module.exports=async (req,res)=>{

    const{id}=req.params
    const planetId= await data.planetID(id);
    
    //res.status(200).json(planetId)
    response(res,200,planetId);
}