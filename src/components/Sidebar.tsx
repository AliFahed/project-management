"use client";

import { useState } from "react";

const Sidebar = () => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl
  transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* Top Logo */}
        <div className="min-h[56px] z-50 flex w-64 items-center justify-between bg-white px-6 py-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            Projman
          </div>
          X
        </div>

        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
            Ali Team
          </h3>
        </div>

        {/* Navbar Links */}
      </div>
    </div>
  );
};

export default Sidebar;
