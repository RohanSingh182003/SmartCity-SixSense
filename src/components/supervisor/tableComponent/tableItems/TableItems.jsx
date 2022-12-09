import React from "react";
import Status from "./Status";
import TableUser from "./TableUser";

const TableItems = (props) => {
  return (
    <tr className="hover font-light text-sm">
      <th className="py-6">
        <TableUser name={props?.name} gender={props?.gender} />
      </th>
      <td className="py-6">{props?.activity}</td>
      <td className="py-6">{props?.time}</td>
      <td className="py-6">
        <Status status={props?.status} />
      </td>
    </tr>
  );
};

export default TableItems;
