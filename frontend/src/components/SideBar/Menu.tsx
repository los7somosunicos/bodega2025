'use client'
import React from "react";
import { MenuProps, MenuType } from "@/models/menu.type";
import menuItem from "./MenuItem";
// import { usePathname } from "next/navigation";


function Menu({ menu, title }: MenuProps): React.ReactElement {
  // const currentNav = usePathname();
  return (
    <div>
      <p className="font-bold mt-10">{title}</p>
      <ul 
        className="flex flex-col items-center"> 
        {menu.map((item: MenuType, index: number) => (
          <menuItem />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Menu);
