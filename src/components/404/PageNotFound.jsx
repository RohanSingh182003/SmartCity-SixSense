import React from 'react'

const PageNotFound = () => {
  return (
    <div className="min-h-screen w-screen grid place-items-center bg-gradient-to-r from-cyan-500 to-pink-500">
      <div className="bg-white w-96 h-36 rounded-sm grid place-items-center">
        <p className="text-4xl text-gray-900">Error 404</p>
        <p className='text-gray-500'>Page Not Found</p>
        </div>
    </div>
  )
}

export default PageNotFound