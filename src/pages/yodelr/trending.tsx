import { TrendingTime } from "@/components/TrendingTime";
import { Yodel } from "@/components/Yodel";
import { TrendingTopics as ITrendingTopics } from "@/types/trendingTopics/TrendingTopics";
import { fetcher } from "@/utils/fetcher";
import TagIcon from "@mui/icons-material/Tag";
import Link from "next/link";
import { useEffect, useState } from "react";

function buildSearch(to?: Date, from?: Date) {
  let search = "";
  if (to) {
    search += `?to=${to.toISOString()}`;
  }
  if (from) {
    search += to ? "&" : "?";
    search += `from=${from.toISOString()}`;
  }
  return search;
}

export default function TrendingTopics() {
  const [topics, setTopics] = useState<ITrendingTopics | undefined>(undefined);
  const [from, setFrom] = useState<Date | undefined>(undefined);
  const [to, setTo] = useState<Date | undefined>(undefined);

  useEffect(() => {
    fetcher(`/api/topics/trending${buildSearch(to, from)}`).then(
      (data: ITrendingTopics) => setTopics(data)
    );
  }, [to, from]);
  console.log({ topics });

  const topicsList = topics ? Object.entries(topics) : [];
  const orderedTopics = topicsList.sort((a, b) => b[1] - a[1]);

  return (
    <div className="flex flex-col justify-between w-4/5">
      <h1 className="flex flex-col items-center text-center mt-10 text-purple text-2xl">
        <TagIcon fontSize="large" />
        Trending Yodels
      </h1>
      <p className="text-center my-3">
        Select the timeframe you're interested in
      </p>
      <TrendingTime setTo={setTo} setFrom={setFrom} />
      <div className="flex flex-col justify-start gap-6 px-4 h-full mt-10">
        {topicsList.length < 1 ? (
          <p className="text-center text-lightBlue">
            No topics are trending right now for this time period. Start the
            next trend!
          </p>
        ) : (
          orderedTopics?.map(([topic, count]) => (
            <div key={topic} className="text-lg">
              <Link
                href={`/yodelr/topic/${topic}`}
                className="text-royalBlue hover:underline"
              >{`#${topic}`}</Link>
              <span>{` - ${count} Yodel${count > 1 ? "s" : ""}`}</span>
            </div>
          ))
        )}
      </div>
      <Yodel placeholder="You're just one step away from starting the next Yodelr trend!" />
    </div>
  );
}
