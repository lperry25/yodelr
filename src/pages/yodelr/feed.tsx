import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PostsFeed from "@/components/PostsFeed";

export default function Feed() {
  const [allPosts, setAllPosts] = useState<Post[] | undefined>(undefined);

  useEffect(() => {
    fetcher("/api/posts").then((data: Post[]) => setAllPosts(data));
  }, []);

  const updateLatestPost = (newPost: Post[]) => {
    if (!allPosts) {
      setAllPosts(newPost);
    } else {
      setAllPosts([...newPost, ...allPosts]);
    }
  };

  return (
    <PostsFeed
      posts={allPosts}
      updateLatestPost={updateLatestPost}
      titleIcon={<DynamicFeedIcon fontSize="large" />}
      titleText={"Yodelrs"}
      emptyText={"No yodels yet! Be the first to yodel!"}
      yodelPlaceholder={"Join in today's yodeling!"}
    />
  );
}
