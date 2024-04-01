import { useRouter } from "next/router";

export default function Topic() {
  const { topic } = useRouter().query;
  return <div>Topic goes here: {topic}</div>;
}
