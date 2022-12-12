import React from 'react'
import ActiveDeactiveStatus from '../../common/ActiveDeactiveStatus'

const DeactiveAgentsTableItems = (props) => {
  return (
    <tr className="hover font-light text-gray-700">
    <td>{props.userId}</td>
    {/* <td><TableUser name={props?.userId} gender={props?.gender} /></td> */}
    <td>{props.phone}</td>
    <td>{props.totalDevices}</td>
    <td>
      <ActiveDeactiveStatus status={'deactive'} />
    </td>
  </tr>
  )
}

export default DeactiveAgentsTableItems