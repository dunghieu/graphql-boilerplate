import {QueryResolvers} from '@generated/resolvers-types';
import {AuthenticationError, BadRequestError} from '../common/utils/error';
import {paginationResult} from '../common/utils/helper';

const Query: QueryResolvers = {
  me: async (_, __, {prisma, userId}) => {
    if (!userId) throw AuthenticationError();
    const user = await prisma.user.findUnique({where: {id: userId}});
    return user;
  },
  user: async (_, args, {prisma}) => {
    const user = await prisma.user.findUnique({where: {id: args.id}});
    if (!user) {
      throw BadRequestError('No user found for this Id');
    }
    return user;
  },
  post: async (_, args, {prisma}) => {
    const post = await prisma.post.findUnique({
      where: {id: args.id},
      include: {author: true},
    });
    if (!post) {
      throw BadRequestError('No post found for this Id');
    }
    return post;
  },
  hostPosts: async (
    _,
    {criteria:{after, pageSize=20}},
    {prisma, userId, userRole}
  ) => {
    if (userRole !== 'Host') throw AuthenticationError();
    const posts = await prisma.post.findMany({
      where: {authorId: userId},
      orderBy: {createdAt: 'desc'},
    });

    const result = paginationResult({after, pageSize, results: posts});
    if (!posts) {
      throw BadRequestError('No post found for this Id');
    }
    return {
      posts: result,
      cursor: result.length ? result[result.length - 1].id : null,
      hasMore: result.length
        ? result[result.length - 1].id !== posts[posts.length - 1].id
        : false,
    };
  },
  searchPosts: async (_, {criteria:{after, pageSize=20}}, {prisma}) => {
    const posts = await prisma.post.findMany({
      orderBy: {createdAt: 'desc'},
    });

    const result = paginationResult({after, pageSize, results: posts});
    if (!posts) {
      throw BadRequestError('No post found for this Id');
    }
    return {
      posts: result,
      cursor: result.length ? result[result.length - 1].id : null,
      hasMore: result.length
        ? result[result.length - 1].id !== posts[posts.length - 1].id
        : false,
    };
  },
  users: async (_, __, {prisma}) => {
    const users = await prisma.user.findMany();
    return users;
  }
};

export default Query;
