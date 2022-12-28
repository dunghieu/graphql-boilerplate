import { PostResolvers } from "@generated/resolvers-types";

export const Post: PostResolvers = {
    author: async (parent, _, {prisma}) => {
        return await prisma.post.findUnique({where: {id: parent.id}}).author()
    }
}
