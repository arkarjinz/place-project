import {createSlice} from "@reduxjs/toolkit";
import {data} from "../data.js";

const placeSlice = createSlice({
    name: "places",
    initialState: data,
    reducers: {

    }
})

export default placeSlice.reducer;