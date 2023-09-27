module.exports= (fn)=>{  // con eñ fn recibe la funcion create personaje

    return (req,res,next)=>{
         fn(req,res).catch((err)=>{//controlador de la funcion osea fn necesita req y res y ejecuta la funcion y si hay error lo lleva al .catch //con el .catch agarramos el error de la promesa
             next(err);// si hay error saltemos al manejador de errores de express
         })                                    
                                              
    }
};


//esto se usa para el manejo de errores y para no estar usando simepre el trycatch en todos lados!!

//esto se llama funcion del orden superior 


