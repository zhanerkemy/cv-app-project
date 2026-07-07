import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    items: [],
    loading: false,
    error: null,
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
        state.items = action.payload;
      })
      .addCase(fetchSkills.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load skills";
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default skillsSlice.reducer;