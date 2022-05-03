import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TodoList from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminder from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";

const Sidebar = (props) => {
  const [openFeature, setOpenFeature] = useState(true);
  const [openCompany, setOpenCompany] = useState(true);
  const [closeSidebar, setcloseSidebar] = useState(false);

  function featuresHandler() {
    console.log("Clicked features");
    setOpenFeature(!openFeature);
  }
  function companyHandler() {
    console.log("Clicked company");
    setOpenCompany(!openCompany);
  }
  function closeHandler() {
    setcloseSidebar(!closeSidebar);
    props.close(closeSidebar);
  }
  const features = (
    <ul className="bg-white p-3 space-y-5">
      <li className="flex space-x-2">
        <img src={TodoList} alt="Todolist" className="flex-shrink-0 w-[22px]" />
        <span className="">Todo List</span>
      </li>
      <li className="flex space-x-2">
        <img src={Calendar} alt="Calendar" className="flex-shrink-0 w-[22px]" />
        <span className="">Calendar</span>
      </li>
      <li className="flex space-x-2">
        <img src={Reminder} alt="Reminder" className="flex-shrink-0 w-[18px]" />
        <span className="">Reminder</span>
      </li>
      <li className="flex space-x-2">
        <img src={Planning} alt="Planning" className="flex-shrink-0 w-[22px]" />
        <span className="">Planning</span>
      </li>
    </ul>
  );
  const company = (
    <ul className="bg-white p-3 space-y-5">
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  );

  return (
    <div
      className={`${
        !closeSidebar ? "flex" : "hidden"
      } absolute w-full bg-black right-0 top-0 min-h-full bg-opacity-70`}
    >
      <div className="absolute right-0 top-0 bg-white min-h-full w-[60%]">
        <img
          src={props.btn}
          className="absolute right-[2rem] top-[2rem]"
          alt="close btn"
          onClick={() => closeHandler()}
        />

        <div className="mt-[35%] flex flex-col">
          <div>
            <ul className="ml-5 flex flex-col text-[16px] text-gray-600 font-semibold align-center space-y-[1.5rem]">
              <li className={`${listStyle}`} onClick={() => featuresHandler()}>
                <span className="flex items-center space-x-2">
                  <span className="">Features</span>
                  {openFeature ? <FaChevronDown /> : <FaChevronUp />}
                </span>
                {!openFeature && features}
              </li>
              <li className={listStyle} onClick={() => companyHandler()}>
                <span className="flex items-center space-x-2">
                  <span className="">Company</span>
                  {openCompany ? <FaChevronDown /> : <FaChevronUp />}
                </span>
                {!openCompany && company}
              </li>
              <li className={listStyle}>Careers</li>
              <li className={listStyle}>About</li>
            </ul>
          </div>
          <div className="flex items-center flex-col text-gray-600 mt-10 space-y-5">
            <button>Login</button>
            <button className="border border-gray-600 rounded-[12px]  py-2 px-12">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const listStyle = `hover:text-gray-600 cursor-pointer text-gray-500 font-medium text-left`;
export default Sidebar;
