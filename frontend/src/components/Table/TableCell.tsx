import { TableCellProps } from '@/models/table.type';
import React from 'react'

const TableCell = ({value}:TableCellProps) => {
  return <td className="h-22 border-b-2 p-2">{value}</td>;
}

export default TableCell