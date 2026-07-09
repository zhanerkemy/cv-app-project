import { render, screen, fireEvent } from "@testing-library/react";
import Panel from "./Panel";

test("renders panel profile and navigation", () => {
  render(<Panel activeSection="" onNavigate={jest.fn()} />);

  expect(screen.getByText("Zhanerke Myrzabekova")).toBeInTheDocument();
  expect(screen.getByText("About me")).toBeInTheDocument();
});

test("toggles panel content when hamburger is clicked", () => {
  render(<Panel activeSection="" onNavigate={jest.fn()} />);

  const toggleButton = screen.getByLabelText("Toggle menu");

  fireEvent.click(toggleButton);

  expect(screen.queryByText("Zhanerke Myrzabekova")).not.toBeInTheDocument();

  fireEvent.click(toggleButton);

  expect(screen.getByText("Zhanerke Myrzabekova")).toBeInTheDocument();
});