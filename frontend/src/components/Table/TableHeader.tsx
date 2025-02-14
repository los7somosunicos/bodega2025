import React from 'react'

const TableHeader = ({ columns }: { columns: string[] }):React.ReactElement => {
  return (
    <thead>
      <tr className="">
        {columns.map((col) => (
          <th key={col} className="p-2">
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader