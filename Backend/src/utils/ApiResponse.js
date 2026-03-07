class ApiResponse{
  constructor(statusCode, message, data = "success"){
    super(message),
    this.statusCode = statusCode,
    this.data = data
  }
}

export {ApiResponse}