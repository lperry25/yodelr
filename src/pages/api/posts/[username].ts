import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { authorizedHelper } from "@/utils/api/authHelper";
import { posts } from "@/db/posts";
import { Post } from "@/types/post/Post";
import { sortPosts } from "@/utils/api/postsHelper";

export default async function myPosts(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | ErrorResponse>
) {
  const { username } = req.query;
  const [authorized] = await authorizedHelper(req, res);
  if (authorized && username) {
    if (req.method === "GET") {
      const userPosts = posts.filter((p) => p.username === username);
      const sortedPosts = sortPosts(userPosts);
      res.status(200).json(sortedPosts);
    } else {
      res.status(404).end();
    }
  }
}
