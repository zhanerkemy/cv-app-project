import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders navigation labels when expanded", () => {
  render(<Navigation activeSection="#about" onNavigate={jest.fn()} isExpanded />);

  expect(screen.getByText("About me")).toBeInTheDocument();
  expect(screen.getByText("Skills")).toBeInTheDocument();
});

test("calls onNavigate when link is clicked", () => {
  const onNavigate = jest.fn();

  render(<Navigation activeSection="" onNavigate={onNavigate} isExpanded />);

  fireEvent.click(screen.getByText("Portfolio"));

  expect(onNavigate).toHaveBeenCalledWith("#portfolio");
});

test("hides labels when not expanded", () => {
  render(
    <Navigation activeSection="" onNavigate={jest.fn()} isExpanded={false} />
  );

  expect(screen.queryByText("About me")).not.toBeInTheDocument();
});