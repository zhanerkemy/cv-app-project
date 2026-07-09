import { render, screen, fireEvent } from "@testing-library/react";
import Portfolio from "./Portfolio";

test("renders all portfolio items by default", () => {
  render(<Portfolio />);

  expect(screen.getByText("CV Portfolio Website")).toBeInTheDocument();
  expect(screen.getByText("Machine Learning Research")).toBeInTheDocument();
});

test("filters portfolio items by web category", () => {
  render(<Portfolio />);

  fireEvent.click(screen.getByText("Web"));

  expect(screen.getByText("CV Portfolio Website")).toBeInTheDocument();
  expect(screen.getByText("Komek Platform")).toBeInTheDocument();
});