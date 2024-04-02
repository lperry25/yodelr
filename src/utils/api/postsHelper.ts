import { Post } from "@/types/post/Post";

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
