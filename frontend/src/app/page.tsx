import { Table, TableHeader, TableRow } from "@/components/Table";
import React from "react";
import {tempTable} from "@/assets/temporalMenu"

export default function home() {
  const headerTitles = Object.keys(tempTable[0] || {});
  return (
    <div className="flex items-center justify-center mt-10">
      <Table>
        <TableHeader columns={headerTitles} />
        {tempTable.map((row, index) => (
          <TableRow row={row} key={index} />
        ))}
      </Table>
    </div>
  );
};

