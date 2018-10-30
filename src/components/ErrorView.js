import React from "react";

const ErrorView = props => {
    if (props.hasError) {
        return (
            <div>
                <h1>SOMETHING WENT WRONG!</h1>
                <p>{props.errData}</p>
            </div>
        )
    }

    return (
        <div>
            {props.children}
        </div>
    );
}

export default ErrorView;