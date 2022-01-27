import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL } from "../action/types"

interface subAction {
    type: string,
    payload: {
        items: jsonType[],
        err: null
    }
}

interface jsonType {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

const initialState = {
    items: [] as jsonType[],
    loading: false,
    err: null
}

const commentsReducer = (state = initialState, action: subAction) => {
    switch(action.type) {
        case FETCH_COMMENTS_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                loading: false,
            }
        case FETCH_COMMENTS_FAIL:
            return {
                ...state,
                err: action.payload.err,
                loading: false,
            }
        default: return state
    }
}

export default commentsReducer