import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

test("renders skills list", () => {
  render(
    <Skills
      skills={[
        { name: "React", range: 80 },
        { name: "JavaScript", range: 70 },
      ]}
    />
  );

  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
});

test("renders empty state", () => {
  render(<Skills skills={[]} />);

  expect(screen.getByText("No skills added yet.")).toBeInTheDocument();
});