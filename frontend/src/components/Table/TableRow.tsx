"use client";
import { TableRowProps } from "@/models/table.type";
import React from "react";
import TableCell from "./TableCell";
import GenericButton from "../Button";
import { CheckBadgeIcon, PencilSquareIcon } from "@heroicons/react/16/solid";

const TableRow = ({ row }: TableRowProps): React.ReactElement => {
  const test = () => console.log("hola mundo");
  return (
    <tbody>
      <tr className="hover:bg-white">
        {Object.values(row).map((value, idx) => (
          <TableCell key={idx} value={value} />
        ))}
        <td className="h-22 border-b-2">
          <GenericButton
            onClick={test}
            type="button"
            className="bg-blue-950"
            icon={<PencilSquareIcon className="h-10" />}
          />
          <GenericButton
            onClick={test}
            type="button"
            className="bg-red-800"
            icon={<CheckBadgeIcon className="h-10" />}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
