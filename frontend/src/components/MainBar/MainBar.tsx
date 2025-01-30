import React from "react";
import Search from "./Search";

const MainBar = () => {
  return (
    <div className="w-[90%] h-24 mt-20 ml-20 flex items-center rounded-md shadow-[0px_0px_8px_3px_rgba(0,_0,_0,_0.1)]">
      <Search />
    </div>
  );
};

export default MainBar;
