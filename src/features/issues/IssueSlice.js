

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
// First, create the thunk
export const  getIssues= createAsyncThunk(
  'issues/getIssue',
  async () => {
    const response = await fetch("https://api.github.com/repos/facebook/react/issues")
    // const res=fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response =>response.json())
    console.log(response)

    return response.json()
  }
)

const issueSlice = createSlice({
  name: 'issues',
  initialState: { list: [], loading: 'idle' },
  reducers: {
  },
  extraReducers: {
    [getIssues.fulfilled]: (state, action) => {
      state.loading='loaded'
      console.log("action log-->",action)
      state.list=action.payload
    },
    [getIssues.rejected]: (state, action) => {
        console.log("error-->",action)
      }
  }
})

export default issueSlice.reducer;
