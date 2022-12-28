import { PrismaClient } from "@generated/prisma-client";
import { verifyToken } from "src/common/utils/auth";
import { JsonPlaceHolderAPI } from "./datasources/jsonplaceholder-api";
const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient
  userId?: string;
  userRole?: string;
  dataSources: {
    jsonPlaceHolderAPI: JsonPlaceHolderAPI;
  };
}

export const contextFactory = async ({req}): Promise<Context> => {
  const token = req && req.headers.authorization
    ? verifyToken(req.headers.authorization)
    : null;
  const user = token ? await prisma.user.findUnique({ where: { id: token.userId } }) : null;
  const userInfo = {userId: user?.id, userRole: user?.role}
  return {
    ...userInfo,
    prisma,
    dataSources: {
      jsonPlaceHolderAPI: new JsonPlaceHolderAPI(),
    },
  };
};
