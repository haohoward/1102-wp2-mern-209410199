import User_99 from '../models/User_99.js';
const register_99 = async (req, res, next) => {
  try {
    console.log('body', req.body);
    const user = await User_99.create(req.body);
    const token = user.createJWT();
    res.status(201).json({ user, token });
  } catch (err) {
    // res.status(500).json({msg: 'Error on registering user'});
    next(err);
  }
  // res.send('register user -- WeiLeng Yeh 209410629');
};

const login_99 = async (req, res) => {
  res.send('login user -- WeiLeng Yeh 209410629');
};

const updateUser_99 = async (req, res) => {
  res.send('update user -- WeiLeng Yeh 209410629');
};

export { register_99, login_99, updateUser_99 };
