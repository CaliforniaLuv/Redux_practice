import { ADD_VIEW } from "../action/types";


interface subAction {
    type: string,
    payload: number,
}


const initialState = {
    count: 0,
}

const viewReducer = (state=initialState, action: subAction) => {
    switch(action.type) {
        case ADD_VIEW : 
            return {
                ...state,
                count: state.count + action.payload
            }
        default: return state
    }
}

export default viewReducer
