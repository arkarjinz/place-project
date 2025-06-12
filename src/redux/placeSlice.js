import {createSlice} from "@reduxjs/toolkit";
import {data} from "../data.js";

const placeSlice = createSlice({
    name: "places",
    initialState: data,
    reducers: {
        markPlaces: (state, action) => {
            const place = state.find((place) => place.id === action.payload.id);
            if (place) {
                // place.visited = !place.visited
            }
        }
    }
})

export const {markPlaces} = placeSlice.actions;
export default placeSlice.reducer;