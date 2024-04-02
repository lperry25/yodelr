import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { authorizedHelper } from "@/utils/api/authHelper";
import { posts } from "@/db/posts";
import { Post } from "@/types/post/Post";
import { getUsersPosts, sortPosts } from "@/utils/api/postsHelper";

export default async function usersPosts(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | ErrorResponse>
) {
  const { username } = req.query;
  const [authorized] = await authorizedHelper(req, res);
  getUsersPosts(req, res, authorized, posts, username as string);
}
