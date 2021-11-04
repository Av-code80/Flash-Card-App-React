import { configureStore } from '@reduxjs/toolkit'
import authReducer from './components/Auth/authSlice.js'
import homepageReducer from './components/Homepage/homepageSlice'



const store = configureStore({
    reducer: {
        auth: authReducer,
        homepage: homepageReducer
    }
})
export default store ;