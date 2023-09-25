const axios=require("axios");

module.exports=async (req,res)=>{

    const{id}=req.params
    const planet= await axios.get(`http://database:8004/Planet/${id}`)
    const response= planet.data
    res.status(200).json(response)
}