const {Router}=require("express");
const modelValidate=require("../middleware/modelValidator");
const store=require("../database");

const {response}=require("../utils");

const router=Router();

router.get("/:model", modelValidate, async(req,res)=>{

    const{model}=req.params;
    const character= await store[model].list();
   // res.status(200).json(response);
   response(res,200,character);
});

router.get("/:model/:id", modelValidate, async(req,res)=>{

    const{model,id}=req.params;
    const response= await store[model].get(id);
    res.status(200).json(response);
});

router.post("/:model", modelValidate, async(req,res)=>{

    const{model}=req.params;
    
    const response= await store[model].insert(req.body);//esto funciona pero es provisional creo...
    res.status(200).json(response);
});

module.exports=router;