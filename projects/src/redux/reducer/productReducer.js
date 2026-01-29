import {FETCH_PRODUCTS} from '../constant/actionType'
const initial_State = {
    products:[]
}

const  productReducer  = (state = initial_State, action) => {
    
if (action.type === FETCH_PRODUCTS) {
    return{
        ...state,
        products:action.payload
    }
}else{
    return state
}
}
export default productReducer;