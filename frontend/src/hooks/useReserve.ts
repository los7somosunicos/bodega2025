import { tempTable } from "@/assets/temporalMenu";

export const useReserve = async (dui: string) => {
  const filterTable = tempTable.filter((item) => item.Dui === dui);
  return filterTable;
};
