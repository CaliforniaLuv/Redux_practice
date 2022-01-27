import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer";
import { addSubscriber } from '../action/actions'


// interface Iprops {
//     count: number,
//     addSubscriber: () => void
// }

// interface subAction {
//     subscribers: {
//         count:number
//     }
// }

function Subscribers() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.subscribers.count);
    return (
        <>
            <div className="items">
                <h2>구독자 수: {state}</h2>
                <button onClick={() => dispatch(addSubscriber())}>구독하기 !</button>
            </div>
        </>
    )
}

// const mapStateToProps = ({subscribers}:subAction) => {
//     return {
//         count: subscribers.count
//     }
// }

// const mapDispatchToProps = (dispatch:(arg: { type: string; }) => void) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }

// const mapDispatchToProps = {
//     addSubscriber
// }

export default Subscribers