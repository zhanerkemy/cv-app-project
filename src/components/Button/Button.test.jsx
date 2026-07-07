import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
  render(<Button text="Know more" />);

  expect(screen.getByText("Know more")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();

  render(<Button text="Click me" onClick={handleClick} />);

  fireEvent.click(screen.getByText("Click me"));

  expect(handleClick).toHaveBeenCalledTimes(1);
});