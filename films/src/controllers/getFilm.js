

const data=require("../data")

module.exports= async(req,res)=>{

    const films= await data.list()
    

    res.status(200).json(films)
}