import React, { useContext, useState } from "react";
import type { Section, Student } from "../../types/types";
import { SystemLanguage } from "../../context/Context";

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
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 rounded-l-lg dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "general"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
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
                      className={`flex w-[25%] hover:bg-blueGray-100 hover:dark:bg-gray-900 cursor-pointer h-[40px] px-4 py-[10px] gap-2 items-center border-r border-gray-300 rounded-r-lg dark:bg-gray-800 dark:border-gray-900 ${
                        currentSection === "iron"
                          ? "bg-blueGray-100 dark:bg-gray-900"
                          : "bg-white"
                      }
${language === "Arabic" && " flex-row-reverse"}`}
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
                      <div>
                        <label className="flex flex-col gap-2">
                          <span
                            className={`${language === "Arabic" && "text-end"}`}
                          >
                            الحضور
                          </span>
                          <select
                            className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                              language === "Arabic" && "text-end"
                            }`}
                          >
                            <option value="present">حاضر</option>
                            <option value="absent">غائب</option>
                            <option value="noIqra">لا يوجد دوام</option>
                          </select>
                        </label>
                      </div>
                    )}
                    {currentSection === "diamond" && (
                      <div className="space-y-4">
                        {/* السورة */}
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${language === "Arabic" && "text-end"}`}>
                            السورة
                          </label>
                          <select className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${language === "Arabic" && "text-end"}`}>
                            <option value="">اختر السورة</option>
                            <option value="Al-Fatiha">الفاتحة</option>
                            <option value="Al-Baqarah">البقرة</option>
                            <option value="Aal-Imran">آل عمران</option>
                            <option value="An-Nisa">النساء</option>
                            <option value="Al-Maidah">المائدة</option>
                            <option value="Al-Anam">الأنعام</option>
                            <option value="Al-Araf">الأعراف</option>
                            <option value="Al-Anfal">الأنفال</option>
                            <option value="At-Tawbah">التوبة</option>
                            <option value="Yunus">يونس</option>
                            <option value="Hud">هود</option>
                            <option value="Yusuf">يوسف</option>
                            <option value="Ar-Rad">الرعد</option>
                            <option value="Ibrahim">إبراهيم</option>
                            <option value="Al-Hijr">الحجر</option>
                            <option value="An-Nahl">النحل</option>
                            <option value="Al-Isra">الإسراء</option>
                            <option value="Al-Kahf">الكهف</option>
                            <option value="Maryam">مريم</option>
                            <option value="Ta-Ha">طه</option>
                            <option value="Al-Anbiya">الأنبياء</option>
                            <option value="Al-Hajj">الحج</option>
                            <option value="Al-Muminun">المؤمنون</option>
                            <option value="An-Nur">النور</option>
                            <option value="Al-Furqan">الفرقان</option>
                            <option value="Ash-Shuara">الشعراء</option>
                            <option value="An-Naml">النمل</option>
                            <option value="Al-Qasas">القصص</option>
                            <option value="Al-Ankabut">العنكبوت</option>
                            <option value="Ar-Rum">الروم</option>
                            <option value="Luqman">لقمان</option>
                            <option value="As-Sajda">السجدة</option>
                            <option value="Al-Ahzab">الأحزاب</option>
                            <option value="Saba">سبأ</option>
                            <option value="Fatir">فاطر</option>
                            <option value="Ya-Sin">يس</option>
                            <option value="As-Saffat">الصافات</option>
                            <option value="Sad">ص</option>
                            <option value="Az-Zumar">الزمر</option>
                            <option value="Ghafir">غافر</option>
                            <option value="Fussilat">فصلت</option>
                            <option value="Ash-Shura">الشورى</option>
                            <option value="Az-Zukhruf">الزخرف</option>
                            <option value="Ad-Dukhan">الدخان</option>
                            <option value="Al-Jathiya">الجاثية</option>
                            <option value="Al-Ahqaf">الأحقاف</option>
                            <option value="Muhammad">محمد</option>
                            <option value="Al-Fath">الفتح</option>
                            <option value="Al-Hujurat">الحجرات</option>
                            <option value="Qaf">ق</option>
                            <option value="Adh-Dhariyat">الذاريات</option>
                            <option value="At-Tur">الطور</option>
                            <option value="An-Najm">النجم</option>
                            <option value="Al-Qamar">القمر</option>
                            <option value="Ar-Rahman">الرحمن</option>
                            <option value="Al-Waqia">الواقعة</option>
                            <option value="Al-Hadid">الحديد</option>
                            <option value="Al-Mujadila">المجادلة</option>
                            <option value="Al-Hashr">الحشر</option>
                            <option value="Al-Mumtahina">الممتحنة</option>
                            <option value="As-Saff">الصف</option>
                            <option value="Al-Jumua">الجمعة</option>
                            <option value="Al-Munafiqun">المنافقون</option>
                            <option value="At-Taghabun">التغابن</option>
                            <option value="At-Talaq">الطلاق</option>
                            <option value="At-Tahrim">التحريم</option>
                            <option value="Al-Mulk">الملك</option>
                            <option value="Al-Qalam">القلم</option>
                            <option value="Al-Haqqa">الحاقة</option>
                            <option value="Al-Maarij">المعارج</option>
                            <option value="Nuh">نوح</option>
                            <option value="Al-Jinn">الجن</option>
                            <option value="Al-Muzzammil">المزمل</option>
                            <option value="Al-Muddaththir">المدثر</option>
                            <option value="Al-Qiyama">القيامة</option>
                            <option value="Al-Insan">الإنسان</option>
                            <option value="Al-Mursalat">المرسلات</option>
                            <option value="An-Naba">النبأ</option>
                            <option value="An-Naziat">النازعات</option>
                            <option value="Abasa">عبس</option>
                            <option value="At-Takwir">التكوير</option>
                            <option value="Al-Infitar">الانفطار</option>
                            <option value="Al-Mutaffifin">المطففين</option>
                            <option value="Al-Inshiqaq">الانشقاق</option>
                            <option value="Al-Buruj">البروج</option>
                            <option value="At-Tariq">الطارق</option>
                            <option value="Al-Ala">الأعلى</option>
                            <option value="Al-Ghashiya">الغاشية</option>
                            <option value="Al-Fajr">الفجر</option>
                            <option value="Al-Balad">البلد</option>
                            <option value="Ash-Shams">الشمس</option>
                            <option value="Al-Layl">الليل</option>
                            <option value="Ad-Duhaa">الضحى</option>
                            <option value="Ash-Sharh">الشرح</option>
                            <option value="At-Tin">التين</option>
                            <option value="Al-Alaq">العلق</option>
                            <option value="Al-Qadr">القدر</option>
                            <option value="Al-Bayyina">البينة</option>
                            <option value="Az-Zalzala">الزلزلة</option>
                            <option value="Al-Adiyat">العاديات</option>
                            <option value="Al-Qaria">القارعة</option>
                            <option value="At-Takathur">التكاثر</option>
                            <option value="Al-Asr">العصر</option>
                            <option value="Al-Humazah">الهمزة</option>
                            <option value="Al-Fil">الفيل</option>
                            <option value="Quraish">قريش</option>
                            <option value="Al-Maun">الماعون</option>
                            <option value="Al-Kawthar">الكوثر</option>
                            <option value="Al-Kafirun">الكافرون</option>
                            <option value="An-Nasr">النصر</option>
                            <option value="Al-Masad">المسد</option>
                            <option value="Al-Ikhlas">الإخلاص</option>
                            <option value="Al-Falaq">الفلق</option>
                            <option value="An-Nas">الناس</option>
                          </select>
                        </div>
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${language === "Arabic" && "text-end"}`}>
                            من آية
                          </label>
                          <input
                            type="number"
                            placeholder="من"
                            className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${language === "Arabic" && "text-end"}`}
                          />
                        </div>

                        {/* إلى آية */}
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${language === "Arabic" && "text-end"}`}>
                            إلى آية
                          </label>
                          <input
                            type="number"
                            placeholder="إلى"
                            className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${language === "Arabic" && "text-end"}`}
                          />
                        </div>

                        {/* التقييم */}
                        <div>
                          <label className={`block text-sm font-medium mb-1 ${language === "Arabic" && "text-end"}`}>
                            التقييم
                          </label>
                          <select className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${language === "Arabic" && "text-end"}`}>
                            <option value="">اختر التقييم</option>
                            <option value="5">5</option>
                            <option value="4.5">4.5</option>
                            <option value="4">4</option>
                            <option value="3.5">3.5</option>
                            <option value="3">3</option>
                          </select>
                        </div>
                      </div>
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
