import { combineReducers } from "redux";
import productReducer from "./productReducer";
import add_FAVORITES from "./favoritesReducer";
import increment_Count from "./counterReducer";

const root_Reducer = combineReducers({

  productsState: productReducer,   // must match useSelector
  favoritesState: add_FAVORITES, // must match useSelector
  countState: increment_Count, 
})

export default root_Reducer;