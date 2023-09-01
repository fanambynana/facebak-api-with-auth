import {FastifyRequest} from "fastify";
import {getAll, getPostById, getPostByIdUser, savePost} from "./service";
import {CreatePostDto} from "./schema";

export const getPostsHandler = async () => {
  return await getAll();
};

export const savePostHandler = async (
  req: FastifyRequest<{
    Body: CreatePostDto;
  }>
) => {
  return await savePost(req.body);
};

export const getPostByIdHandler = async (
  req: FastifyRequest<{
    Params: {
      id: string;
    };
  }>
) => {
  return await getPostById(req.params.id);
};

export const getPostByIdUserHandler = async (
  req: FastifyRequest<{
    Params: {
      userId: string;
    };
  }>
) => {
  return await getPostByIdUser(req.params.userId);
};
