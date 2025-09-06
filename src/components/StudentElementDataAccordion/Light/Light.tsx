import { useState } from "react";

interface LightProps {
  date: Date;
}

interface RowData {
  id: string;
  prayedAll: boolean;
  mosquePrayers: string;
  date: Date;
}

export const Light = ({ date }: LightProps) => {
  // Default number of rows
  const DEFAULT_ROWS = 3;

  // Generate rows with incremented dates
  const initialRows: RowData[] = Array.from({ length: DEFAULT_ROWS }, (_, i) => {
    const rowDate = new Date(date);
    rowDate.setDate(date.getDate() + i); // Increment day
    return {
      id: `${rowDate.getTime()}-${i}`, // Unique key
      prayedAll: false,
      mosquePrayers: "0",
      date: rowDate,
    };
  });

  const [rows, setRows] = useState<RowData[]>(initialRows);

  // Handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, prayedAll: !row.prayedAll } : row
      )
    );
  };

  // Handle select change
  const handleSelectChange = (id: string, value: string) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, mosquePrayers: value } : row
      )
    );
  };

  return (
    <div className="space-y-4" dir="rtl">
      {rows.map((row) => (
        <div
          key={row.id}
          className="flex items-center justify-start gap-12 p-3 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700"
        >
          {/* Date (non-editable) */}
          <div className="text-gray-900 dark:text-gray-100">
            {row.date.toLocaleDateString("ar-EG")}
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <input
              type="checkbox"
              checked={row.prayedAll}
              onChange={() => handleCheckboxChange(row.id)}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
            />
            صلى كل الصلوات
          </label>

          {/* Select */}
          <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <label>كم صلاة في المسجد</label>
            <select
              value={row.mosquePrayers}
              onChange={(e) => handleSelectChange(row.id, e.target.value)}
              className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};
