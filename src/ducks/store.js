import { configureStore } from "@reduxjs/toolkit";

let initialState = {
  favColor: "Blue",
  favFood: "Burgers"
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_COLOR": 
      return {...state, favColor: action.payload};
    case "CLEAR_COLOR": 
      return {...state, favColor: ""};
    case "SET_FOOD":
     return {...state, favFood: action.payload};
    default: 
      return state;
  }
};

const store = configureStore({ reducer: reducer });

export default store;