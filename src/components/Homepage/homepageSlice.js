import { createSlice } from "@reduxjs/toolkit";




let categories = [

  {
    name: "englishWords",
    description: "English translation"
  },
  {
    name: "frenchWords",
    description: "French translation"
  }
]

const englishWords = {
  hi: "bonjour",
  name: "nom",
  age: "âge",
};

const serializedObj = JSON.stringify(englishWords); // "englishWords" ??
localStorage.setItem("Obj", serializedObj);

const deserializedObj = JSON.parse(localStorage.getItem("obj"));

console.log(deserializedObj);

const initialHomeState = {
  initial: "",
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState: initialHomeState,
  reducers: {
    deserializedObj(state) {
      state.initial = true;
    },
  },
});

export const homepageSliceActions = homepageSlice.actions;
export default homepageSlice;
