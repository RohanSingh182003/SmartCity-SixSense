import React from 'react'

const Status = (props) => {
  const selectStatus = (status) => {
    if(status === 'done'){
      return 'Done'
    }
    if(status === 'delayed'){
      return 'Delayed'
    }
    if(status === 'missed'){
      return 'Missed'
    }
  }

  const setStatusColor = (color) => {
    if(color === 'done'){
      return 'bg-cyan-500'
    }
    if(color === 'delayed'){
      return 'bg-purple-500'
    }
    if(color === 'missed'){
      return 'bg-red-500'
    }
  }

  const setTextColor = (color) => {
    if(color === 'done'){
      return 'text-cyan-500'
    }
    if(color === 'delayed'){
      return 'text-purple-500'
    }
    if(color === 'missed'){
      return 'text-red-500'
    }
  }
  
  return (
    <div className='flex w-20 items-center justify-between'>
        <p className={`${setTextColor(props?.status.toLowerCase())} capitalize`}>{selectStatus(props?.status.toLowerCase())}</p>
        <div className={`h-2 w-2 rounded-full ${setStatusColor(props?.status.toLowerCase())}`}></div>
    </div>
  )
}

export default Status