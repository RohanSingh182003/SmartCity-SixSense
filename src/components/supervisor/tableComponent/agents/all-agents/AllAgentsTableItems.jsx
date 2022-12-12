import React from 'react'
import ActiveDeactiveStatus from '../../common/ActiveDeactiveStatus'
import TableUser from '../../tableItems/TableUser'

const AllAgentsTableItems = (props) => {
  return (
    <tr className="hover font-light text-gray-700 dark:text-gray-400">
      <td>
        <TableUser name={props?.userId} gender={props?.gender} />
      </td>
      <td>{props.phone}</td>
      <td>{props.totalDevices}</td>
      <td>
        <ActiveDeactiveStatus status={props.status} />
      </td>
    </tr>
  )
}

export default AllAgentsTableItems