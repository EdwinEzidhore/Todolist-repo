import React from 'react'

function Tasktoglecheck({id,status,name,togglecheck}) {

    const togglechange = (id,status) =>{
        togglecheck(id,status)
    }
  return (
      <div>
            <input className="todo-list-checkbox" type="checkbox" value={status} onChange={(e) =>togglechange(id,e.target.checked)}></input>
            <span className={status ? 'checked-text' : ''}><p>{name}</p></span>
    </div>
  )
}

export default Tasktoglecheck