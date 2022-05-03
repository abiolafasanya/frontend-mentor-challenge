import NavBar from "./components/NavBar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import arrowUp from "../src/images/icon-arrow-up.svg";
import arrowDown from "../src/images/icon-arrow-down.svg";
import TodoList from "../src/images/icon-todo.svg";
import Calendar from "../src/images/icon-calendar.svg";
import Reminder from "../src/images/icon-reminders.svg";
import Planning from "../src/images/icon-planning.svg";

const navlistData = [
  {
    name: "Features",
    link: "#/features",
    isIcon: true,
    target: "features",
    isFeatures: true,
    hasList: true,
    list: [
      {
        name: "Todo List",
        link: "#/features/todo-list",
        icon: TodoList,
      },
      {
        name: "Calendar",
        link: "#/features/calendar",
        icon: Calendar,
      },
      {
        name: "Reminder",
        link: "#/features/reminder",
        icon: Reminder,
      },
      {
        name: "Planning",
        link: "#/features/planning",
        icon: Planning,
      },
    ],
  },

  {
    name: "Company",
    link: "#/company",
    isIcon: true,
    target: "company",
    isCompany: true,
    hasList: true,
    list: [
      { name: "History", link: "#/company/history" },
      { name: "Our Team", link: "#/company/our-team" },
      { name: "Blog", link: "#/company/blog" },
    ],
  },
  { name: "Career", link: "#/career", isIcon: false },
  { name: "About", link: "#/about", isIcon: false },
];

const icons = { icon1: arrowUp, icon2: arrowDown };

function App() {
  return (
    <div className="min-h-screen lg:max-w-[1440px] font-sans relative">
      <div className="">
        <MobileNav />
        <NavBar nav={navlistData} icons={icons} />
        <Hero />
      </div>
    </div>
  );
}

export default App;
