import { AuthenticationError, BadRequestError } from '../common/utils/error';
import { Prisma } from '@generated/prisma-client';

export const getUser = async (id: string, User: Prisma.UserDelegate<any>) => {
    const user = await User.findUnique({where: {id: id}});
    if (!user) {
      throw BadRequestError('No user found for this Id');
    }
    return user;
}

export const getUsers = async (User: Prisma.UserDelegate<any>) => { 
    const users = await User.findMany();
    return users;
}

export const deleteUser = async ({userRole},id: string, User: Prisma.UserDelegate<any>) => {
  if (userRole === 'Host') {
    try {
      await User.delete({where: {id}});
      return true;
    } catch (err: any) {
      return false;
    }
  } else {
    return false;
  }
}

export const updateProfile = async ({ userId, userRole }, data: any, User: Prisma.UserDelegate<any>) => { 
  if (userRole === 'Host') {
    try {
      await User.update({
        where: {id: userId},
        data: {...data},
      });
      return true;
    } catch (err: any) {
      return false;
    }
  } else {
    return false;
  }
}