const data=require("../data")

module.exports=async (req,res)=>{

    const{id}=req.params
    const planetId= await data.planetID(id);
    
    res.status(200).json(planetId)
}