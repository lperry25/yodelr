import { TimeFrame } from "./TimeFrame";

export function TimeSelector({
  timeframe,
  onClick,
}: {
  timeframe: TimeFrame;
  onClick: (timeframe: TimeFrame) => void;
}) {
  return (
    <button
      className="rounded bg-lightBlue px-4 hover:bg-purple"
      onClick={() => onClick(timeframe)}
    >
      {timeframe}
    </button>
  );
}
