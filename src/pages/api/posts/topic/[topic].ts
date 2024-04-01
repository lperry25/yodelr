import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { authorizedHelper } from "@/utils/api/authHelper";
import { posts } from "@/db/posts";
import { Post } from "@/types/post/Post";

export default async function byTopic(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | ErrorResponse>
) {
  const [authorized, username] = await authorizedHelper(req, res);
  if (authorized && username) {
    if (req.method === "GET") {
      const { topic } = req.query;
      console.log({ posts, topic });
      const topicPosts = posts
        .filter((p) => {
          console.log(p.topics);
          return (
            p.topics.findIndex((postTopic) => postTopic === (topic as string)) >
            -1
          );
        })
        .sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
      res.status(200).json(topicPosts);
    } else {
      res.status(404).end();
    }
  }
}
