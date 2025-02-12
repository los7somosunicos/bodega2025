export type MenuType = {
  title: string;
  path: string;
  // icon:React.ReactElement
};

export type MenuProps = {
  menu: MenuType[];
  title: string;
};
