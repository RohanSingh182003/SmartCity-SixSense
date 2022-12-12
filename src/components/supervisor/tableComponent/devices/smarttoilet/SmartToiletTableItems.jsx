import React from 'react'
import ActiveDeactiveStatus from '../../common/ActiveDeactiveStatus'

const SmartToiletTableItems = (props) => {
  return (
    <tr className="hover font-light text-gray-700">
      <td>{props.id}</td>
      <td>{props.mac_address}</td>
      <td>{props.location}</td>
      <td>
        <ActiveDeactiveStatus status={props.status} />
      </td>
    </tr>
  )
}

export default SmartToiletTableItems