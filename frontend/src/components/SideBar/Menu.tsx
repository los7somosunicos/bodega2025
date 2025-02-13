"use client";
import React from "react";
import { MenuProps, MenuType } from "@/models/menu.type";
import MenuItem from "./MenuItem";

function Menu({ menu, title }: MenuProps): React.ReactElement {
  return (
    <div className="w-full h-full flex flex-col">
      <p className="font-bold mt-10">{title}</p>
      <ul className="flex flex-col items-center mt-10">
        {menu.map((item: MenuType, index: number) => (
          <MenuItem title={item.title} path={item.path} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Menu);
