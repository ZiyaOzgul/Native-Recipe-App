import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesAsync = createAsyncThunk(
  "/cook/getCategoriesAsync",
  async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log("data");
    return res.data;
  }
);

export const getCooksAsync = createAsyncThunk(
  "/cook/getCooksAsync",
  async (category) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    return res.data;
  }
);

export const getRecipieAsync = createAsyncThunk(
  "/cook/getRecipieAsync",
  async (cookId) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cookId}`
    );
    console.log(res.data);
    return res.data;
  }
);

export const cookSlice = createSlice({
  name: "cook",
  initialState: {
    Loading: false,
    recipie: [],
    category: [],
    meal: [],
  },
  extraReducers: {
    [getCategoriesAsync.pending]: (state, action) => {
      state.Loading = true;
    },
    [getCategoriesAsync.fulfilled]: (state, action) => {
      state.recipie = action.payload;
      state.Loading = false;
    },
    [getCooksAsync.pending]: (state, action) => {
      state.Loading = true;
    },
    [getCooksAsync.fulfilled]: (state, action) => {
      state.category = action.payload;
      state.Loading = false;
    },
    [getRecipieAsync.pending]: (state, action) => {
      state.Loading = false;
    },
    [getRecipieAsync.fulfilled]: (state, action) => {
      state.meal = action.payload;
      state.Loading = false;
    },
  },
});

export default cookSlice.reducer;
