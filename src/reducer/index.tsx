import { combineReducers } from 'redux';
import subscriberReducer from './subscriberReducer';
import viewReducer from './viewReducer';
import commentsReducer from './commentsReducer';


const rootReducer = combineReducers({
    subscribers: subscriberReducer,
    views: viewReducer,
    comments: commentsReducer
})

export default rootReducer

// useSelector에 필요
export type RootState = ReturnType<typeof rootReducer>;