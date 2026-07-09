import { render, screen } from "@testing-library/react";
import Box from "./Box";

test("renders title and children", () => {
  render(
    <Box title="About me">
      <p>Test content</p>
    </Box>
  );

  expect(screen.getByText("About me")).toBeInTheDocument();
  expect(screen.getByText("Test content")).toBeInTheDocument();
});

test("renders children without title", () => {
  render(
    <Box>
      <p>Only content</p>
    </Box>
  );

  expect(screen.getByText("Only content")).toBeInTheDocument();
});