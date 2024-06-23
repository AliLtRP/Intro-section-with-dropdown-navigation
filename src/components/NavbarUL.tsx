import arrow_down from "../assets/icon-arrow-down.svg";
import arrow_up from "../assets/icon-arrow-up.svg";
import todo from "../assets/icon-todo.svg";
import calendar from "../assets/icon-calendar.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import { useState } from "react";

const NavbarUL = () => {
  const [arrowDirection, setArrowDirection] = useState<boolean>(false);
  const [arrowDirection2, setArrowDirection2] = useState<boolean>(false);
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between">
      <ul className="h-auto pl-14 pt-0.5 flex flex-col sm:flex-row items-start sm:items-center gap-6 font-bold text-sm text-[#696969]">
        <li className="">
          <div
            className="w-full flex gap-2 hover:cursor-pointer relative"
            onClick={() => setArrowDirection(!arrowDirection)}
          >
            <p>Features</p>
            <img
              src={arrowDirection ? arrow_up : arrow_down}
              alt="down arrow"
              className="pt-[3px]"
            />
          </div>
          <ul
            className={`${
              arrowDirection ? "flex" : "hidden"
            } relative sm:absolute z-10 sm:left-[84px] mt-3 sm:shadow-2xl flex-col gap-2 rounded-md w-32 h-auto py-4`}
          >
            <li>
              <div className="w-full flex justify-center">
                <img src={todo} alt="todo icon" />
                <p className="w-[72%] text-center">Todo List</p>
              </div>
            </li>
            <li>
              <div className="w-full flex justify-center">
                <img src={calendar} alt="calendar icon" />
                <p className="w-[72%] text-center">Calendar</p>
              </div>
            </li>
            <li>
              <div className="w-full flex justify-center">
                <img src={reminders} alt="reminders icon" />
                <p className="w-[70%] mr-[2px] text-end">Reminders</p>
              </div>
            </li>
            <li>
              <div className="w-full flex justify-center">
                <img src={planning} alt="planning icon" />
                <p className="w-[72%] text-center">Planning</p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="w-full flex gap-2 hover:cursor-pointer"
            onClick={() => setArrowDirection2(!arrowDirection2)}
          >
            <p>Company</p>
            <img
              src={arrowDirection2 ? arrow_up : arrow_down}
              alt="down arrow"
              className="pt-[3px]"
            />
          </div>
          <ul
            className={`${
              arrowDirection2 ? "flex" : "hidden"
            } relative sm:absolute z-10 mt-3 sm:shadow-2xl flex-col gap-3 items-start pl-5 rounded-md w-24 h-auto py-4`}
          >
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
        </li>
        <li className="hover:cursor-pointer">Careers</li>
        <li className="hover:cursor-pointer">About</li>
      </ul>

      <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row h-full items-center gap-6 text-sm font-semibold">
        <button className="px-4 mt-1 text-[#696969]">Login</button>
        <button className="px-20 py-2 sm:px-4 mt-1 rounded-xl border-2 border-[#6f6e6ec8] text-[#696969]">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavbarUL;
