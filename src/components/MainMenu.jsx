import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    title: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    route: "/",
  },
  {
    title: "Trámites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
      </svg>
    ),
    route: "/tramites",
  },
];

const MainMenu = () => {
  return (
    <ul className="flex flex-col py-4 space-y-1">
      {menuList.map((menuItem) => {
        return (
          <li key={menuItem.title}>
            <Link
              className="relative flex flex-row items-center h-11 text-cyan-50 focus:outline-none hover:bg-gray-50 hover:text-gray-800 border-r-4 border-transparent hover:border-indigo-500 pr-6"
              to={menuItem.route}
            >
              <span className="inline-flex justify-center items-center ml-4">
                {menuItem.icon}
              </span>
              <span className="ml-2 text-sm tracking-wide uppercase truncate">
                {menuItem.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
