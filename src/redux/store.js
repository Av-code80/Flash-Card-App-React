import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import categoryReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,

    categories: categoryReducer,
  },
});
export default store;
