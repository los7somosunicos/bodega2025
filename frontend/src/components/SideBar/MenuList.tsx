import React from "react";

type menu = {
  title: string,
  path:string,
  // icon:React.ReactElement
}
const menuList:Array<menu> = [
    {
      title: "Inicio",
      path: "/",
      // icon: "home"
    },
    {
      title: "Perfil",
      path: "/perfil",
     // icon: "user"
    },
    {
      title: "Configuración",
      path: "/configuracion",
      //icon: "settings",
    },
    {
      title: "Ayuda",
      path: "/ayuda",
     // icon: "help-circle"
    },
    {
      title: "Cerrar sesión",
      path: "/logout",
    //  icon: "log-out"
    }
];


function MenuList(): React.ReactElement {
  return (
    <nav className="sticky top-10 z-10 flex bg-white shadow-lg rounded-md">
      <ul className="flex items-center">
        <li>{}</li>
      </ul>
    </nav>
  );
}

export default React.memo(MenuList);
