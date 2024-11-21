import { configureStore } from "@reduxjs/toolkit";
import AsideReducer from "./AsideSlice";

export const store = configureStore({
    reducer: {
        asideMenu: AsideReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch