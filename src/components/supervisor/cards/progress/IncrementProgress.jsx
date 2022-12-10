import React from 'react'

const IncrementProgress = (props) => {
  return (
    <div className='h-2 w-full bg-gray-200 dark:bg-gray-700'>
        <div style={{ width: props.value + "%" }} className='h-full bg-gradient-to-r from-info to-green-300 shadow-lg shadow-gray-500'></div>
    </div>
  )
}

export default IncrementProgress