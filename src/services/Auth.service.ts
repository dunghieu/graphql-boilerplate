import { AuthenticationError, BadRequestError } from '../common/utils/error';
import {comparePassword, encryptPassword, signToken} from '../common/utils/auth';
import { Prisma } from '@generated/prisma-client';
import { MutationSignupArgs } from '@generated/resolvers-types';

export const getCurrentUser = async (userId: string, User: Prisma.UserDelegate<any>) => {
  if (!userId) throw AuthenticationError();
  const user = await User.findUnique({ where: { id: userId } });
  return user;
}

export const signUp = async (body: MutationSignupArgs, User: Prisma.UserDelegate<any>) => { 
    const { email, password } = body;
    const passwordHash = await encryptPassword(password);
    const user = await User.create({ data: { email, password: passwordHash } });
    const token = signToken(user.id);
    return token;
}

export const validateUser = async (email: string, password: string, User: Prisma.UserDelegate<any>) => { 
    const user = await User.findUnique({ where: { email } });
    if (!user) throw BadRequestError('No user found for this email');
    const valid = await comparePassword(password, user.password);
    if (!valid) throw BadRequestError('Invalid password');
    const token = signToken(user.id);
    return token;
}