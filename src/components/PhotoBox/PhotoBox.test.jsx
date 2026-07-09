import { render, screen } from "@testing-library/react";
import PhotoBox from "./PhotoBox";

test("renders profile information", () => {
  render(
    <PhotoBox
      name="Zhanerke Myrzabekova"
      title="Computer Science Student"
      description="React developer"
      avatar="avatar.jpg"
    />
  );

  expect(screen.getByText("Zhanerke Myrzabekova")).toBeInTheDocument();
  expect(screen.getByText("Computer Science Student")).toBeInTheDocument();
  expect(screen.getByText("React developer")).toBeInTheDocument();
  expect(screen.getByAltText("Zhanerke Myrzabekova avatar")).toBeInTheDocument();
});