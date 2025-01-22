import React from "react";

function Navbar(): React.ReactElement {
  return (
    <nav className="sticky top-10 z-10 flex bg-white shadow-lg rounded-md">
      <ul className="flex items-center">
        <li>opcion 1</li>
        <li>opcion 2</li>
        <li>opcion 3</li>
        <li>opcion 4</li>
      </ul>
    </nav>
  );
}

export default React.memo(Navbar);
