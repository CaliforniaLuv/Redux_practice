import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER, ADD_VIEW,
     FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL  } from "./types"
import * as Redux from 'redux';

     
export const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}

export const removeSubscriber = () => {
    return {
        type: REMOVE_SUBSCRIBER
    }
}

export const addView = (number: string) => {
    return {
        type: ADD_VIEW,
        payload: Number(number)
    }
}

const fetchCommentsSuccess = (comments: []) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: {
            items: comments
        }
    }
}

const fetchCommentsFail = (error: null) => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

const fetchCommentsRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}


export const fetchComments = () => {
    return (dispatch:any) => {
        dispatch(fetchCommentsRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then(data => dispatch(fetchCommentsSuccess(data)))
        .catch(error => dispatch(fetchCommentsFail(error)))
    }
}