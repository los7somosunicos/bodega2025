import { TableRowProps } from "@/models/table.type";
import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ row }: TableRowProps): React.ReactElement => {
  return (
    <tr className="hover:bg-white">
      {Object.values(row).map((value, idx) => (
        <TableCell key={idx} value={value} />
      ))}
      <td className="h-22 border-b-2 p-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2">Editar</button>
        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm">Eliminar</button>
      </td>
    </tr>
  );
};

export default TableRow;
