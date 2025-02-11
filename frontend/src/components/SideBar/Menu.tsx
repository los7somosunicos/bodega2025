import React from "react";
import { MenuProps, MenuType } from "@/models/menu.type";
import { usePathname } from "next/navigation";



function Menu({menu, title}:MenuProps): React.ReactElement {
  const currentNav = usePathname()
  return (
      <ul className="flex items-center">
       <li>{title}</li>
        {menu.map((item:MenuType, index:number)=>(
          
        ))}
      </ul>
  );
}

export default React.memo(Menu);
