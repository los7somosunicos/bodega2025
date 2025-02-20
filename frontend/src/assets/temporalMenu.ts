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
const tempTable = [
  {
    Name: "Juan",
    Dui: "008229007-8",
    "Articulo/Bien": "Motosierra a Gas",
    "Fecha de Solicitud": "12/02/2025",
    "Fecha de Retorno": "13/02/2025"
  },
  {
    Name: "Ana",
    Dui: "002345678-9",
    "Articulo/Bien": "Laptop Dell",
    "Fecha de Solicitud": "10/02/2025",
    "Fecha de Retorno": "15/02/2025"
  }
];
export { menuList, tempTable };
