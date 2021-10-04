import { useEffect, useState } from "react";
import { TimeData } from "../types/timeData";

// Loading states when fetching the data
export type Status = "idle" | "loading" | "complete" | "error";

interface UseReadDataResponse {
  status: Status;
  timeData?: TimeData;
}

/**
 * Hook to read the time data from a JSON file on a URL
 */
export const useReadData: (url: string) => UseReadDataResponse = (url) => {
  const [status, setStatus] = useState<Status>("idle");
  const [timeData, setTimeData] = useState<TimeData>();

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTimeData(data);
        setStatus("complete");
      } catch (e) {
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);

  return { status, timeData };
};
