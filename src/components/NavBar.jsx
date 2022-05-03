import { useState } from "react";
import DropList from "./DropList";
import Btn from "./Btn";

const NavBar = (props) => {
  const { nav, icons } = props;
  // const [icon, setIcon] = useState(iconImage);
  const [open, setOpen] = useState(false);
  const [currentTarget, setCurrentTarget] = useState();
  const [hidden, setHidden] = useState(true);

  const isOpen = (check, target, e) => {
    console.log(check, target);
    console.log(e.target.childNodes[1]);
    let iconImage = e.target.childNodes[1];
    if(open) {
      iconImage.src = icons.icon1
    } else {
      iconImage.src = icons.icon2
    }
     
    setOpen(!open);
    open && setCurrentTarget(target);
    open ? setHidden(false) : setHidden(true);
    console.log("dropdownToggle");
  };

  const navItem = nav.map((item, index) => {
    return (
      <span className={`${navLinks} relative`} key={index}>
        <span
          className="flex justify-between items-center hover:text-black"
          onClick={(e) => isOpen(item.isIcon, item.target, e)}
        >
          {item.name}
          {item.isIcon ? <img src={icons.icon2} alt="" className="mx-1" /> : null}
        </span>

        {item.hasList ? (
          <span className="absolute right-1">
            {item.target === currentTarget ? (
              <DropList
                list={item.list}
                className={hidden ? "hidden" : "flex"}
                target={item.target}
              />
            ) : null}
          </span>
        ) : null}
      </span>
    );
  });

  return (
    <div className={`${flexStyle} w-11/12 mx-auto text-sm my-12 lg:flex md:hidden sm:hidden`}>
      <div className={`flex justify-between items-center`}>
        <a href="#/" className={`${navTitle} mr-5 text-bold text-2xl`}>
          Snap
        </a>
        {navItem}
      </div>
      <div>
        <Btn name="Login" />
        <Btn name="register" className="rounded-lg border-gray-500 border" />
      </div>
    </div>
  );
};

const flexStyle = `justify-between items-center`;
const navLinks = `text-gray-500 cursor-pointer mt-2 font-semibold mx-4`;
const navTitle = `text-black text-3xl font-bold`;
export default NavBar;
