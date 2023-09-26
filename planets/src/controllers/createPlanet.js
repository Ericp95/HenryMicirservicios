const data=require("../data");

module.exports=async (req,res)=>{

    
    const createPlanet= await data.createPlanet();
    
    res.status(200).json(createPlanet)
}