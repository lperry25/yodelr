import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TagIcon from "@mui/icons-material/Tag";
import PostsFeed from "@/components/PostsFeed";

export default function Topic() {
  const { topic } = useRouter().query;
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);

  useEffect(() => {
    fetcher(`/api/posts/topic/${topic}`).then((data: Post[]) => setPosts(data));
  }, [topic]);

  const updateLatestPost = (newPost: Post[]) => {
    if (newPost.findIndex((post) => post.content.includes(`#${topic}`)) > -1) {
      if (!posts) {
        setPosts(newPost);
      } else {
        setPosts([...newPost, ...posts]);
      }
    }
  };

  return (
    <PostsFeed
      posts={posts}
      updateLatestPost={updateLatestPost}
      titleIcon={<TagIcon fontSize="large" />}
      titleText={`Yodels about #${topic}`}
      emptyText={`Looks like the conversation around #${topic} has not started yet...`}
      yodelPlaceholder={`Add your yodel to the #${topic} topic`}
    />
  );
}
