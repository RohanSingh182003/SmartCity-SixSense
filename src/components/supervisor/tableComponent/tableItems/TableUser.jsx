import React from 'react'
import { GrUserFemale , GrUserManager } from 'react-icons/gr';

const TableUser = (props) => {
  return (
    <div className='flex items-center'>
        {props.gender.toLowerCase() === 'female' ? <GrUserFemale className='text-2xl bg-purple-300 rounded-full'/> : <GrUserManager className='text-2xl bg-cyan-300 rounded-full'/>}
        <p className='font-light ml-4 capitalize'>{props.name}</p>
    </div>
  )
}

export default TableUser