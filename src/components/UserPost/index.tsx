import { Post } from "@/types/post/Post";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Content } from "./Content";
import Link from "next/link";

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
    hour: "numeric",
    minute: "numeric",
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
        <div className="flex flex-col md:flex-row text-left md:items-center">
          <Link href={`/yodelr/${username}`} className="mr-4">
            {username}
          </Link>
          <div className="text-xs text-gray-200">{displayDate}</div>
        </div>
        <Content content={content} topics={topics} />
      </div>
    </div>
  );
}
