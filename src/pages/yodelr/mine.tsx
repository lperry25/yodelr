import { UserPost } from "@/components/UserPost";
import { Yodel } from "@/components/Yodel";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function Mine() {
  const [myPosts, setMyPosts] = useState<Post[] | undefined>(undefined);
  const loggedInUser = useLoggedInUser();

  useEffect(() => {
    fetcher("/api/posts").then((data: Post[]) => setMyPosts(data));
  }, []);

  const updateLatestPost = (newPost: Post[]) => {
    if (!myPosts) {
      setMyPosts(newPost);
    } else {
      setMyPosts([...myPosts, ...newPost]);
    }
  };
  return (
    <div className="flex flex-col justify-between w-4/5 max-h-screen">
      <h1 className="flex flex-col items-center text-center mt-10 text-purple text-2xl">
        <CampaignIcon fontSize="large" />
        All your past Yodels
      </h1>
      <div className="flex flex-col justify-end gap-6 px-4 h-full overflow-y-screen">
        {!myPosts || myPosts.length < 1 ? (
          <p className="text-center text-lightBlue">
            Share your thoughts with the web and start yodelling!
          </p>
        ) : (
          myPosts?.map((post) => (
            <UserPost post={post} loggedInUser={loggedInUser} />
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
