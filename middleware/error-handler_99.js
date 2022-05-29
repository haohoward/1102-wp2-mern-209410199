import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleWare_99 = (err, req, res, next) => {
  console.log('error', err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err });
};

export default errorHandlerMiddleWare_99;
