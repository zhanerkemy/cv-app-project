import { render, screen } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import SkillsSection from "./SkillsSection";

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

  render(<SkillsSection />);

  expect(screen.getByText("Loading skills...")).toBeInTheDocument();
});

test("renders error state", () => {
  useSelector.mockReturnValue({
    items: [],
    loading: false,
    error: "Failed to load skills",
  });

  render(<SkillsSection />);

  expect(screen.getByText("Failed to load skills")).toBeInTheDocument();
});

test("renders skills from state", () => {
  useSelector.mockReturnValue({
    items: [{ name: "Redux", range: 85 }],
    loading: false,
    error: null,
  });

  render(<SkillsSection />);

  expect(screen.getByText("Redux")).toBeInTheDocument();
});