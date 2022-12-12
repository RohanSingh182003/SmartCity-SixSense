import React from 'react'
import ActiveDeactiveStatus from '../../common/ActiveDeactiveStatus'

const AllAgentsTableItems = (props) => {
  return (
    <tr className="hover font-light text-gray-700">
    <td>{props.userId}</td>
    <td>{props.phone}</td>
    <td>{props.totalDevices}</td>
    <td>
      <ActiveDeactiveStatus status={props.status} />
    </td>
  </tr>
  )
}

export default AllAgentsTableItems