import React from "react";
import TableItems from "./tableItems/TableItems";

const All = () => {
  return (
    <table className="w-full table">
      <thead className="py-4 border dark:border-none">
        <tr>
          <th className="bg-white dark:bg-gray-800">User id</th>
          <th className="bg-white dark:bg-gray-800">contct number</th>
          <th className="bg-white dark:bg-gray-800">total devices</th>
        </tr>
      </thead>
      <tbody>
        <TableItems
          name={"Wonder Women"}
          gender={"female"}
          contactNumber={1234567890}
          totalDevuces={5}
        />
        <TableItems
          name={"Batman"}
          gender={"male"}
          contactNumber={1021469890}
          totalDevuces={3}
        />
        <TableItems
          name={"Superman"}
          gender={"male"}
          contactNumber={1235736890}
          totalDevuces={8}
        />
      </tbody>
    </table>
  );
};

export default All;
