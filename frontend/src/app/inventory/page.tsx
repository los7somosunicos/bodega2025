"use client";
import { httpClient } from "@/api/httpClient";
import { Table, TableHeader, TableRow } from "@/components/Table";
export default async function inventory() {
  const asset =await httpClient.getArticles();
  const headerTitles = Object.keys(asset || {});
  return (
    <section className="w-full h-full">
      <Table>
        <TableHeader columns={headerTitles} />
         {asset.map((row, index) => (
          <TableRow row={row} key={index} />
        ))}
      </Table>
    </section>
  );
}
