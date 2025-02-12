import React from 'react'
import Link from "next/link";
import cx from "classnames";
import { MenuType } from '@/models/menu.type';

const menuItem = ({title, path}:MenuType):React.ReactElement => {
  return (
    <li>
        <Link href={path} className={cx()}>
              {title}
            </Link>
    </li>
}

export default menuItem