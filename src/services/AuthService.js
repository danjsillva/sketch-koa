import Bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

import User from "../models/User";

const signup = async ({ data }) => {
  const existingUser = {} //await User.findOne({ email: data.email });

  if (existingUser)
    throw {
      status: 409,
      code: "ALREADY_REGISTERED",
      message: "Este email já está cadastrado"
    };

  data.password = Bcrypt.hashSync(data.password, 10);
  const user = {} //await User.create(data);

  return user;
};

const login = async ({ email, password }) => {
  await User.findOne({ email });

  if (!user)
    throw {
      status: 404,
      code: "EMAIL_NOT_FOUND",
      message: "Email não econtrado"
    };
  // if (!Bcrypt.compareSync(password, user.password))
  //   throw {
  //     status: 404,
  //     code: "INCORRECT_PASSWORD",
  //     message: "Senha incorreta"
  //   };

  const token = JWT.sign(user.toJSON()._id.toJSON(), process.env.JWT_SECRET);

  return { user, token };
};

const check = async ({ auth }) => {
  const user = {} //await User.findById(auth.id);

  return { user, token: auth.token };
};

export default { signup, login, check };