import React from 'react'
import AllAgentsTableItems from './AllAgentsTableItems'

const AllAgentsTable = () => {
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
          <AllAgentsTableItems  userId={'user id'} gender={'female'} phone={9423657891} totalDevices={36} status={'active'} />
          <AllAgentsTableItems  userId={'user id'} gender={'female'} phone={9423657891} totalDevices={37} status={'deactive'} />
          <AllAgentsTableItems  userId={'user id'} gender={'male'} phone={9423657891} totalDevices={69} status={'deactive'} />
          <AllAgentsTableItems  userId={'user id'} gender={'male'} phone={9423657891} totalDevices={78} status={'active'} />
      </tbody>
    </table>
  </div>
  )
}

export default AllAgentsTable