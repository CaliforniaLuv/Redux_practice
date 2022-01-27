import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from '../action/types'

interface subAction {
    type: string,
    payload: {
      title: string
    }
}


  
const initialState = {
    count: 370
}

const subscriberReducer = (state=initialState, action:subAction) => {
    switch(action.type) {
        case ADD_SUBSCRIBER: 
            return {
                ...state,
                count: state.count + 1
            }
        case REMOVE_SUBSCRIBER:
            return {
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}

export default subscriberReducer