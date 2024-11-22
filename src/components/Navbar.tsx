"use client";

import { Search, Settings, Moon, Sun, Menu } from "lucide-react";
import Link from "next/link";
import { RootState } from "@/store/store";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/store/index";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useSelector(
    (state: RootState) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useSelector((state: RootState) => state.global.isDarkMode);

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      {/* search bar & hamburg menu */}
      <div className="flex items-center gap-8">
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
          >
            <Menu className="h-6 w-6 dark:text-white" />
          </button>
        )}
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            type="search"
            placeholder="Search..."
            className="focus: w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 outline-none focus:border-transparent dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={
            isDarkMode
              ? "rounded p-2 dark:hover:bg-gray-700"
              : "rounded p-2 hover:bg-gray-100"
          }
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 dark:text-white" />
          ) : (
            <Moon className="h-6 w-6 dark:text-white" />
          )}
        </button>

        <Link
          href="/settings"
          className={
            isDarkMode
              ? "h-min w-min rounded p-2 dark:hover:bg-gray-700"
              : "h-min w-min rounded p-2 hover:bg-gray-100"
          }
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
