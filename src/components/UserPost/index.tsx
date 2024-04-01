import { Post } from "@/types/post/Post";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Content } from "./Content";

export function UserPost({
  post,
  loggedInUser,
}: {
  post: Post;
  loggedInUser: string;
}) {
  const { content, timestamp, topics, username } = post;
  const displayDate = new Date(timestamp).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full flex flex-row">
      <RecordVoiceOverIcon
        fontSize="large"
        className={`${
          username === loggedInUser ? "bg-royalBlue" : "bg-purple"
        } rounded p-2 h-[50px] w-[50px]`}
      />
      <div className="flex flex-col w-full ml-3">
        <div className="flex items-center">
          <div className="mr-4">{username}</div>
          <div className="text-xs text-gray-200">{displayDate}</div>
        </div>
        <Content content={content} topics={topics} />
      </div>
    </div>
  );
}
