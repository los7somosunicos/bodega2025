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
    title: "Inventario",
    path: "/inventory"
    // icon: "help-circle"
  },
  {
    title: "Reservar",
    path: "/reserva"
    //  icon: "log-out"
  },
  {
    title: "Configuración",
    path: "/configuracion"
    //icon: "settings",
  }
];

export { menuList };
