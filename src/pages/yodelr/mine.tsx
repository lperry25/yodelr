import { UserPost } from "@/components/UserPost";
import { Yodel } from "@/components/Yodel";
import { User } from "@/types/auth/User";
import { Post } from "@/types/post/Post";
import { decodeJwt } from "@/utils/api/jwt/decodeJwt";
import { fetcher } from "@/utils/fetcher";
import { use, useEffect, useState } from "react";

export default function Mine() {
  const [myPosts, setMyPosts] = useState<Post[] | undefined>(undefined);
  const [loggedInUser, setLoggedInUser] = useState<string>("");

  useEffect(() => {
    if (!loggedInUser) {
      const token = localStorage.getItem("token");
      if (token) {
        decodeJwt(token).then((user: User) => {
          if (user) {
            setLoggedInUser(user.username);
          }
        });
      }
    }
  }),
    [loggedInUser];

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
    <div className="flex flex-col justify-between w-4/5">
      <div className="flex flex-col justify-end gap-4 px-8 h-full">
        {myPosts?.map((post) => (
          <UserPost post={post} loggedInUser={loggedInUser} />
        ))}
      </div>
      <Yodel
        placeholder="What do you feeling like yodeling to the web today?"
        updateLatestPost={updateLatestPost}
      />
    </div>
  );
}
