const errorHandlerMiddleware_99 =(err,req,res,next)=>{
    console.log('error',err);
    res.status(500).json({msg:err.message})

}
export default errorHandlerMiddleware_99;