import { tempTable } from "@/assets/temporalMenu"

export const useReserve = async ({DUI}:string) => {
    const filterTable = tempTable.filter( item => item.Dui === DUI)
    return filterTable
};
