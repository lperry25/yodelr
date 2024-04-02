import { UserPost } from "@/components/UserPost";
import { Yodel } from "@/components/Yodel";
import { useLoggedInUser } from "@/hooks/useLoggedInUser";
import { Post } from "@/types/post/Post";
import { Loading } from "../Loading";

export default function PostsFeed({
  posts,
  updateLatestPost,
  titleIcon,
  titleText,
  emptyText,
  yodelPlaceholder,
}: {
  posts?: Post[];
  updateLatestPost: (newPost: Post[]) => void;
  titleIcon: JSX.Element;
  titleText: string;
  emptyText: string;
  yodelPlaceholder: string;
}) {
  const loggedInUser = useLoggedInUser();

  const postsList = posts ? (
    !posts || posts.length < 1 ? (
      <p className="text-center text-lightBlue">{emptyText}</p>
    ) : (
      posts?.map((post) => (
        <UserPost
          post={post}
          loggedInUser={loggedInUser}
          key={`${post.username}-${post.timestamp}`}
        />
      ))
    )
  ) : null;

  return (
    <div className="flex flex-col justify-between w-4/5 max-h-screen">
      <h1
        className={`flex flex-col items-center text-center mt-10 text-purple text-2xl ${
          !posts ? "animate-pulse" : ""
        }`}
      >
        {titleIcon}
        {titleText}
      </h1>
      <div className="flex flex-col-reverse justify-start gap-6 px-4 h-full overflow-y-auto">
        {postsList}
      </div>
      <Yodel
        placeholder={yodelPlaceholder}
        updateLatestPost={updateLatestPost}
      />
    </div>
  );
}
