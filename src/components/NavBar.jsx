import { useState } from "react";
import Btn from "./Btn";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TodoList from "../images/icon-todo.svg";
import Calendar from "../images/icon-calendar.svg";
import Reminder from "../images/icon-reminders.svg";
import Planning from "../images/icon-planning.svg";

const NavBar = (props) => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  function featuresHandler() {
    console.log("Clicked features");
    // openCompany && setOpenCompany(false);
    setOpenFeature(!openFeature);
  }
  function companyHandler() {
    console.log("Clicked company");
    // openFeature && setOpenFeature(false);
    setOpenCompany(!openCompany);
  }

  const features = (
    <ul className="bg-white py-5 px-7 space-y-5 absolute top-24 left-[6rem] shadow-md rounded-md">
      <li className="flex space-x-2">
        <img src={TodoList} alt="Todolist" className="flex-shrink-0 w-[18px]" />
        <span className="">Todo List</span>
      </li>
      <li className="flex space-x-2">
        <img src={Calendar} alt="Calendar" className="flex-shrink-0 w-[18px]" />
        <span className="">Calendar</span>
      </li>
      <li className="flex space-x-2">
        <img src={Reminder} alt="Reminder" className="flex-shrink-0 w-[18px]" />
        <span className="">Reminder</span>
      </li>
      <li className="flex space-x-2">
        <img src={Planning} alt="Planning" className="flex-shrink-0 w-[18px]" />
        <span className="">Planning</span>
      </li>
    </ul>
  );
  const company = (
    <ul className="bg-white py-5 px-7 top-24 left-[18rem] space-y-5 absolute shadow-md rounded-md">
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </ul>
  );

  return (
    <div
      className={`${flexStyle} px-12 text-sm py-12 lg:flex md:hidden sm:hidden`}
    >
      <div className={`flex justify-between items-center`}>
        <h1 className={navTitle}>
          <a href="#home">Snap</a>
        </h1>
        <ul className="ml-5 flex items-center text-gray-600 font-semibold space-x-6">
          <li
            className={`${listStyle + "relative"}`}
            onClick={() => featuresHandler()}
          >
            <span className="flex items-center space-x-2">
              <span className="">Features</span>
              {openFeature ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {openFeature && features}
          </li>
          <li
            className={listStyle + "relative"}
            onClick={() => companyHandler()}
          >
            <span className="flex items-center space-x-2">
              <span className="">Company</span>
              {openCompany ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {openCompany && company}
          </li>
          <li className={listStyle}>Careers</li>
          <li className={listStyle}>About</li>
        </ul>
      </div>
      <div>
        <Btn name="Login" />
        <Btn name="register" className="rounded-lg border-gray-500 border" />
      </div>
    </div>
  );
};

const flexStyle = `justify-between items-center`;
const listStyle = `cursor-pointer`;
const navTitle = `text-black text-3xl font-bold mr-[2rem]`;
export default NavBar;
