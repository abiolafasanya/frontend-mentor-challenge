import { useState } from "react";
import Menu from "../images/icon-menu.svg";
import closeBtn from "../images/icon-close-menu.svg";
import SideBar from "./SideBar";

const Mobilenav = () => {
  const [openMenu, setopenMenu] = useState(false);
  const menuBtn = () => {
    setopenMenu(!openMenu);
  };
  const sidebarClosed = (val) => {
    console.log("from sideBar", val);
    setopenMenu(val);
  };
  return (
    <div className="sm:flex md:flex lg:hidden items-center justify-between px-2 pt-2 mb-6">
      <div className="text-3xl text-bold font-sans font-bold">Snap</div>
      <div className="">
        <img src={Menu} alt="Menu" onClick={() => menuBtn()} />
      </div>
      {openMenu && <SideBar btn={closeBtn} close={sidebarClosed} />}
    </div>
  );
};

export default Mobilenav;
