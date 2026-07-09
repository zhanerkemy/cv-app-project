import { render, screen } from "@testing-library/react";
import TimeLine from "./TimeLine";

test("renders timeline items", () => {
  render(
    <TimeLine
      data={[
        {
          date: "2023",
          title: "Nazarbayev University",
          text: "Computer Science",
        },
      ]}
    />
  );

  expect(screen.getByText("2023")).toBeInTheDocument();
  expect(screen.getByText("Nazarbayev University")).toBeInTheDocument();
  expect(screen.getByText("Computer Science")).toBeInTheDocument();
});