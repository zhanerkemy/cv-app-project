import educationReducer, { fetchEducation } from "./educationSlice";

describe("educationSlice", () => {
  test("returns initial state", () => {
    expect(educationReducer(undefined, { type: undefined })).toEqual({
      items: [],
      loading: false,
      error: null,
    });
  });

  test("handles fetchEducation pending", () => {
    const state = educationReducer(undefined, fetchEducation.pending());

    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test("handles fetchEducation fulfilled", () => {
    const data = [{ date: "2023", title: "NU", text: "CS" }];
    const state = educationReducer(undefined, fetchEducation.fulfilled(data));

    expect(state.loading).toBe(false);
    expect(state.items).toEqual(data);
  });

  test("handles fetchEducation rejected", () => {
    const state = educationReducer(undefined, fetchEducation.rejected());

    expect(state.loading).toBe(false);
    expect(state.error).toBe(
      "Something went wrong; please review your server connection!"
    );
  });
});