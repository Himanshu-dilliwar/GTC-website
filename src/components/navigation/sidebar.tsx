import React from "react";
import MenuOptions from "./sidebar-menu";

type Props = {
  name: string;
  role: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = async ({ name, role }: Props) => {
  return (
    <>
      <MenuOptions defaultOpen={true} name={name} />
      {/* mobile nav*/}
      <MenuOptions name={name} />
    </>
  );
};

export default Sidebar;
