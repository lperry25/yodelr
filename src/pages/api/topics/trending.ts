import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "@/types/error/ErrorResponse";
import { authorizedHelper } from "@/utils/api/authHelper";
import { posts } from "@/db/posts";
import { Post } from "@/types/post/Post";

interface TrendingTopics {
  [key: string]: number;
}

export default async function trendingTopics(
  req: NextApiRequest,
  res: NextApiResponse<TrendingTopics | ErrorResponse>
) {
  const [authorized, username] = await authorizedHelper(req, res);
  if (authorized && username) {
    if (req.method === "GET") {
      const { from, to } = req.query;
      const dateFilteredPosts =
        !from && !to
          ? posts
          : posts.filter((p) => {
              const postDate = new Date(p.timestamp);
              const fromDate = new Date(from as string);
              const toDate = new Date(to as string);
              if (from && to) {
                return postDate >= fromDate && postDate <= toDate;
              }
              if (from) {
                return postDate >= fromDate;
              }
              return postDate <= toDate;
            });
      const topics = dateFilteredPosts.reduce(
        (topics: TrendingTopics, post: Post) => {
          post.topics.forEach((topic) => {
            if (topics[topic]) {
              topics[topic] += 1;
            } else {
              topics[topic] = 1;
            }
          });
          return topics;
        },
        {}
      );
      res.status(200).json(topics);
    } else {
      res.status(404).end();
    }
  }
}
