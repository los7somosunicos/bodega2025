import React from "react";
import Link from "next/link";
import cx from "classnames";
import { MenuType } from "@/models/menu.type";
import { usePathname } from "next/navigation";


const MenuItem = ({ title, path }: MenuType): React.ReactElement => {
    const currentPath = usePathname()
  return (
    <li 
      className={cx(
        'w-[80%] h-10 rounded flex items-center justify-center hover:text-black hover:bg-white hover:font-bold',
      {
        'bg-white text-black font-bold':currentPath === path
      }
      )}>
      <Link href={path}>{title}</Link>
    </li>
  );
};

export default MenuItem;
