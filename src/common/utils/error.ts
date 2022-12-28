import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors'


export const AuthenticationError = () => {
  const authErrMessage = '*** you must be logged in ***';
  return new GraphQLError(authErrMessage, {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  });
};

export const ForbiddenError = (errMessage: string) => {
  return new GraphQLError(errMessage, {
    extensions: {
      code: 'FORBIDDEN',
    },
  });
};

export const BadRequestError = (errMessage: string) => {
  return new GraphQLError(errMessage, {
    extensions: {
      code: ApolloServerErrorCode.BAD_REQUEST,
    },
  });
}