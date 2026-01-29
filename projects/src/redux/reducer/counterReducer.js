import {INCREMENT_COUNT} from '../constant/actionType'

const initial_State = {
    count : 0
}

const increment_Count = (state=initial_State, action) => {
    if (action.type === INCREMENT_COUNT ) {
        return{
            ...state,
            count: state.count + 1
        }
    } else {
        return state
    }
}

export default increment_Count