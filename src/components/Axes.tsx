import styled from "styled-components";
import { TimeData } from "../types/timeData";
import React from "react";

const Wrapper = styled.div`
  position: relative;
`;

const Labels = styled.div`
  height: 24px;
  width: 100%;
`;

const Border = styled.div<{ height: number }>`
  position: relative;
  outline: 1px solid black;
  width: 100%;
  height: ${(props) => props.height}px;
`;

// TODO: move the first and last labels so that they do not overrun the edges
const Label = styled.div<{ left: string }>`
  position: absolute;
  transform: translateX(-50%);
  left: ${(props) => props.left};
  top: 0;
`;

interface Props {
  timeData: TimeData;
  height: number;
  totalWidth: number;
  children: React.ReactElement[];
}

/**
 * Renders the labels and axes for the time chart
 */
const Axes = ({ timeData, height, totalWidth, children }: Props) => {
  const labels = new Set<number>();

  // Add time labels to a set to prevent duplicates
  // TODO: Ensure that closely-packed labels do not overrun each other
  timeData.tasks.forEach((task) => {
    labels.add(task.start);
    labels.add(task.start + task.duration);
  });

  const labelsArray = Array.from(labels);

  return (
    <Wrapper>
      <Labels>
        {labelsArray.map((label) => (
          <Label left={(label / totalWidth) * 100 + "%"} key={label}>
            {label}
          </Label>
        ))}
      </Labels>
      <Border height={height}>{children}</Border>
    </Wrapper>
  );
};

export default Axes;
