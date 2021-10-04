import { useState } from "react";
import styled from "styled-components";

const TRANSITION_TIME = "300ms";

const StyledBar = styled.div<{
  backgroundColor: string;
  top: number;
  height: number;
  left: string;
  width: string;
  clicked: boolean;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => props.backgroundColor};
  top: ${(props) => props.top}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  cursor: pointer;
  opacity: 0.9;
  transition: all ${TRANSITION_TIME};
  // Changes color by increasing the saturation when the bar is clicked
  filter: ${(props) => (props.clicked ? "saturate(2)" : "none")};
  box-sizing: border-box;
  :hover {
    opacity: 0.8;
  }
`;

interface Props {
  backgroundColor: string;
  height: number; // expects a pixel value
  top: number; // expects a pixel value
  left: string; // expects a percentage
  width: string; // expects a percentage
  label: string;
}

/**
 * This component draws a bar for a chart based on the supplied location and color.
 * Uses percentages for the horizontal metrics to allow for responsiveness.
 */
const Bar = ({ backgroundColor, top, height, left, width, label }: Props) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((currentValue) => !currentValue);
  };

  return (
    <StyledBar
      onClick={handleClick}
      backgroundColor={backgroundColor}
      top={top}
      height={height}
      left={left}
      width={width}
      clicked={clicked}
    >
      {label}
    </StyledBar>
  );
};

export default Bar;
