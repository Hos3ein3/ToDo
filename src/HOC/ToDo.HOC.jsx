import React from "react";

// const ToDoHOC = ({ children }) => {
//     return children();
// }
// export default ToDoHOC;

const ToDoHOC = ({ children, classes }) => {
    return (
        <div className={classes}>{children}</div>
    );
}
export default ToDoHOC;