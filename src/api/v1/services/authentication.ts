// Prisma Connection
import User from "../models/users";

import * as jsonwebtoken from "jsonwebtoken";
const { sign, decode, verify } = jsonwebtoken;
import * as bcrypt from "bcrypt";

export const handleLogin: any = async (body: any) => {
  const user: any = await User.findOne({
    where: { email: body.email },
  });

  if (user) {
    if (bcrypt.compareSync(body.password, user.password)) {
      delete user.Password;
      await User.update({
        where: { Email: body.Email },
        data: { LastLogin: new Date() },
      });
      const token: string = sign({ user }, process.env.TOKEN_KEY);

      return token;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const handlePassword: any = async (body: any) => {
  const salt: any = bcrypt.genSaltSync(14);
  const hash: any = bcrypt.hashSync(body.Password, salt);

  const user: any = await User.update({});

  if (user) {
    return user;
  } else {
    return false;
  }
};
