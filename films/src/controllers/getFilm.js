const axios=require("axios");

module.exports= async(req,res)=>{

    const films= await axios.get("http://database:8004/Film")
    const response= films.data
    res.status(200).json(response)
}