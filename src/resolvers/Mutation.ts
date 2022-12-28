import {MutationResolvers} from '@generated/resolvers-types';
import {comparePassword, encryptPassword, signToken} from 'src/common/utils/auth';
import {AuthenticationError, BadRequestError} from 'src/common/utils/error';

const Mutation: MutationResolvers = {
  signup: async (_, args, {prisma}) => {
    const password = await encryptPassword(args.password);
    const user = await prisma.user.create({
      data: {...args, password},
    });
    const token = signToken(user.id);
    return token;
  },
  login: async (_, args, {prisma}) => {
    const user = await prisma.user.findUnique({where: {email: args.email}});
    if (!user) {
      throw BadRequestError('No user found for this email');
    }
    const valid = await comparePassword(args.password, user.password);
    if (!valid) {
      throw BadRequestError('Invalid password');
    }
    const token = signToken(user.id);
    return token;
  },
  createPost: async (_, {createPostInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    if (userRole === 'Host') {
      try {
        const newPost = await prisma.post.create({
          data: {
            ...createPostInput,
            authorId: userId,
          },
          include: {
            author: true,
          },
        });

        return {
          code: 200,
          success: true,
          message: 'Listing successfully created!',
          post: newPost,
        };
      } catch (err: any) {
        return {
          code: 400,
          success: false,
          message: err.message,
        };
      }
    } else {
      return {
        code: 400,
        success: false,
        message: 'Only hosts can create new listings',
      };
    }
  },
  deleteUser: async (_, {id}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    if (userRole === 'Host') {
      try {
        await prisma.user.delete({where: {id}});
        return true;
      } catch (err: any) {
        return false;
      }
    } else {
      return false;
    }
  },
  updateProfile: async (
    _,
    {updateProfileInput},
    {prisma, userId, userRole}
  ) => {
    if (!userId) {
      throw AuthenticationError();
    }
    if (userRole === 'Host') {
      try {
        await prisma.user.update({
          where: {id: userId},
          data: {...updateProfileInput},
        });
        return true;
      } catch (err: any) {
        return false;
      }
    } else {
      return false;
    }
  },
  updatePost: async (_, {id, updatePostInput}, {prisma, userId, userRole}) => {
    if (!userId) {
      throw AuthenticationError();
    }
    if (userRole === 'Host') {
      try {
        await prisma.post.update({where: {id}, data: {...updatePostInput}});
        return {
          code: 200,
          success: true,
          message: 'Listing successfully updated!',
        };
      } catch (err: any) {
        return {
          code: 400,
          success: false,
          message: err.message,
        };
      }
    } else {
      return {
        code: 400,
        success: false,
        message: 'Only hosts can update listings',
      };
    }
  },
};

export default Mutation;
