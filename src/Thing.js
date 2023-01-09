import React from 'react';
import { toDoArray } from './data';

const Thing = ({id,name}) => {
  return (
    <div className='thing'>
        <span className='text'>{id} - {name}</span>
    </div>
  )
}

export default Thing