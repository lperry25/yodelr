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
    <div className="text-[16px] flex-wrap whitespace-pre-wrap">
      {lines.map((line) => (
        <div className="flex flex-wrap" key={line}>
          {line.split(" ").map((word, index, i) => {
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
