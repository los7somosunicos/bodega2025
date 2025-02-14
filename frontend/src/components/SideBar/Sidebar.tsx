import React from "react";
import cx from "classnames";
import Menu from "./Menu";
import { menuList } from "@/assets/temporalMenu";
const Sidebar = (): React.ReactElement => {
  return (
    <aside
      className={cx(
        `h-[100vh] w-[250px] bg-blue-950 text-white text-center shadow-2xl transition ease-in-out duration-300`,
        {
          "opacity-0 w-0": false
        }
      )}
    >
      <Menu menu={menuList} title="Menu Principal" />
    </aside>
  );
};

export default Sidebar;
