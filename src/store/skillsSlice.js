import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadSkillsFromLocalStorage } from "./localStorage";

export const fetchSkills = createAsyncThunk("skills/fetchSkills", async () => {
  const response = await fetch("/api/skills");

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  return response.json();
});

export const addSkill = createAsyncThunk("skills/addSkill", async (skill) => {
  const response = await fetch("/api/skills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skill),
  });

  if (!response.ok) {
    throw new Error("Failed to add skill");
  }

  return response.json();
});

const savedSkills = loadSkillsFromLocalStorage();

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    items: savedSkills,
    loading: false,
    error: null,
    hasSavedSkills: savedSkills.length > 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;

        if (!state.hasSavedSkills) {
          state.items = action.payload;
        }
      })
      .addCase(fetchSkills.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load skills";
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.hasSavedSkills = true;
      });
  },
});

export default skillsSlice.reducer;