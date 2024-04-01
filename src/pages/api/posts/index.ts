import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { authorizedHelper } from "@/utils/api/authHelper";
import { posts } from "@/db/posts";
import { Post } from "@/types/post/Post";

export default async function myPosts(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | ErrorResponse>
) {
  console.log(req.cookies);
  const [authorized, username] = await authorizedHelper(req, res);
  if (authorized && username) {
    if (req.method === "GET") {
      console.log({ posts });
      const userPosts = posts
        .filter((p) => p.username === username)
        .sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      res.status(200).json(userPosts);
    } else if (req.method === "POST") {
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
        posts.push({
          content,
          username,
          topics,
          timestamp: new Date().toISOString(),
        });
        res.status(200).end();
      }
    } else {
      res.status(404).end();
    }
  }
}
