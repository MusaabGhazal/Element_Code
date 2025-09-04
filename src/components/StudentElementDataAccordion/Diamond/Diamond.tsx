import React, { useState } from "react";

interface RecordType {
  id: number;
  surah: string; // english value (translit)
  surahLabel?: string; // arabic label (optional, for convenience)
  fromAyah: number;
  toAyah: number;
  evaluation: number;
}

// Full list of 114 surahs: value = English (translit), label = Arabic
const surahs: { value: string; label: string }[] = [
  { value: "Al-Fatiha", label: "الفاتحة" },
  { value: "Al-Baqarah", label: "البقرة" },
  { value: "Aal-Imran", label: "آل عمران" },
  { value: "An-Nisa", label: "النساء" },
  { value: "Al-Maida", label: "المائدة" },
  { value: "Al-Anam", label: "الأنعام" },
  { value: "Al-Araf", label: "الأعراف" },
  { value: "Al-Anfal", label: "الأنفال" },
  { value: "At-Tawbah", label: "التوبة" },
  { value: "Yunus", label: "يونس" },
  { value: "Hud", label: "هود" },
  { value: "Yusuf", label: "يوسف" },
  { value: "Ar-Rad", label: "الرعد" },
  { value: "Ibrahim", label: "إبراهيم" },
  { value: "Al-Hijr", label: "الحجر" },
  { value: "An-Nahl", label: "النحل" },
  { value: "Al-Isra", label: "الإسراء" },
  { value: "Al-Kahf", label: "الكهف" },
  { value: "Maryam", label: "مريم" },
  { value: "Ta-Ha", label: "طه" },
  { value: "Al-Anbiya", label: "الأنبياء" },
  { value: "Al-Hajj", label: "الحج" },
  { value: "Al-Muminun", label: "المؤمنون" },
  { value: "An-Nur", label: "النور" },
  { value: "Al-Furqan", label: "الفرقان" },
  { value: "Ash-Shuara", label: "الشعراء" },
  { value: "An-Naml", label: "النمل" },
  { value: "Al-Qasas", label: "القصص" },
  { value: "Al-Ankabut", label: "العنكبوت" },
  { value: "Ar-Rum", label: "الروم" },
  { value: "Luqman", label: "لقمان" },
  { value: "As-Sajda", label: "السجدة" },
  { value: "Al-Ahzab", label: "الأحزاب" },
  { value: "Saba", label: "سبأ" },
  { value: "Fatir", label: "فاطر" },
  { value: "Ya-Sin", label: "يس" },
  { value: "As-Saffat", label: "الصافات" },
  { value: "Sad", label: "ص" },
  { value: "Az-Zumar", label: "الزمر" },
  { value: "Ghafir", label: "غافر" },
  { value: "Fussilat", label: "فصلت" },
  { value: "Ash-Shura", label: "الشورى" },
  { value: "Az-Zukhruf", label: "الزخرف" },
  { value: "Ad-Dukhan", label: "الدخان" },
  { value: "Al-Jathiya", label: "الجاثية" },
  { value: "Al-Ahqaf", label: "الأحقاف" },
  { value: "Muhammad", label: "محمد" },
  { value: "Al-Fath", label: "الفتح" },
  { value: "Al-Hujurat", label: "الحجرات" },
  { value: "Qaf", label: "ق" },
  { value: "Adh-Dhariyat", label: "الذاريات" },
  { value: "At-Tur", label: "الطور" },
  { value: "An-Najm", label: "النجم" },
  { value: "Al-Qamar", label: "القمر" },
  { value: "Ar-Rahman", label: "الرحمن" },
  { value: "Al-Waqia", label: "الواقعة" },
  { value: "Al-Hadid", label: "الحديد" },
  { value: "Al-Mujadila", label: "المجادلة" },
  { value: "Al-Hashr", label: "الحشر" },
  { value: "Al-Mumtahina", label: "الممتحنة" },
  { value: "As-Saff", label: "الصف" },
  { value: "Al-Jumuah", label: "الجمعة" },
  { value: "Al-Munafiqun", label: "المنافقون" },
  { value: "At-Taghabun", label: "التغابن" },
  { value: "At-Talaq", label: "الطلاق" },
  { value: "At-Tahrim", label: "التحريم" },
  { value: "Al-Mulk", label: "الملك" },
  { value: "Al-Qalam", label: "القلم" },
  { value: "Al-Haqqa", label: "الحاقة" },
  { value: "Al-Maarij", label: "المعارج" },
  { value: "Nuh", label: "نوح" },
  { value: "Al-Jinn", label: "الجن" },
  { value: "Al-Muzzammil", label: "المزمل" },
  { value: "Al-Muddaththir", label: "المدثر" },
  { value: "Al-Qiyama", label: "القيامة" },
  { value: "Al-Insan", label: "الإنسان" },
  { value: "Al-Mursalat", label: "المرسلات" },
  { value: "An-Naba", label: "النبأ" },
  { value: "An-Naziat", label: "النازعات" },
  { value: "Abasa", label: "عبس" },
  { value: "At-Takwir", label: "التكوير" },
  { value: "Al-Infitar", label: "الانفطار" },
  { value: "Al-Mutaffifin", label: "المطففين" },
  { value: "Al-Inshiqaq", label: "الانشقاق" },
  { value: "Al-Buruj", label: "البروج" },
  { value: "At-Tariq", label: "الطارق" },
  { value: "Al-Ala", label: "الأعلى" },
  { value: "Al-Ghashiyah", label: "الغاشية" },
  { value: "Al-Fajr", label: "الفجر" },
  { value: "Al-Balad", label: "البلد" },
  { value: "Ash-Shams", label: "الشمس" },
  { value: "Al-Layl", label: "الليل" },
  { value: "Ad-Duhaa", label: "الضحى" },
  { value: "Ash-Sharh", label: "الشرح" },
  { value: "At-Tin", label: "التين" },
  { value: "Al-Alaq", label: "العلق" },
  { value: "Al-Qadr", label: "القدر" },
  { value: "Al-Bayyinah", label: "البينة" },
  { value: "Az-Zalzalah", label: "الزلزلة" },
  { value: "Al-Adiyat", label: "العاديات" },
  { value: "Al-Qaria", label: "القارعة" },
  { value: "At-Takathur", label: "التكاثر" },
  { value: "Al-Asr", label: "العصر" },
  { value: "Al-Humazah", label: "الهمزة" },
  { value: "Al-Fil", label: "الفيل" },
  { value: "Quraish", label: "قريش" },
  { value: "Al-Maun", label: "الماعون" },
  { value: "Al-Kawthar", label: "الكوثر" },
  { value: "Al-Kafirun", label: "الكافرون" },
  { value: "An-Nasr", label: "النصر" },
  { value: "Al-Masad", label: "المسد" },
  { value: "Al-Ikhlas", label: "الإخلاص" },
  { value: "Al-Falaq", label: "الفلق" },
  { value: "An-Nas", label: "الناس" },
];

