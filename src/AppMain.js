import React, { useState } from 'react';
import { toDoArray} from "./data";


const AppMain = () => {
    const [toDo, setToDo] = useState(toDoArray);
    const removeThing = (clicked) =>{
        let removeToDo = toDo.filter( thing => thing.id !== clicked);
        setToDo(removeToDo)
    }
  return (
    <section>
        {
            toDo.map( thing =>{
               return <div key={thing.id}  className="thing" >
                <span>{thing.name}</span>
                <button onClick={()=> removeThing(thing.id)}>X</button>
                </div>
            })
        }
    </section>
  )
}

export default AppMain