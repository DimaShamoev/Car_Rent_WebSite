import { createSlice } from "@reduxjs/toolkit";

interface IAsideState {
    value: boolean,
}

const initialState: IAsideState = {
    value: false,
}

const asideMenuSlice = createSlice({
    name: 'asideMenu',

    initialState,

    reducers: {
        toggleAside: (state) => {
            state.value = !state.value
        }
    }
})

export const { toggleAside } = asideMenuSlice.actions
export default asideMenuSlice.reducer