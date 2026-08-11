class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        errors= [],
        stack = ""
    ){
        super(message)
        this.statusCode =  statuscode
        this.data = null 
        this.message = message 
        this.success = false;
        this.errors = errors
        
        
        if(stack){
            this.stack = stack 
        }else{
            Error.caputureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}