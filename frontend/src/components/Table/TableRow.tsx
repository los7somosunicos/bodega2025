'use client'
import { TableRowProps } from "@/models/table.type";
import React from "react";
import TableCell from "./TableCell";
import GenericButton from "../Button";

const TableRow = ({ row }: TableRowProps): React.ReactElement => {
  const test = () => console.log('hola mundo')
  return (
    <tbody>
      <tr className="hover:bg-white">
        {Object.values(row).map((value, idx) => (
          <TableCell key={idx} value={value} />
        ))}
        <td className="h-22 border-b-2 p-2">
          <GenericButton
            label="Editar"
            onClick={test}
            type="button"
            className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2"
          />
          <GenericButton
            label="Finalizar"
            onClick={test}
            type="button"
            className="bg-red-500 text-white px-3 py-1 rounded-md text-sm cursor-pointer"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
