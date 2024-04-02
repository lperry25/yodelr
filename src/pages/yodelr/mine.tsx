import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import PostsFeed from "@/components/PostsFeed";

export default function Mine() {
  const [myPosts, setMyPosts] = useState<Post[] | undefined>(undefined);

  useEffect(() => {
    fetcher("/api/posts/mine").then((data: Post[]) => setMyPosts(data));
  }, []);

  const updateLatestPost = (newPost: Post[]) => {
    if (!myPosts) {
      setMyPosts(newPost);
    } else {
      setMyPosts([...newPost, ...myPosts]);
    }
  };
  return (
    <PostsFeed
      posts={myPosts}
      updateLatestPost={updateLatestPost}
      titleIcon={<CampaignIcon fontSize="large" />}
      titleText={"All your past Yodels"}
      emptyText={"Share your thoughts with the web and start yodelling!"}
      yodelPlaceholder={"What do you feeling like yodeling to the web today?"}
    />
  );
}
