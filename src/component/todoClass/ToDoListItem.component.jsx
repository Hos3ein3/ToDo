
import { Component, useContext } from "react";
import ToDoContext from "./ToDo.context";

export default class ToDoListItem extends Component {

    constructor(params) {
        super();
        

    }
    

    static contextType = ToDoContext;
    render() {
        let checked = this.props.isChecked ? "checked:'checked'" : "";
        const titleStyle = {
            textDecorationLine: 'line-through'
        }
        return (
            <ToDoContext.Consumer>
                {(contextType) => (
                    <div className="todo-item" data-id={this.props.id} >
                        <div className="checker"><span className=""><input type="checkbox" checked={checked} onChange={() => contextType.CompleteJob(this.props.id)} /></span></div>
                        <span style={this.props.isChecked ? titleStyle : {}}>{this.props.title}</span>
                        <span className="btn btn-danger" style={{ marginLeft: '20px' }} onClick={() => contextType.DeleteJob(this.props.id)}>
                            <i className='fa fa-trash'></i></span>
                    </div>
                )}
            </ToDoContext.Consumer>
        );
    }
}
