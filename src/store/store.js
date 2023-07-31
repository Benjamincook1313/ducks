import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  favColor: "",
  favFood: "Burgers"
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_COLOR": 
      return {...state, favColor: action.payload};
    case "CLEAR_COLOR": 
      return {...state, favColor: ""};
    case "SET_FOOD":
     return {...state, favFood: action.payload}
    default: 
      return console.log("hit default");
  }
};

const store = configureStore({ reducer: reducer });

export default store;