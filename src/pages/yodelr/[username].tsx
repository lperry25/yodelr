import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useRouter } from "next/router";
import PostsFeed from "@/components/PostsFeed";

export default function Mine() {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const { username } = useRouter().query;

  useEffect(() => {
    fetcher(`/api/posts/${username}`).then((data: Post[]) => setPosts(data));
  }, [username]);

  const updateLatestPost = (newPost: Post[]) => {
    if (!posts) {
      setPosts(newPost);
    } else {
      setPosts([...newPost, ...posts]);
    }
  };
  return (
    <PostsFeed
      posts={posts}
      updateLatestPost={updateLatestPost}
      titleIcon={<RecordVoiceOverIcon fontSize="large" />}
      titleText={username as string}
      emptyText={"Share your thoughts with the web and start yodelling!"}
      yodelPlaceholder={"What do you feeling like yodeling to the web today?"}
    />
  );
}
