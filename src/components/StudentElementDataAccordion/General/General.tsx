import { useContext } from "react";
import { SystemLanguage } from "../../../context/Context";

export const General = () => {
  const { language } = useContext(SystemLanguage);

  return (
    <div>
      <label className="flex flex-col gap-2">
        <span className={language === "Arabic" ? "text-end" : ""}>
          الحضور
        </span>
        <select
          className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 ${
            language === "Arabic" ? "text-end" : ""
          }`}
        >
          <option value="present">حاضر</option>
          <option value="absent">غائب</option>
          <option value="noIqra">لا يوجد دوام</option>
        </select>
      </label>
    </div>
  );
};
