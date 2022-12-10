import React from "react";
import TableUser from "./TableUser";

const TableItems = (props) => {
  return (
    <tr className="hover font-light text-sm">
      <th className="py-6">
        <TableUser name={props?.name} gender={props?.gender} />
      </th>
      <td className="py-6">{props?.contactNumber}</td>
      <td className="py-6">{props?.totalDevuces}</td>
    </tr>
  );
};

export default TableItems;
