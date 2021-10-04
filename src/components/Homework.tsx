import { useReadData } from "../hooks/useReadData";
import TimeChart from "./TimeChart";

interface Props {
  url: string;
}

/**
 * Wrapper component for this homework task
 * It reads the data from a JSON file and renders a time chart
 */
const Homework = ({ url }: Props) => {
  const { status, timeData } = useReadData(url);

  // TODO: nicer loading and error messaging
  return (
    <div>
      {status === "loading" ? (
        "Loading"
      ) : timeData ? (
        <TimeChart timeData={timeData} />
      ) : (
        "No data"
      )}
    </div>
  );
};

export default Homework;
