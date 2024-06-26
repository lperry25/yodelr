import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { authorizedHelper } from "@/utils/api/authHelper";
import { posts } from "@/db/posts";
import { Post } from "@/types/post/Post";
import { sortPosts } from "@/utils/api/postsHelper";

export default async function allPosts(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | ErrorResponse>
) {
  const [authorized, username] = await authorizedHelper(req, res);
  if (authorized) {
    if (req.method === "GET") {
      const sortedPosts = sortPosts(posts);
      res.status(200).json(sortedPosts);
    } else if (req.method === "POST" && username) {
      const postBody = req.body as Post;
      const { content } = postBody;
      if (!content) {
        res
          .status(500)
          .json({ message: "Content is required", statusCode: 500 });
      } else if (content.length > 140) {
        res.status(500).json({
          message: "Content must be less than 140 characters",
          statusCode: 500,
        });
      } else {
        // get the topics that being with #
        const topics = content
          .split(" ")
          .filter((word) => word.startsWith("#"))
          .map((topic) => topic.slice(1));
        const newPost = {
          content,
          username,
          topics,
          timestamp: new Date().toISOString(),
        };
        posts.push(newPost);
        res.status(200).json([newPost]);
      }
    } else {
      res.status(404).end();
    }
  }
}
