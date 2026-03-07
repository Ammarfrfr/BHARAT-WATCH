class ApiError extends Error {
  contructor(
    statusCode,
    message,
    stack = "",
    error = [],
    data = "success"
  ){
    super(message),
    this.statusCode = statusCode,
    this.error = error
    
    if(stack){
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.contructor)
    }
  }
}

export {ApiError}