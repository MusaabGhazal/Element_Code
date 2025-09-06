import { useState } from "react";

export const Gold = () => {
  const [values, setValues] = useState({
    noHandJoking: false,
    politeSpeech: false,
    calm: false,
  });

  const handleChange = (field: keyof typeof values) => {
    setValues((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div
      className="flex items-center justify-start gap-10 p-3 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
      dir="rtl"
    >
      {/* Checkbox 1 */}
      <label className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <input
          type="checkbox"
          checked={values.noHandJoking}
          onChange={() => handleChange("noHandJoking")}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
        />
        عدم المزاح باليد
      </label>

      {/* Checkbox 2 */}
      <label className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <input
          type="checkbox"
          checked={values.politeSpeech}
          onChange={() => handleChange("politeSpeech")}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
        />
        الحديث بأدب
      </label>

      {/* Checkbox 3 */}
      <label className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <input
          type="checkbox"
          checked={values.calm}
          onChange={() => handleChange("calm")}
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
        />
        الهدوء
      </label>
    </div>
  );
};
