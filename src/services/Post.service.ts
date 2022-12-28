import {AuthenticationError, BadRequestError} from '../common/utils/error';
import {paginationResult} from '../common/utils/helper';
import {Prisma} from '@generated/prisma-client';
import {CreatePostInput, SearchPostsInput, UpdatePostInput} from '@generated/resolvers-types';

export const getPost = async (id: string, Post: Prisma.PostDelegate<any>) => {
  const post = await Post.findUnique({
    where: {id},
    include: {author: true},
  });
  if (!post) {
    throw BadRequestError('No post found for this Id');
  }
  return post;
};

export const getHostPosts = async (
  id: string,
  criteria: SearchPostsInput,
  Post: Prisma.PostDelegate<any>
) => {
  const {after, pageSize} = criteria;
  const posts = await Post.findMany({
    where: {authorId: id},
    orderBy: {createdAt: 'desc'},
  });

  const result = paginationResult({after, pageSize, results: posts});
  if (!posts) {
    throw BadRequestError('No post found for this Id');
  }
  return {
    posts: result,
    cursor: result.length ? result[result.length - 1].id : null,
    hasMore: result.length ? result[result.length - 1].id !== posts[posts.length - 1].id : false,
  };
};

export const searchPosts = async (criteria: SearchPostsInput, Post: Prisma.PostDelegate<any>) => {
  const {after, pageSize} = criteria;
  const posts = await Post.findMany({
    orderBy: {createdAt: 'desc'},
  });

  const result = paginationResult({after, pageSize, results: posts});
  if (!posts) {
    throw BadRequestError('No post found for this Id');
  }
  return {
    posts: result,
    cursor: result.length ? result[result.length - 1].id : null,
    hasMore: result.length ? result[result.length - 1].id !== posts[posts.length - 1].id : false,
  };
};

export const createPost = async (
  {userId, userRole},
  data: CreatePostInput,
  Post: Prisma.PostDelegate<any>
) => {
  if (userRole === 'Host') {
    try {
      const newPost = await Post.create({
        data: {
          ...data,
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
};

export const updatePost = async (
  {userId, userRole},
  id: string,
  data: UpdatePostInput,
  Post: Prisma.PostDelegate<any>
) => {
  if (userRole === 'Host') {
    try {
      await Post.update({where: {id}, data: {...data}});
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
};
