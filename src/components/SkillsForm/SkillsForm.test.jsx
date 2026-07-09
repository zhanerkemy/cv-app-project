import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import SkillsForm from "./SkillsForm";
import skillsReducer from "../../store/skillsSlice";

const setupStore = () => {
  const testStore = configureStore({
    reducer: {
      skills: skillsReducer,
    },
  });

  render(
    <Provider store={testStore}>
      <SkillsForm />
    </Provider>
  );

  return testStore;
};

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ name: "Redux", range: 85 }),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders skills form fields", () => {
  setupStore();

  expect(screen.getByPlaceholderText("Enter skill name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Enter skill range")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /add skill/i })).toBeDisabled();
});

test("shows validation errors", async () => {
  setupStore();

  fireEvent.change(screen.getByPlaceholderText("Enter skill name"), {
    target: { value: " " },
  });
  fireEvent.blur(screen.getByPlaceholderText("Enter skill name"));

  fireEvent.change(screen.getByPlaceholderText("Enter skill range"), {
    target: { value: "5" },
  });
  fireEvent.blur(screen.getByPlaceholderText("Enter skill range"));

  expect(
    await screen.findByText("Skill name is a required field")
  ).toBeInTheDocument();

  expect(
    await screen.findByText("Skill range must be greater than or equal to 10")
  ).toBeInTheDocument();
});

test("submits valid skill form", async () => {
  const testStore = setupStore();

  fireEvent.change(screen.getByPlaceholderText("Enter skill name"), {
    target: { value: "Redux" },
  });

  fireEvent.change(screen.getByPlaceholderText("Enter skill range"), {
    target: { value: "85" },
  });

  const button = screen.getByRole("button", { name: /add skill/i });

  await waitFor(() => {
    expect(button).not.toBeDisabled();
  });

  fireEvent.click(button);

  await waitFor(() => {
    expect(testStore.getState().skills.items).toContainEqual({
      name: "Redux",
      range: 85,
    });
  });
});