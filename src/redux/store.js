import {configureStore} from "@reduxjs/toolkit";
import Places from "./placeSlice.js"

export const store = configureStore(
    {
        reducer: {
            places: Places
        }
    }
)