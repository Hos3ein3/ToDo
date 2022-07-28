import { createContext } from "react";

const ToDoContext= createContext({
    state:{},
    DeleteJob :()=>{},
    CompleteJob:()=>{},
    SetNewJob:()=>{},
    AddJob:()=>{},
});
export default ToDoContext;