const evaluations = [5, 4.5, 4, 3.5, 3];

export const Diamond = () => {
  const [records, setRecords] = useState<RecordType[]>([]);

  const [newRecord, setNewRecord] = useState<RecordType>({
    id: Date.now(),
    surah: "",
    surahLabel: "",
    fromAyah: 1,
    toAyah: 1,
    evaluation: 5,
  });

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingValues, setEditingValues] = useState<Partial<RecordType>>({});

  const handleAdd = () => {
    if (!newRecord.surah) return alert("اختر السورة أولا");
    if (newRecord.fromAyah > newRecord.toAyah)
      return alert("تأكد أن 'من آية' أقل من أو يساوي 'إلى آية'");

    const rec: RecordType = {
      ...newRecord,
      id: Date.now(),
      surahLabel: surahs.find((s) => s.value === newRecord.surah)?.label ?? "",
    };
    setRecords((prev) => [...prev, rec]);
    setNewRecord({
      id: Date.now(),
      surah: "",
      surahLabel: "",
      fromAyah: 1,
      toAyah: 1,
      evaluation: 5,
    });
  };

  const handleDelete = (id: number) => {
    if (!confirm("هل أنت متأكد من حذف السجل؟")) return;
    setRecords((prev) => prev.filter((r) => r.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditingValues({});
    }
  };

  const startEdit = (r: RecordType) => {
    setEditingId(r.id);
    setEditingValues({
      surah: r.surah,
      surahLabel: r.surahLabel,
      fromAyah: r.fromAyah,
      toAyah: r.toAyah,
      evaluation: r.evaluation,
    });
  };

  const saveEdit = (id: number) => {
    if (!editingValues.surah) return alert("اختر السورة أولا");
    if (
      (editingValues.fromAyah ?? 0) > (editingValues.toAyah ?? 0)
    ) {
      return alert("تأكد أن 'من آية' أقل من أو يساوي 'إلى آية'");
    }

    setRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              surah: editingValues.surah as string,
              surahLabel:
                surahs.find((s) => s.value === editingValues.surah)?.label ??
                (editingValues.surahLabel as string),
              fromAyah: Number(editingValues.fromAyah),
              toAyah: Number(editingValues.toAyah),
              evaluation: Number(editingValues.evaluation),
            }
          : r
      )
    );
    setEditingId(null);
    setEditingValues({});
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingValues({});
  };

  return (
    <div className="p-4" dir="rtl">
      <div className="overflow-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full table-fixed text-sm">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr className="text-right">
              <th className="px-3 py-2 border-b dark:border-gray-700">السورة</th>
              <th className="px-3 py-2 border-b dark:border-gray-700">من آية</th>
              <th className="px-3 py-2 border-b dark:border-gray-700">إلى آية</th>
              <th className="px-3 py-2 border-b dark:border-gray-700">التقييم</th>
              <th className="px-3 py-2 border-b dark:border-gray-700">إجراءات</th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-900">
            {records.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-gray-500 dark:text-gray-400"
                >
                  لا توجد سجلات — أضف أول سجل في الأسفل
                </td>
              </tr>
            )}

            {records.map((rec) => (
              <tr
                key={rec.id}
                className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900 dark:even:bg-gray-800"
              >
                {/* Surah cell */}
                <td className="border px-3 py-2 align-middle text-right">
                  {editingId === rec.id ? (
                    <select
                      className="w-full p-2 border rounded text-right dark:bg-gray-800 dark:border-gray-700"
                      value={String(editingValues.surah ?? rec.surah)}
                      onChange={(e) =>
                        setEditingValues((prev) => ({
                          ...prev,
                          surah: e.target.value,
                        }))
                      }
                    >
                      <option value="">اختر السورة</option>
                      {surahs.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="text-sm text-gray-800 dark:text-gray-100">
                      {rec.surahLabel || surahs.find((s) => s.value === rec.surah)?.label || rec.surah}
                    </div>
                  )}
                </td>

                {/* fromAyah */}
                <td className="border px-3 py-2 align-middle text-center">
                  {editingId === rec.id ? (
                    <input
                      type="number"
                      className="w-20 p-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700"
                      value={String(editingValues.fromAyah ?? rec.fromAyah)}
                      onChange={(e) =>
                        setEditingValues((prev) => ({
                          ...prev,
                          fromAyah: Number(e.target.value),
                        }))
                      }
                    />
                  ) : (
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {rec.fromAyah}
                    </div>
                  )}
                </td>

                {/* toAyah */}
                <td className="border px-3 py-2 align-middle text-center">
                  {editingId === rec.id ? (
                    <input
                      type="number"
                      className="w-20 p-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700"
                      value={String(editingValues.toAyah ?? rec.toAyah)}
                      onChange={(e) =>
                        setEditingValues((prev) => ({
                          ...prev,
                          toAyah: Number(e.target.value),
                        }))
                      }
                    />
                  ) : (
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {rec.toAyah}
                    </div>
                  )}
                </td>

                {/* evaluation */}
                <td className="border px-3 py-2 align-middle text-center">
                  {editingId === rec.id ? (
                    <select
                      className="p-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700"
                      value={String(editingValues.evaluation ?? rec.evaluation)}
                      onChange={(e) =>
                        setEditingValues((prev) => ({
                          ...prev,
                          evaluation: Number(e.target.value),
                        }))
                      }
                    >
                      {evaluations.map((ev) => (
                        <option key={ev} value={ev}>
                          {ev}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="text-sm text-gray-700 dark:text-gray-200">
                      {rec.evaluation}
                    </div>
                  )}
                </td>

                {/* actions */}
                <td className="border px-3 py-2 align-middle text-center">
                  {editingId === rec.id ? (
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => saveEdit(rec.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        حفظ
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                      >
                        إلغاء
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => startEdit(rec)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        تعديل
                      </button>
                      <button
                        onClick={() => handleDelete(rec.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        حذف
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {/* Add new record row (inside table as last row) */}
            <tr className="bg-gray-50 dark:bg-gray-800">
              <td className="border px-3 py-2 align-middle text-right">
                <select
                  className="w-full p-2 border rounded text-right dark:bg-gray-800 dark:border-gray-700"
                  value={newRecord.surah}
                  onChange={(e) =>
                    setNewRecord((prev) => ({
                      ...prev,
                      surah: e.target.value,
                      surahLabel:
                        surahs.find((s) => s.value === e.target.value)?.label ??
                        "",
                    }))
                  }
                >
                  <option value="">اختر السورة</option>
                  {surahs.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </td>

              <td className="border px-3 py-2 align-middle text-center">
                <input
                  type="number"
                  className="w-20 p-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700"
                  value={newRecord.fromAyah}
                  onChange={(e) =>
                    setNewRecord((prev) => ({
                      ...prev,
                      fromAyah: Number(e.target.value || 0),
                    }))
                  }
                />
              </td>

              <td className="border px-3 py-2 align-middle text-center">
                <input
                  type="number"
                  className="w-20 p-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700"
                  value={newRecord.toAyah}
                  onChange={(e) =>
                    setNewRecord((prev) => ({
                      ...prev,
                      toAyah: Number(e.target.value || 0),
                    }))
                  }
                />
              </td>

              <td className="border px-3 py-2 align-middle text-center">
                <select
                  className="p-1 border rounded text-center dark:bg-gray-800 dark:border-gray-700"
                  value={String(newRecord.evaluation)}
                  onChange={(e) =>
                    setNewRecord((prev) => ({
                      ...prev,
                      evaluation: Number(e.target.value),
                    }))
                  }
                >
                  {evaluations.map((ev) => (
                    <option key={ev} value={ev}>
                      {ev}
                    </option>
                  ))}
                </select>
              </td>

              <td className="border px-3 py-2 align-middle text-center">
                <button
                  onClick={handleAdd}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  إضافة سجل
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* small helper */}
      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        يمكنك لاحقًا ربط الدوال (حذف، حفظ، إضافة) بالـ API الخاص بك لعمل
        persist على الخادم.
      </p>
    </div>
  );
}
