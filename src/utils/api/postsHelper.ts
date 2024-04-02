import { Post } from "@/types/post/Post";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Sort posts by timestamp with the oldest last
 * @param posts
 * @returns
 */
export function sortPosts(posts: Post[]): Post[] {
  return posts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
}

export function getUsersPosts(
  req: NextApiRequest,
  res: NextApiResponse,
  authorized: boolean,
  posts: Post[],
  username?: string
) {
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