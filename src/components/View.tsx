import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer";
import { addView } from '../action/actions'

function Views() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.views.count);
    
    const [number, setNumber] = useState<string>("1")

    const handleNumber = (e: { target: { value: string; }; } ) => {
        const {value} = e.target
        setNumber(value)
    }

    return (
        <>
            <div className="items">
                <h2>조회 수: {state}</h2>
                <input type="number" value={number} onChange={handleNumber}/>
                <button onClick={() => dispatch(addView(number))}>조회하기 !</button>
            </div>
        </>
    )
}

// const mapStateToProps = ({views}:Iprops) => {
//     return {
//         count: views.count
//     }
// }


// const mapDispatchToProps = {
//     addView: (number: number) => addView(number)
// }

export default Views