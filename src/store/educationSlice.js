import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEducation = createAsyncThunk(
  "education/fetchEducation",
  async () => {
    const response = await fetch("/api/educations");

    if (!response.ok) {
      throw new Error("Failed to fetch education data");
    }

    return response.json();
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchEducation.rejected, (state) => {
        state.loading = false;
        state.error =
          "Something went wrong; please review your server connection!";
      });
  },
});

export default educationSlice.reducer;