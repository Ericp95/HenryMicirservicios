const data=require("../data");
const {response}=require("../utils");

module.exports=async (req,res)=>{

    
    const createPlanet= await data.createPlanet(req.body);
    
   // res.status(200).json(createPlanet)

   response(res,200,createPlanet)
}