import React, { Suspense, useContext } from "react";
import { SideBarItemsGroup } from "./SideBarItem";
import { AppRoutes } from "../../routes/AppRoutes";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
import { ThemeModeIcon } from "../../context/ThemeProvider";
import FullScreenSpinner from "../FullScreenSpinner";
import { SystemLanguage } from "../../context/Context";

const LogoWithTextIcon = React.lazy(
  () => import("../../assets/svg/elements.svg?react")
);


export const SideBar: React.FC<{ isClosed: boolean }> = ({ isClosed }) => {
    const { language } = useContext(SystemLanguage);
    
    return (
    <>
      <div
        className={`h-screen flex flex-col justify-between gap-2 transition-all duration-300 ease-in-out dark:bg-darkTheme dark:border-gray-800 py-[20px] 
          ${
          isClosed ? " w-[110px] ps-[33px] pe-[34px]" : " w-64 px-4"
          }
        `}
      >
        <div className={`flex flex-col gap-2 ${language === "Arabic" && " text-end"}`}>
          <div
            className={`flex flex-col justify-between gap-2 overflow-hidden`}
          >
            <Suspense fallback={<FullScreenSpinner />}>
              <LogoWithTextIcon
                className={`text-black dark:text-white flex self-baseline transition-all duration-300 ${
                  isClosed ? "w-[44px] h-[50px]" : "w-[212px] h-[50px]"
                }`}
              />
            </Suspense>
          </div>
          <div
            className={`h-[1px] bg-gray-950/10 mb-3 transition-all duration-300 dark:bg-gray-800 ${
              isClosed ? " -mx-8" : " -mx-4"
            }`}
          ></div>
          <div className="pb-3">
            <SideBarItemsGroup
              items={[
                {
                  pageTitle: "Dashboard",
                  text: "Dashboard",
                  icon: "dashboard",
                  url: AppRoutes.home,
                },
              ]}
            />
          </div>
          <div className="pb-3">
            <span
              className={`block text-gray-950/40 dark:text-gray-600 text-sm py-1 px-3 h-7 transition-all duration-300 mb-1 ${
                isClosed ? " translate-x-[-50%]" : " translate-x-0"
              }`}
            >
              Developer
            </span>
            <SideBarItemsGroup
              items={[
                {
                  pageTitle: "التسجيل اليومي للطلبة",
                  text: "التسجيل اليومي للطلبة",
                  icon: "settings",
                  url: "/studentsDaily",
                },
              ]}
            />
          </div>
          <div className="pb-3">
            <span
              className={`block text-gray-950/40 dark:text-gray-600 text-sm py-1 px-3 h-7 transition-all duration-300 mb-1 ${
                isClosed ? " translate-x-[-40%]" : " translate-x-0"
              }`}
            >
              Account
            </span>

            <div
              className={`flex rounded-lg border-s-transparent transition-all ease-in-out cursor-pointer relative z-10 text-gray-700 overflow-hidden justify-between duration-700 mt-1 px-2 
                ${
                isClosed
                  ? " translate-x-[-10%] h-20"
                  : " items-center translate-x-0 h-9"
                }
                ${language === "Arabic" && " flex-row-reverse"}
              `}
            >
              <div
                className={`flex duration-700 transition-all 
                  ${
                  isClosed ? "ms-[5px] mt-1 " : "ms-[1px] items-center "
                  }
                  ${language === "Arabic" && " flex-row-reverse"}
                `}
              >
                <span className="m-1">
                  <ThemeModeIcon className="text-gray-900 dark:text-gray-500" />
                </span>

                <span
                  className={`overflow-hidden transition-all ease-in-out whitespace-nowrap text-sm font-readexProBold700 w-fit ml-[5px] font-sans hidden md:inline dark:text-white ${
                    isClosed ? "opacity-0 w-0 h-0" : ""
                  }`}
                >
                  الوضع الليلي
                </span>
              </div>
              <div
                className={`transition-transform duration-300 ease-in-out transform 
                  ${
                  isClosed
                    ? 
                    "translate-x-[-108px] translate-y-[44px]"
                    : "translate-x-0 translate-y-0"
                  }
                   ${language === "Arabic" && isClosed && " translate-x-[108px]"}
                `}
              >
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
