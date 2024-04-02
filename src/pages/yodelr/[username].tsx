import { UserPost } from "@/components/UserPost";
import { Yodel } from "@/components/Yodel";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useRouter } from "next/router";

export default function Mine() {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const loggedInUser = useLoggedInUser();
  const { username } = useRouter().query;

  useEffect(() => {
    fetcher(`/api/posts/${username}`).then((data: Post[]) => setPosts(data));
  }, []);

  const updateLatestPost = (newPost: Post[]) => {
    if (!posts) {
      setPosts(newPost);
    } else {
      setPosts([...newPost, ...posts]);
    }
  };
  return (
    <div className="flex flex-col justify-between w-4/5 max-h-screen">
      <h1 className="flex flex-col items-center text-center mt-10 text-purple text-2xl">
        <RecordVoiceOverIcon fontSize="large" />
        {username}
      </h1>
      <div className="flex flex-col-reverse justify-start gap-6 px-4 h-full overflow-y-auto">
        {!posts || posts.length < 1 ? (
          <p className="text-center text-lightBlue">
            Share your thoughts with the web and start yodelling!
          </p>
        ) : (
          posts?.map((post) => (
            <UserPost
              post={post}
              loggedInUser={loggedInUser}
              key={`${post.username}-${post.timestamp}`}
            />
          ))
        )}
      </div>
      <Yodel
        placeholder="What do you feeling like yodeling to the web today?"
        updateLatestPost={updateLatestPost}
      />
    </div>
  );
}
