import { useContext, useState } from "react";
import SideBar from "./SideBar/SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { SystemLanguage } from "../context/Context";

export const Layout = () => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleSidebarIconClick = () => {
    setIsClosed(!isClosed);
  };

  const { language } = useContext(SystemLanguage);

  return (
    <div className="min-h-screen ">
      <div className={`flex ${language === "Arabic" && " flex-row-reverse"}`}>
        <div className="text-white h-screen border-r border-r-[1px] border-r-gray-950/10 dark:border-gray-800 bg-white z-10">
          <SideBar isClosed={isClosed} />
        </div>
        <div className="flex-1 dark:bg-black transition-all duration-300 overflow-auto">
          <Header onSidebarIconClick={handleSidebarIconClick} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
