import axios from "axios";
import { FETCH_PRODUCTS, INCREMENT_COUNT } from "../constant/actionType";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      dispatch({
        type: FETCH_PRODUCTS,
        payload: res.data,
      });

      dispatch({
        type: INCREMENT_COUNT,
      });
    } catch (error) {
      console.error("error occur during fetchProducts", error);
    }
  };
};
