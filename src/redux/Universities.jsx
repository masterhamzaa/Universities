import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUniversity = createAsyncThunk(
  "universities/getUniversity",
  async () => {
    const req = await axios.get("http://universities.hipolabs.com/search?country=");
    return req.data;
  }
);
const Universities = createSlice({
  name: "universities",
  initialState: {
    data: [],
    load: "idle",
    error: null,
    selectedCountry: "Morocco",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUniversity.pending, (state, action) => {
      if (state.load === "idle") {
        state.load = "pending";
      }
    });
    builder.addCase(getUniversity.fulfilled, (state, action) => {
      if (state.load === "pending") {
        state.data = action.payload;
        state.load = "idle";
      }
    });
    builder.addCase(getUniversity.rejected, (state, action) => {
      if (state.load === "pending") {
        state.load = "idle";
        state.error = "Error occured";
      }
    });
  }
});


export default Universities.reducer;

