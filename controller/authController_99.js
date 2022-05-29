import User_99 from '../models/User_99.js';
import { StatusCodes } from 'http-status-codes';

export const register_99 = async (req, res, next) => {
  console.log('body', req.body);
  const user = await User_99.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
  // try {
  //   console.log("body", req.body);
  //   const user = await User_99.create(req.body);
  //   const token = user.createJWT();
  //   console.log("token", token);
  //   res.status(201).json({ user, token });
  // } catch (err) {
  //   next(err);
  // }
};

export const login_99 = async (req, res) => {
  res.send('login user -- enhao 209410199');
};

export const updateUser_99 = async (req, res) => {
  res.send('update user -- enhao 209410199');
};
