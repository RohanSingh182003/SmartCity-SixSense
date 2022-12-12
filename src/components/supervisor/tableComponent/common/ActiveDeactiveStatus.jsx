import React from 'react'

const ActiveDeactiveStatus = (props) => {
  return (
    <div className='w-24 flex items-center justify-between'>
      <p className={`${props?.status === 'active' ? 'text-info' : 'text-error'}`}>{props?.status}</p>
      <div className={`h-2 w-2 rounded-full ${props?.status === 'active' ? 'bg-info' : 'bg-error'}`}></div>
    </div>
  )
}

export default ActiveDeactiveStatus