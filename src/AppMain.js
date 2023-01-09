import React, { useState } from 'react';
import { toDoArray} from "./data";


const AppMain = () => {
    const [toDo, setToDo] = useState(toDoArray);
    const removeThing = (clicked) =>{
        let removeToDo = toDo.filter( thing => thing.id !== clicked);
        setToDo(removeToDo)
    };
    const addThing = () =>{
        let newThing = document.getElementById("addNew").value;
        let newThingObj = {
            id : toDo.length + 1 ,
            "name" : newThing
        }
        let newToDo = toDo.concat(newThingObj);
        setToDo(newToDo)
        document.getElementById("addNew").value = "";
    };
    const handleKeyPress = (event) => {
        // Se il tasto premuto è il tasto Invio (codice ASCII 13)
        if (event.key === 'Enter') {
          // Esegui la tua logica qui
          addThing();
        }
      }
  return (
    <div className='col-3'>
        {
            toDo.map( thing =>{
               return <div key={thing.id}  className="thing col-12" >
                <span>{thing.name}</span>
                <button className='btn btn-danger' onClick={()=> removeThing(thing.id)}>X</button>
                </div>
            })
        }
        <div className='d-flex justify-content-center gap-4'>
            <input type="text" className='col-8' placeholder='Inserisci nuova cosa da fare' id='addNew' onKeyDown={handleKeyPress}></input>
            <button className='btn btn-primary col-3' onClick={addThing}>Add new</button>
        </div>
    </div>
  )
}

export default AppMain