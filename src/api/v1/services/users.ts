// Prisma Connection
import User from "../models/users";

export const findUsers: any = async () => {
  const users: any = await User.findMany();

  if (users) {
    return users;
  } else {
    return false;
  }
};

export const findUser: any = async (id: any) => {
  const user: any = await User.findById(id);

  if (user) {
    return user;
  } else {
    return false;
  }
};

export const createUser: any = async (body: any) => {
  const user: any = await User.create({ ...body });

  if (user) {
    return user;
  } else {
    return false;
  }
};

export const editUser: any = async (id: any, body: any) => {
  const user: any = await User.findByIdAndUpdate(id, {
    ...body,
  });

  if (user) {
    return user;
  } else {
    return false;
  }
};

export const deleteUser: any = async (id: any) => {
  const user: any = await User.findByIdAndDelete(id);

  if (user) {
    return user;
  } else {
    return false;
  }
};
