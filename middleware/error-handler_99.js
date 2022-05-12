const errorHandlerMiddleware_99 =(err,req,res)=>{
    console.log('error',err);
    res.status(500).json({msg:'there was an error'})

}
export default errorHandlerMiddleware_99;