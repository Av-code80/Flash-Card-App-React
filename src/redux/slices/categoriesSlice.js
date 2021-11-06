import { createSlice } from "@reduxjs/toolkit";



export const categoriesSlice = createSlice({

    name: "categories",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const {add} = categoriesSlice.actions

export const addCategoryAsync = categories => dispatch => { //
    dispatch(add(categories))
}
export default categoriesSlice.reducer