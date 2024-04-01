/**
 * For demo purposes I am using only memory for post storage
 * I would not do this if this was a production application
 */

import { Post } from "@/types/post/Post";

export let posts: Post[] = [
  {
    username: "test-user",
    content: "This is a test post",
    timestamp: "2021-01-01T00:00:00Z",
    topics: ["test"],
  },
  {
    username: "lauraperry",
    content: "This is a different test post",
    timestamp: "2021-01-01T00:00:00Z",
    topics: ["test"],
  },
];
