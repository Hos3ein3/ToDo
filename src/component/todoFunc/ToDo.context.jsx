import { createContext } from "react";

const ToDoContext= createContext({
    Jobs:[],
    Job:'',
    DeleteJob :()=>{},
    CompleteJob:()=>{},
    SetNewJob:()=>{},
    AddJob:()=>{},
});
export default ToDoContext;