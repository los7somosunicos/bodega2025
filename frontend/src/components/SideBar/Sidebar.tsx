import React from "react";
import cx from "classnames";

const Sidebar = (): React.ReactElement => {
  return (
    <aside
      className={cx(
        `h-[100vh] w-[300px] bg-blue-950 text-white text-center shadow-2xl transition ease-in-out duration-300`,
        {
          "opacity-0 w-0": false
        }
      )}
    >
      <p className="font-bold mt-10">Control de Ingresos</p>
    </aside>
  );
};

export default Sidebar;
