class ClientError extends Error{
    constructor(message,statusCode=400){
        super(message);
        this.statusCode= statusCode;

    }
}

module.exports=  {ClientError};

//creamos una clase error para dañre un ,ensaje y un codigo status al error
// esto se usa par controlar errores!!

