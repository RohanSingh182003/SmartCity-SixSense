import React from "react";
import TableItems from "./tableItems/TableItems";

const Today = () => {
  return (
    <table className="w-full table">
      <thead className="py-4 border">
        <tr>
          <th className="bg-white">User</th>
          <th className="bg-white">Activity</th>
          <th className="bg-white">Time</th>
          <th className="bg-white">Status</th>
        </tr>
      </thead>
      <tbody>
        <TableItems name={'Princess Diana'} gender={'female'} activity={'Jumps over the lazy'} time={'3:28 PM'} status={'done'} />
        <TableItems name={'Bruce Wayne'} gender={'male'} activity={'The quick brown fox'} time={'10:23 AM'} status={'delayed'} />
        <TableItems name={'Clerk Kent'} gender={'male'} activity={'Dog the quick brown'} time={'2:37 PM'} status={'missed'} />
      </tbody>
    </table>
  );
};

export default Today;
