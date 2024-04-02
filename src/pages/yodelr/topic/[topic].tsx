import { UserPost } from "@/components/UserPost";
import { Yodel } from "@/components/Yodel";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TagIcon from "@mui/icons-material/Tag";

export default function Topic() {
  const { topic } = useRouter().query;
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const loggedInUser = useLoggedInUser();

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
    <div className="flex flex-col justify-between w-4/5 max-h-screen">
      <h1 className="flex flex-col items-center text-center mt-10 text-purple text-2xl">
        <TagIcon fontSize="large" />
        {`Yodels about #${topic}`}
      </h1>
      <div className="flex flex-col-reverse	justify-start gap-6 px-4 h-full overflow-y-auto">
        {!posts || posts.length < 1 ? (
          <p className="text-center text-lightBlue">{`Looks like the conversation around #${topic} has not started yet...`}</p>
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
        placeholder={`Add your yodel to the #${topic} topic`}
        updateLatestPost={updateLatestPost}
      />
    </div>
  );
}
