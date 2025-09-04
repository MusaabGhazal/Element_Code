import React, { useContext, useState } from "react";
import type { Section, Student } from "../../types/types";
import { SystemLanguage } from "../../context/Context";
import { General } from "./General/General";
import { Diamond } from "./Diamond/Diamond";

const LogoWithTextIcon = React.lazy(
  () => import("../../assets/svg/Sun.svg?react")
);

const StudentElementDataAccordion = ({
  student,
  section,
}: {
  student: Student;
  section: Section;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>("general");
  const [date, setDate] = useState<Date>(new Date());
  const formatted = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  const { language } = useContext(SystemLanguage);

  return (
    <div className="w-full border rounded-[14px] mb-2 shadow-sm dark:border-gray-600">
      {/* Button Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-4 py-3 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 
          ${isOpen ? "rounded-t-xl" : "rounded-xl"}
          ${language === "Arabic" && " flex-row-reverse"}
        `}
      >
        <span>{student.name}</span>
        <span className="text-gray-500 dark:text-gray-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="px-4 py-3 bg-white border-t dark:border-gray-600 space-y-3 rounded-b-xl dark:bg-gray-800">
          <div className="flex flex-col gap-2 w-full pt-6 pb-4 ps-6 pe-4">
            <span>{formatted}</span>
            {
              <div className="flex justify-between gap-4 w-full py-4 overflow-x-auto">
                <div className="flex flex-col min-w-[824px] gap-4 bg-blueGray-50 rounded-lg w-full border border-blueGray-200 p-4 dark:bg-gray-900 dark:border-gray-800 max-w-full overflow-x-auto">
                  <div
                    className={`w-full flex rounded-lg overflow-hidden border border-blueGray-300 shadow-[0px_1px_2px_0px_#0A0D120D]  ${
                      language === "Arabic" && " flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "general"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" ? " flex-row-reverse rounded-r-lg" : "rounded-l-lg"}`}
                      onClick={() => setCurrentSection("general")}
                    >
                      <LogoWithTextIcon
                        className={`${
                          currentSection === "general"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "general"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        النقاط العامة
                      </div>
                    </div>

                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "diamond"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
                      onClick={() => setCurrentSection("diamond")}
                    >
                      <LogoWithTextIcon
                        className={`${
                          currentSection === "diamond"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "diamond"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        حفظ القرآن
                      </div>
                    </div>

                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "water"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
                      onClick={() => setCurrentSection("water")}
                    >
                      <LogoWithTextIcon
                        className={`${
                          currentSection === "water"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "water"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        مراجعة القرآن
                      </div>
                    </div>

                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "wind"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
                      onClick={() => setCurrentSection("wind")}
                    >
                      <LogoWithTextIcon
                        className={`w-[23px] ${
                          currentSection === "wind"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "wind"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        سماع القرآن
                      </div>
                    </div>

                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "light"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
                      onClick={() => setCurrentSection("light")}
                    >
                      <LogoWithTextIcon
                        className={`w-[23px] ${
                          currentSection === "light"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "light"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        الصلاة
                      </div>
                    </div>

                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "gold"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
                      onClick={() => setCurrentSection("gold")}
                    >
                      <LogoWithTextIcon
                        className={`w-[23px] ${
                          currentSection === "gold"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "gold"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        مكارم الأخلاق
                      </div>
                    </div>

                    <div
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "iron"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
                    ${language === "Arabic" ? " flex-row-reverse rounded-l-lg" : "rounded-r-lg"}`}
                      onClick={() => setCurrentSection("iron")}
                    >
                      <LogoWithTextIcon
                        className={`w-[23px] ${
                          currentSection === "iron"
                            ? "text-blueGray-500"
                            : "text-gray-500"
                        }`}
                      />
                      <div
                        className={`font-bold text-[14px] leading-[20px] tracking-normal ${
                          currentSection === "iron"
                            ? "text-blueGray-700 dark:text-white"
                            : "text-gray-700 dark:text-gray-400"
                        }`}
                      >
                        الاجتهاد والعلم
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-full overflow-x-auto">
                    {currentSection === "general" && (
                      <General/>
                    )}
                    {currentSection === "diamond" && (
                      <Diamond/>
                    )}
                    {currentSection === "water" && <div>water</div>}
                    {currentSection === "wind" && <div>wind</div>}
                    {currentSection === "light" && <div>light</div>}
                    {currentSection === "gold" && <div>gold</div>}
                    {currentSection === "iron" && <div>iron</div>}
                  </div>
                </div>
              </div>
            }
          </div>

          <p className="text-xs text-gray-400">Section: {section.id}</p>
        </div>
      )}
    </div>
  );
};

export default StudentElementDataAccordion;
