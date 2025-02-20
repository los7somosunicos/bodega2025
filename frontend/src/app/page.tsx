import { Table, TableHeader, TableRow } from "@/components/Table";
import React from "react";
const tempTable = [
  {
    Name: "Juan",
    Dui: "008229007-8",
    "Articulo/Bien": "Motosierra a Gas",
    "Fecha de Solicitud": "12/02/2025",
    "Fecha de Retorno": "13/02/2025"
  },
  {
    Name: "Ana",
    Dui: "002345678-9",
    "Articulo/Bien": "Laptop Dell",
    "Fecha de Solicitud": "10/02/2025",
    "Fecha de Retorno": "15/02/2025"
  }
];
const home = () => {
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

export default home;
