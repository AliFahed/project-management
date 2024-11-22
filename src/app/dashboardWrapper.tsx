"use client";

import { useEffect } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useSelector(
    (state: RootState) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useSelector((state: RootState) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`dark:bg-dark-bg flex w-full flex-col bg-gray-50 dark:bg-gray-700 ${
          isSidebarCollapsed ? "" : "md:pl-64"
        } `}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
