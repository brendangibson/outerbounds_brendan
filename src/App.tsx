import styled from "styled-components";
import "./App.css";
import Homework from "./components/Homework";

const acceptedParams = { timeDataUrl: "time_data_url" };
const DEFAULT_PATH = "/default.json";

const Wrapper = styled.div`
  padding: 16px;
`;

const App = () => {
  const params = new URLSearchParams(window.location.search);

  // If no URL for the time data is provided, then get data from the default path
  // TODO: Make the URL generation cleaner
  // TODO: sanitize input
  const timeDataUrl =
    params.get(acceptedParams.timeDataUrl) ??
    window.location.protocol +
      "//" +
      window.location.hostname +
      ":" +
      window.location.port +
      window.location.pathname +
      DEFAULT_PATH;

  return (
    <Wrapper>
      <Homework url={timeDataUrl} />
    </Wrapper>
  );
};

export default App;
