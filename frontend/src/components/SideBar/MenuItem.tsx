import React from "react";
import Link from "next/link";
import cx from "classnames";
import { MenuType } from "@/models/menu.type";

const MenuItem = ({ title, path }: MenuType): React.ReactElement => {
  return (
    <li className={cx(`w-full h-10 border-0.5 border-gray-600 inline-block align-middle`)}>
      <Link href={path}>{title}</Link>
    </li>
  );
};

export default MenuItem;
