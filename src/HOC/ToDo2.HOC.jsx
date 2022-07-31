import React from "react";

const ToDoHOC2 = (MyComponent, classes) => {
    return props => (

        <div className={classes} >
            <MyComponent />
        </div>

    )
}
export default ToDoHOC2;