import React from 'react'
import DeactiveAgentsTableItems from './DeactiveAgentsTableItems'

const DeactiveAgentsTable = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 p-4 md:col-span-3">
    <table className="w-full table">
      <thead className="py-4 border dark:border-none">
        <tr>
          <th className="bg-white dark:bg-gray-800">user id</th>
          <th className="bg-white dark:bg-gray-800">contact number</th>
          <th className="bg-white dark:bg-gray-800">total devices</th>
          <th className="bg-white dark:bg-gray-800">status</th>
        </tr>
      </thead>
      <tbody>
          <DeactiveAgentsTableItems userId={'user id'} gender={'male'} phone={94569657891} totalDevices={15} />
          <DeactiveAgentsTableItems userId={'user id'} gender={'male'} phone={94569657891} totalDevices={15} />
          <DeactiveAgentsTableItems userId={'user id'} gender={'female'} phone={94569657891} totalDevices={15} />
          <DeactiveAgentsTableItems userId={'user id'} gender={'female'} phone={94569657891} totalDevices={15} />
      </tbody>
    </table>
  </div>
  )
}

export default DeactiveAgentsTable