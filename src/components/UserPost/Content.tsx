import Link from "next/link";

export function Content({
  content,
  topics,
}: {
  content: string;
  topics: string[];
}) {
  const lines = content.split("\n");

  return (
    <div className="text-[16px]">
      {lines.map((line) => (
        <div>
          {line.split(" ").map((word, index, i) => {
            // fix this for the hastags
            const topic = topics?.find((topic) => `#${topic}` === word);
            if (topic) {
              return (
                <Link
                  key={`${index}-${i}`}
                  href={`/yodelr/topic/${topic}`}
                  className="mr-1 text-primary"
                >
                  {word}
                </Link>
              );
            }
            return (
              <span key={`${index}-${i}`} className="mr-1">
                {word}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
