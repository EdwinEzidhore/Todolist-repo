import { useState } from "react";
import Taskdelete from "./Taskdelete";
import { MdAddToPhotos } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";


const Tasklist = () => {
    const[task,setTask]=useState("")
    const [list, setList] = useState([
       
    ])
    


    const addtask = (e) => {
        e.preventDefault();
        setList(curitem => {
            return [...list, {id:Date.now(),name:task,status:false }]
            
        })
        setTask("");
        
    }
    
    
    const deletetask = (id) => {
            setList((curitem) => {
                return curitem.filter((item)=>item.id !== id)
            })
            
        }
    
    const isticked = (id,status) => {
        setList(list.filter(el => {
            if (el.id === id) {
                el.status=status
            }
            return el;
        }))
    }

    
    return (
        
        <div className="App">
            <div className="input-container">
            <div><h1 className='main-heading'>To-Do list</h1></div>
            <div><h2 className="sub-heading">Hey, how's it going? &#128075;</h2></div>
                <div className="wrapper">
             <form  onSubmit={addtask}> 
             <input  className="task-input" value={task} type="text" placeholder="What's your plan today?" onChange={(e) => setTask(e.target.value)} />
             <button className="Submit-btn"><MdAddToPhotos /></button>
          
            </form>
            </div>
            </div>
            <div className="To-do-list">
                <ul  className="ul-todo-list">
                    {
                        list.map((task) => {
                            return (
                                <li  key={task.id} className="li-todo-list">
                                    <input className="todo-list-checkbox" type="checkbox" value={task.status} onChange={(e) => isticked(task.id, e.target.checked)}></input>
                                
                                    <span className={task.status ? 'checked-text' : ''}><p>{task.name}</p></span>
                                    
                                    <Taskdelete handledelete={deletetask} id={task.id} />
                                    
                                </li>
                            )
                        })
                    }
               </ul>
            </div>
            
    </div>
     
    )
}

export default Tasklist;