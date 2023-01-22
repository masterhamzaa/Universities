import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const req = await axios.get("https://restcountries.com/v3.1/all");
    return req.data;
  }
);
export const getUniversity = createAsyncThunk(
  "universities/getUniversity",
  async () => {
    const req = await axios.get("http://universities.hipolabs.com/search?country=");
    return req.data;
  }
);
const Countries = createSlice({
  name: "countries",
  initialState: {
    data: [],
    load: "idle",
    error: null,
    selectedCountry: "Morocco",
  },
  reducers: {
    addselected: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountries.pending, (state, action) => {
      if (state.load === "idle") {
        state.load = "pending";
      }
    });
    builder.addCase(getCountries.fulfilled, (state, action) => {
      if (state.load === "pending") {
        state.data = action.payload;
        state.load = "idle";
      }
    });
    builder.addCase(getCountries.rejected, (state, action) => {
      if (state.load === "pending") {
        state.load = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default Countries.reducer;
export const { addselected } = Countries.actions;
