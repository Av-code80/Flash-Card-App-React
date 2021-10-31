import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
   isAuthenticated: false
}

const authSlice = createSlice({
name: "auth",
initialState: initialAuthState,


})


export default authSlice;