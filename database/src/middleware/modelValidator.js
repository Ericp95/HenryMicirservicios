const {ClientError}=require("../utils/errors");

module.exports= (req,res,next)=>{

    const{model}=req.params

    if(["Character","Film","Planet"].includes(model)){
        return next();
    }else{
        //throw Error("invalid model")
        throw new ClientError("error en el nombre del modelo",401)
    }
};