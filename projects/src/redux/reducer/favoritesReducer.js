import {ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from '../constant/actionType'
const initial_state = {
     favorites : [],
}

const add_FAVORITES = (state=initial_state, action) => {
    if (action.type === ADD_TO_FAVORITES) {
        return{
            ...state, 
            favorites:[
                ...state.favorites, 
                action.payload
            ] 
        }
    }
     if (action.type === REMOVE_FROM_FAVORITES) {
      return {
            ...state, 
            favorites: state.favorites.filter(p => p.id !== action.payload )
        }
    }
     else {
        return state
    }
}

export default add_FAVORITES;