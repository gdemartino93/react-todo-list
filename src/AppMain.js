import React, { useState } from 'react';
import { toDoArray} from "./data";
import Thing from './Thing';
const ArrayState = () => {
    const [toDo , setToDo] = useState(toDoArray);
}

const AppMain = () => {
  return (
    <section>
        {
            toDoArray.map( thing =>{
               return <Thing key={thing.id} {...thing} />
            })
        }
    </section>
  )
}

export default AppMain