import React from "react";

const Loading = props => {
    if (props.loading) {
        return (
            <div>
                <h1>LOADING, PLEASE WAIT...</h1>
            </div>
        )
    }

    return (
        <div>
            {props.children}
        </div>
    );      
}

export default Loading;