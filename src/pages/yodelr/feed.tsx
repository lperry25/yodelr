import { UserPost } from "@/components/UserPost";
import { Yodel } from "@/components/Yodel";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

export default function Feed() {
  const [allPosts, setAllPosts] = useState<Post[] | undefined>(undefined);
  const loggedInUser = useLoggedInUser();

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
    <div className="flex flex-col justify-between w-4/5 max-h-screen">
      <h1 className="flex flex-col items-center text-center mt-10 text-purple text-2xl">
        <DynamicFeedIcon fontSize="large" />
        Yodelr Feed
      </h1>
      <div className="flex flex-col-reverse	justify-start gap-6 px-4 h-full mt-10 overflow-y-auto">
        {allPosts?.map((post) => (
          <UserPost
            post={post}
            loggedInUser={loggedInUser}
            key={`${post.username}-${post.timestamp}`}
          />
        ))}
      </div>
      <Yodel
        placeholder="What do you have to add to Yodelr today?"
        updateLatestPost={updateLatestPost}
      />
    </div>
  );
}
