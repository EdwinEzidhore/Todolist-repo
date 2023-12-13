import React from 'react'
import { FaTrash } from "react-icons/fa";
function Taskdelete({handledelete,id}) {
    
    
    const deletetask=() => {
        handledelete(id)
    }

    return (
        
        <button className='todo-list-delete' onClick={(e)=>deletetask()}><FaTrash /></button>
        
    )
}





export default Taskdelete;
