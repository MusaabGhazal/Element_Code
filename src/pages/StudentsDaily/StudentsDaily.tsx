import StudentElementDataAccordion from "../../components/StudentElementDataAccordion/StudentElementDataAccordion";
import type { Section, Student } from "../../types/types";

const students: Student[] = [
  {
    id: 1,
    name: "أحمد",
  },

  {
    id: 2,
    name: "أمير",
  },

  {
    id: 3,
    name: "خالد",
  },

  {
    id: 4,
    name: "خليل",
  },
];

const section: Section = {
  id: 1,
  teacherId: 1,
  semesterId: 1,
  fatraId: 1,
};

const StudentsDaily = () => {
  return (
    <div className="flex flex-col gap-2 p-6">
      students daily
      {students.map((student) => {
        return (
          <StudentElementDataAccordion student={student} section={section} />
        );
      })}
    </div>
  );
};

export default StudentsDaily;
