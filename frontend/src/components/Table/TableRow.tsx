import { TableRowProps } from '@/models/table.type';
import React from 'react'
import TableCell from './TableCell';

const TableRow = ({ row }:TableRowProps):React.ReactElement => {
  return (
    <tr className="hover:bg-white">
      {Object.values(row).map((value, idx) => (
       <TableCell key={idx} value={value} />
      ))}
    </tr>
  );
}

export default TableRow