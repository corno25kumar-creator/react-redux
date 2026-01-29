import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../constant/actionType";


export const addToFavorites  = (products) => ({
    type: ADD_TO_FAVORITES,
    payload: products,
})


export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id,
});