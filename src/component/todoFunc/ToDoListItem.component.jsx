
import { useContext } from "react";
import ToDoContext from "./ToDo.context";



const ToDoListItem = ({ id, title, isChecked }) => {
    const context=useContext(ToDoContext);
    let checked = isChecked ? "checked:'checked'" : "";
    const titleStyle={
        textDecorationLine:'line-through'
    }
    return (

        <div className="todo-item" data-id={id} >
            <div className="checker"><span className=""><input type="checkbox" checked={checked} onChange={()=>context.CompleteJob(id)}/></span></div>
            <span style={isChecked ? titleStyle : {}}>{title}</span>
            <span className="btn btn-danger" style={{marginLeft:'20px'}} onClick={()=>context.DeleteJob(id)}>   
            <i className='fa fa-trash'></i></span>
        </div>
    );
}
export default ToDoListItem;