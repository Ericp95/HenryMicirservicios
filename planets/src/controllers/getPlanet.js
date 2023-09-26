const data=require("../data")

module.exports=async(req,res)=>{

    const planets= await data.list()
    
    res.status(200).json(planets)
};