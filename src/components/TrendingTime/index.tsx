import { TimeFrame } from "./TimeFrame";
import { TimeSelector } from "./TimeSelector";

export function TrendingTime({
  setTo,
  setFrom,
}: {
  setTo: (to: Date | undefined) => void;
  setFrom: (from: Date | undefined) => void;
}) {
  const handleTimeframe = (timeframe: TimeFrame) => {
    // for simplicity in this demo there is no selection for to
    // the api supports to, so it could be added easily
    setTo(undefined);
    switch (timeframe) {
      case TimeFrame.ALL_TIME:
        return setFrom(undefined);
      case TimeFrame.THIS_YEAR:
        return setFrom(new Date(new Date().getFullYear(), 0, 1));
      case TimeFrame.THIS_MONTH:
        return setFrom(
          new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        );
      case TimeFrame.PAST_WEEK:
        return setFrom(new Date(new Date().setDate(new Date().getDate() - 7)));
      case TimeFrame.LAST_24_HOURS:
        return setFrom(
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() - 1,
            new Date().getHours(),
            new Date().getMinutes()
          )
        );
      default:
        throw Error(`Unknown timeframe selected: ${timeframe}. This is a bug`);
    }
  };

  return (
    <div className="flex flex-wrap text-center items-center mx-auto gap-2 md:gap-4 px-4">
      <TimeSelector timeframe={TimeFrame.ALL_TIME} onClick={handleTimeframe} />
      <TimeSelector timeframe={TimeFrame.THIS_YEAR} onClick={handleTimeframe} />
      <TimeSelector
        timeframe={TimeFrame.THIS_MONTH}
        onClick={handleTimeframe}
      />
      <TimeSelector timeframe={TimeFrame.PAST_WEEK} onClick={handleTimeframe} />
      <TimeSelector
        timeframe={TimeFrame.LAST_24_HOURS}
        onClick={handleTimeframe}
      />
    </div>
  );
}
