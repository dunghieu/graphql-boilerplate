import { PostResolvers } from "@generated/resolvers-types";

const Post: PostResolvers = {
    author: async (parent, _, {prisma}) => {
        return await prisma.post.findUnique({where: {id: parent.id}}).author()
    }
}

export default Post