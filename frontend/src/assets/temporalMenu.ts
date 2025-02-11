import { MenuType } from "@/models/menu.type";

const menuList: Array<MenuType> = [
  {
    title: "Inicio",
    path: "/"
    // icon: "home"
  },
  {
    title: "Perfil",
    path: "/perfil"
    // icon: "user"
  },
  {
    title: "Configuración",
    path: "/configuracion"
    //icon: "settings",
  },
  {
    title: "Ayuda",
    path: "/ayuda"
    // icon: "help-circle"
  },
  {
    title: "Cerrar sesión",
    path: "/logout"
    //  icon: "log-out"
  }
];


export {menuList}