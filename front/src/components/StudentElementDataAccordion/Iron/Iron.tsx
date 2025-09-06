import { useState } from "react";

export const Iron = () => {
  const [values, setValues] = useState({
    homework: "",
    recitation: "",
  });

  const handleChange = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="flex items-center justify-start gap-10 p-3 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
      dir="rtl"
    >
      {/* واجب المركز */}
      <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <label>واجب المركز</label>
        <select
          value={values.homework}
          onChange={(e) => handleChange("homework", e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="" disabled>
            اختر
          </option>
          <option value="تم">تم</option>
          <option value="لم يتم">لم يتم</option>
          <option value="لم نأخذ">لم نأخذ</option>
        </select>
      </div>

      {/* تقييم التلاوة */}
      <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <label>تقييم التلاوة</label>
        <select
          value={values.recitation}
          onChange={(e) => handleChange("recitation", e.target.value)}
          className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="" disabled>
            اختر
          </option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="لم نأخذ">لم نأخذ</option>
        </select>
      </div>
    </div>
  );
};
