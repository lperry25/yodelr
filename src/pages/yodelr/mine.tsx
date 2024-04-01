import { Yodel } from "@/components/Yodel";
import { Post } from "@/types/post/Post";
import { fetcher } from "@/utils/fetcher";
import { useEffect, useState } from "react";

export default function Mine() {
  const [myPosts, setMyPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetcher("/api/posts/mine").then((data: Post[]) => setMyPosts(data));
  });
  console.log({ myPosts });
  return (
    <div className="flex flex-col justify-between w-4/5">
      <div>My posts here</div>
      <Yodel placeholder="What do you feeling like yodeling to the web today?" />
    </div>
  );
}
