
import React, { useContext, Fragment } from "react";
import ToDoContext from "./ToDo.context";
import ToDoCreate from "./ToDoCreate.component";
import ToDoList from "./ToDoList.component";
import ToDoListCount from "./ToDoListCount.component";
import ToDoHOC from "../../HOC/ToDo.HOC";

const ToDo = () => {
    const context = useContext(ToDoContext);
    return(
        <Fragment>
            <h3 className="text-center">Function Component</h3>
            <ToDoHOC classes="container rtl text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-white">
                            <div className="card-body">
                                <ToDoCreate />
                                <div className="todo-list">
                                    <ToDoList />
                                </div>
                            </div>
                            {
                                context.Jobs.length > 0 ? <ToDoListCount /> : null
                            }
                        </div>
                    </div>
                </div>
            </ToDoHOC>
        </Fragment>

    );
}
export default ToDo;