import React from 'react'
import WaterpointTableItems from './WaterpointTableItems'

const WaterpointTable = () => {
  return (
    <div className="w-full bg-white p-4 md:col-span-3">
    <table className="w-full table">
      <thead className="py-4 border dark:border-none">
        <tr>
          <th className="bg-white dark:bg-gray-800">device mac address</th>
          <th className="bg-white dark:bg-gray-800">contct number</th>
          <th className="bg-white dark:bg-gray-800">total devices</th>
        </tr>
      </thead>
      <tbody>
          <WaterpointTableItems/>
          <WaterpointTableItems/>
          <WaterpointTableItems/>
          <WaterpointTableItems/>
          <WaterpointTableItems/>
      </tbody>
    </table>
  </div>
  )
}

export default WaterpointTable