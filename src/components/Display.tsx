import React from "react";
import { connect } from "react-redux";

interface subAction {
    subscribers: {
        count:number
    }
}

interface Iprops {
    count: number
}

function Display(props: Iprops) {
    return (
        <div>
            <p>구독자 수: {props.count}</p>
        </div>
    )
}

const mapStateToProps = ({subscribers}: subAction) => {
    return {
        count: subscribers.count
    }
}

export default connect(mapStateToProps)(Display)