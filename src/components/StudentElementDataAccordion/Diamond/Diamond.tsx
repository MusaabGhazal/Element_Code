import { useContext } from "react";
import { SystemLanguage } from "../../../context/Context";

export const Diamond = () => {
  const { language } = useContext(SystemLanguage);

  return (
    <div className="space-y-4">
      <div>
        <label
          className={`block text-sm font-medium mb-1 ${
            language === "Arabic" && "text-end"
          }`}
        >
          السورة
        </label>
        <select
          className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400  dark:bg-gray-800 ${
            language === "Arabic" && "text-end"
          }`}
        >
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
        <label
          className={`block text-sm font-medium mb-1 ${
            language === "Arabic" && "text-end"
          }`}
        >
          من آية
        </label>
        <input
          type="number"
          placeholder="من"
          className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400  dark:bg-gray-800 ${
            language === "Arabic" && "text-end"
          }`}
        />
      </div>

      <div>
        <label
          className={`block text-sm font-medium mb-1 ${
            language === "Arabic" && "text-end"
          }`}
        >
          إلى آية
        </label>
        <input
          type="number"
          placeholder="إلى"
          className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400  dark:bg-gray-800 ${
            language === "Arabic" && "text-end"
          }`}
        />
      </div>

      <div>
        <label
          className={`block text-sm font-medium mb-1 ${
            language === "Arabic" && "text-end"
          }`}
        >
          التقييم
        </label>
        <select
          className={`w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 dark:bg-gray-800 ${
            language === "Arabic" && "text-end"
          }`}
        >
          <option value="">اختر التقييم</option>
          <option value="5">5</option>
          <option value="4.5">4.5</option>
          <option value="4">4</option>
          <option value="3.5">3.5</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
};
