"use client"
import React from "react";
import Search from "./Search";
import GenericButton from "../Button";
import { PlusIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";


const MainBar = () => {
  const route = usePathname()
  return (
    <div className="w-[90%] h-24 mt-20 ml-20 flex items-center justify-between rounded-md bg-white shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Search />
      <GenericButton
      label={route === "/" ? "Agregar prestamo" : "Añadir"}
      className="flex items-center justify-center mr-2 bg-blue-950 text-white p-2 cursor-pointer"
      icon={<PlusIcon className="h-8 mr-0.5"/>}
      type="button"
      onClick={ ()=> console.log("add me product")}
      />
         
    </div>
  );
};

export default MainBar;
