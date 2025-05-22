import React from "react";
import { Table, TableHeader, TableRow } from "@/components/Table";
import { httpClient } from "@/api/httpClient";

export default async function Category() {
  const categories = await httpClient.getCategories();
  console.log(categories)
  const headerTitles = Object.keys(categories[0] || {});
  return (
    <div className="flex items-center justify-center mt-10">
      <Table>
        <TableHeader columns={headerTitles} />
        {categories.map((row, index) => (
          <TableRow row={row} key={index} />
        ))}
      </Table>
    </div>
  );
};

