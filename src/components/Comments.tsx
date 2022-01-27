import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../reducer";
import { fetchComments } from '../action/actions'


function Comments() {
    const dispatch = useDispatch();
    const comments = useSelector((state: RootState) => state.comments.items);
    const loading = useSelector((state: RootState) => state.comments.loading);

    useEffect(() => {
        dispatch(fetchComments())
    }, [])

    const commentItmes = loading ? (<div>is Loading</div>) : (comments.map((el) => (
        <div key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.email}</p>
            <p>{el.body}</p>
        </div>
    )))

    console.log("이거 뭐여", comments)

    return(
        <div className="items">
            {commentItmes}
        </div>
    )
}

export default Comments