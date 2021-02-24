import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getIssues = createAsyncThunk("issues/getIssue", async () => {
  const response = await fetch(
    "https://api.github.com/repos/facebook/react/issues"
  );

  return response.json();
});

const issueSlice = createSlice({
  name: "issues",
  initialState: { list: [], loading: "idle" },
  reducers: {},
  extraReducers: {
    [getIssues.fulfilled]: (state, action) => {
      state.loading = "loaded";
      state.list = action.payload;
    },
    [getIssues.rejected]: (state, action) => {
      console.log("error-->", action);
    }
  }
});

export default issueSlice.reducer;
