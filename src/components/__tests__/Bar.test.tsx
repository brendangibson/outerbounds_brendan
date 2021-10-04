import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bar from "../Bar";

// TODO: More extensive tests and tests for other components
describe("<Bar/>", () => {
  it("changes color when clicked", () => {
    const label = "My Bar";
    render(
      <Bar
        top={0}
        left="0%"
        height={10}
        width="50%"
        label={label}
        backgroundColor="green"
      />
    );
    const bar = screen.getByText(label);
    expect(bar).toHaveStyle("filter: none");

    userEvent.click(bar);
    expect(bar).not.toHaveStyle("filter: none");

    userEvent.click(bar);
    expect(bar).toHaveStyle("filter: none");
  });
});
