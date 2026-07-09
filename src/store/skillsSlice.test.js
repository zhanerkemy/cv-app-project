import skillsReducer, { fetchSkills, addSkill } from "./skillsSlice";

beforeEach(() => {
  localStorage.clear();
});

describe("skillsSlice", () => {
  test("returns initial state", () => {
    const state = skillsReducer(undefined, { type: undefined });

    expect(state.items).toEqual(expect.any(Array));
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  test("handles fetchSkills pending", () => {
    const state = skillsReducer(undefined, fetchSkills.pending());

    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  test("handles fetchSkills fulfilled", () => {
    const data = [{ name: "React", range: 90 }];
    const state = skillsReducer(undefined, fetchSkills.fulfilled(data));

    expect(state.loading).toBe(false);
    expect(state.items).toEqual(data);
  });

  test("handles fetchSkills rejected", () => {
    const state = skillsReducer(undefined, fetchSkills.rejected());

    expect(state.loading).toBe(false);
    expect(state.error).toBe("Failed to load skills");
  });

  test("handles addSkill fulfilled", () => {
    const skill = { name: "Redux", range: 85 };
    const state = skillsReducer(undefined, addSkill.fulfilled(skill));

    expect(state.items).toContainEqual(skill);
    expect(state.hasSavedSkills).toBe(true);
  });
});