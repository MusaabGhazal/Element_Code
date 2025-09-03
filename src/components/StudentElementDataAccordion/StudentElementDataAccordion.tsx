import { useState } from "react";
import type { Section, Student } from "../../types/types";

const StudentElementDataAccordion = ({
  student,
  section,
}: {
  student: Student;
  section: Section;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border rounded-xl mb-2 shadow-sm">
      {/* Button Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-t-xl"
      >
        <span>{student.name}</span>
        <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Expandable Content */}
      {isOpen && (
        <div className="px-4 py-3 bg-white border-t space-y-3 rounded-b-xl">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Dummy Value 1</label>
            <input
              type="text"
              placeholder="Enter value..."
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Dummy Value 2</label>
            <input
              type="number"
              placeholder="Enter number..."
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <p className="text-xs text-gray-400">
            Section: {section.id}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentElementDataAccordion;
