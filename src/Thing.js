import React from 'react';
import { toDoArray } from './data';

const Thing = ({id,name,children}) => {
  return (
    <div className='thing'>
        <span>{id} - {name}</span>
    </div>
  )
}

export default Thing