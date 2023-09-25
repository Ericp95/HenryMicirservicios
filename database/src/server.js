const express=require ("express");
const morgan=require("morgan");


const server=express();

server.use(morgan("dev"));

server.use(express.json());

server.use(require("./routes"));

server.use("*",(req,res)=>{//sino encuentra ningun endpoint da el 404
    res.status(404).send("not found")
})

server.use((err,req,res,next)=>{
   // res.send("este es el manejador de errores")
   res.status(err.statusCode || 500).send({
    error:true,
    message:err.message
   });
})//arreglarlo que no andaa!!


module.exports=server;