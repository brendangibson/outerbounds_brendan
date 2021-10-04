import { TimeData } from "../types/timeData";
import Axes from "./Axes";
import Bar from "./Bar";

const VERTICAL_SPACING = 8;
const HEIGHT = 24;

interface Props {
  timeData: TimeData;
}

/**
 * Draws a time chart with axes and a bar for each task.
 */
const TimeChart = ({ timeData }: Props) => {
  let start = Number.MAX_SAFE_INTEGER;
  let end = 0;

  // Get the start and end values for the chart
  timeData.tasks.forEach((task) => {
    if (task.start < start) {
      start = task.start;
    }
    if (task.duration + task.start > end) {
      end = task.duration + task.start;
    }
  });

  const totalWidth = end - start;
  let currentTop = VERTICAL_SPACING;
  let currentHue = Math.random() * 255;

  const bars = timeData.tasks.map((task, index) => {
    // Calculate horizontal metrics as percentages to allow for responsiveness
    const left = ((task.start - start) / totalWidth) * 100;
    const width = (task.duration / totalWidth) * 100;
    currentTop = VERTICAL_SPACING + index * (HEIGHT + VERTICAL_SPACING);

    // Rotate through hues to get some color separation for the bars
    // TODO: Use d3-color or improve algorithm
    currentHue = (currentHue + 128 + 255 / timeData.tasks.length) % 255;
    const color = `hsl(${currentHue}, 50%, 50%)`;

    return (
      <Bar
        backgroundColor={color}
        height={HEIGHT}
        left={left + "%"}
        width={width + "%"}
        label={task.task_id}
        top={currentTop}
        key={task.task_id}
      />
    );
  });

  return (
    <Axes
      timeData={timeData}
      start={start}
      totalWidth={totalWidth}
      height={currentTop + HEIGHT + 2 * VERTICAL_SPACING}
    >
      {bars}
    </Axes>
  );
};

export default TimeChart;
