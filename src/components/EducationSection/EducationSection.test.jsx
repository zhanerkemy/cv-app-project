import { render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import EducationSection from "./EducationSection";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockDispatch = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
  mockDispatch.mockClear();
});

test("renders loading state", () => {
  useSelector.mockReturnValue({
    items: [],
    loading: true,
    error: null,
  });

  render(<EducationSection />);

  expect(
    screen.getByRole("status", { name: /loading education/i })
  ).toBeInTheDocument();
});

test("renders error state", () => {
  useSelector.mockReturnValue({
    items: [],
    loading: false,
    error: "Something went wrong; please review your server connection!",
  });

  render(<EducationSection />);

  expect(
    screen.getByText("Something went wrong; please review your server connection!")
  ).toBeInTheDocument();
});

test("renders education items", () => {
  useSelector.mockReturnValue({
    items: [{ date: "2023", title: "NU", text: "Computer Science" }],
    loading: false,
    error: null,
  });

  render(<EducationSection />);

  expect(screen.getByText("NU")).toBeInTheDocument();
  expect(screen.getByText("Computer Science")).toBeInTheDocument();
});