import { combineReducers } from "redux";
import shoppingKartReducer from "./shoppingkartreducer";

export default combineReducers({
  shopping_kart_reducer: shoppingKartReducer,
});
