const server=require("./src/server");

const PORT= 8002;

server.listen(PORT,()=>{
    console.log(`Film listening on port ${PORT}`)
});