const gameData = {
  1: { 
    title: "יוזמה רעיונית", 
    type: "knowledge", 
    info: "הולדת רעיון תכנוני. בשלב זה בוחנים את הצורך הציבורי או הכלכלי בשינוי ייעוד קרקע.",
    question: "מי מוסמך להגיש תכנית מתאר ארצית (תמ\"א)?",
    options: ["הממשלה", "הוועדה המחוזית", "אדריכל פרטי", "מהנדס העיר"],
    correct: 0
  },
  2: { 
    title: "בדיקת היתכנות", 
    type: "quiz", 
    question: "האם תכנית מפורטת יכולה לסתור הנחיות של תכנית מתאר מחוזית?",
    options: ["כן", "לא", "רק באישור שר", "רק באישור ועדה מקומית"],
    correct: 1
  },
  3: { 
    title: "מדידה ומיפוי", 
    type: "quiz", 
    question: "מהו תוקפה המקסימלי של מפת מדידה לצורך הגשת תכנית לוועדה?",
    options: ["3 חודשים", "6 חודשים", "שנה אחת", "שנתיים"],
    correct: 1
  },
  4: { 
    title: "גלגל המזל: ממצא ארכיאולוגי", 
    type: "wheel", 
    info: "התגלו שרידים של גת ביזנטית בשטח! רשות העתיקות דורשת חפירת הצלה.",
    more: "העיכוב משמעותי - חזור 3 משבצות אחורה."
  },
  5: { 
    title: "תיק מידע", 
    type: "quiz", 
    question: "לכמה זמן תקף תיק מידע לתכנון מרגע הפקתו?",
    options: ["שנה אחת", "שנתיים", "6 חודשים", "ללא הגבלה"],
    correct: 1
  },
  6: { 
    title: "בדיקת זיקה לקרקע", 
    type: "knowledge", 
    info: "הוכחת בעלות (טאבו/רמ\"י). ללא הוכחה שאתה 'בעל עניין בקרקע', הוועדה לא תקבל את התכנית.",
    question: "איזה סוג נסח טאבו הכי רלוונטי לבדיקת גבולות תכנית?",
    options: ["נסח רגיל", "נסח היסטורי", "נסח מרוכז", "נסח חלקי"],
    correct: 2
  },
  7: { 
    title: "נוהל מבא\"ת", 
    type: "quiz", 
    question: "מה פירוש ראשי התיבות מבא\"ת?",
    options: ["מבנה אחיד לתכניות", "מבנה ארגוני לתכנון", "מרכז בדיקת תכניות", "מערכת ביצוע ארצית"],
    correct: 0
  },
  8: { 
    title: "הנחיות מרחביות", 
    type: "knowledge", 
    info: "הוועדה המקומית קובעת את אופי הבינוי, חומרי הגמר והעיצוב האדריכלי באזור.",
    more: "סטייה מהנחיות אלו דורשת אישור מיוחד."
  },
  9: { 
    title: "נספח תנועה", 
    type: "quiz", 
    question: "מי הגורם המאשר נסח תנועה בתכנית בסמכות מחוזית?",
    options: ["מהנדס העיר", "משרד התחבורה/יועץ תנועה מחוזי", "משטרת ישראל", "אדריכל התכנית"],
    correct: 1
  },
  10: { 
    title: "הגשה לוועדה", 
    type: "knowledge", 
    info: "הזנת התכנית למערכת המקוונת. זהו רגע ה'אל-חזור' הדיגיטלי.",
    more: "התכנית ננעלת לבדיקת תנאי סף."
  },
  11: { 
    title: "בדיקת תנאי סף", 
    type: "quiz", 
    question: "כמה ימי עבודה מוקצבים לוועדה לבדיקת שלמות התכנית (תנאי סף)?",
    options: ["7 ימים", "14 ימים", "30 ימים", "60 ימים"],
    correct: 1
  },
  12: { 
    title: "דיון בוועדה מקומית", 
    type: "knowledge", 
    info: "הוועדה המקומית דנה בתכנית ומחליטה אם להמליץ עליה לוועדה המחוזית.",
    more: "המלצה שלילית עלולה לעכב את התהליך בחודשים רבים."
  },
  13: { 
    title: "גלגל המזל: התנגדות ירוקים", 
    type: "wheel", 
    info: "החברה להגנת הטבע טוענת שהתכנית פוגעת במסדרון אקולוגי.",
    more: "עליך להכין נספח סביבתי - חכה תור אחד."
  },
  14: { 
    title: "הערות מתכנן המחוז", 
    type: "knowledge", 
    info: "לשכת התכנון המחוזית בוחנת את התכנית לפני העלאתה לדיון במחוזית.",
    more: "זהו השלב שבו מתבצעים התיקונים הטכניים החשובים ביותר."
  },
  15: { 
    title: "סקר עצים", 
    type: "quiz", 
    question: "מי הגורם המוסמך לאשר כריתה או העתקה של עץ בוגר בתכנית?",
    options: ["אדריכל הנוף", "פקיד היערות", "מהנדס העיר", "מנכ\"ל המועצה"],
    correct: 1
  },
  16: { 
    title: "שימור מבנים", 
    type: "knowledge", 
    info: "בדיקה האם קיימים מבנים לשימור בשטח התכנית לפי תכנית השימור העירונית.",
    more: "מבנה לשימור מחייב הוראות מיוחדות בלוח הזמנים."
  },
  17: { 
    title: "הפקעות לצורכי ציבור", 
    type: "quiz", 
    question: "מהו אחוז השטח המקסימלי שניתן להפקיע לצורכי ציבור ללא תשלום פיצויים?",
    options: ["20%", "25%", "40%", "50%"],
    correct: 2
  },
  18: { 
    title: "דיון להפקדה במחוזית", 
    type: "knowledge", 
    info: "רגע האמת! הוועדה המחוזית דנה בתכנית ומחליטה האם להפקידה להתנגדויות.",
    more: "בדרך כלל ההפקדה מותנית בתיקונים."
  },
  19: { 
    title: "מילוי תנאים להפקדה", 
    type: "quiz", 
    question: "תוך כמה זמן על היזם למלא את תנאי ההפקדה לפני שהתכנית תתבטל?",
    options: ["חודש", "3 חודשים", "חצי שנה", "שנה"],
    correct: 2
  },
  20: { 
    title: "כתב שיפוי", 
    type: "knowledge", 
    info: "היזם חותם לוועדה המקומית על התחייבות לשיפוי בגין תביעות לפי סעיף 197.",
    more: "ללא כתב שיפוי חתום, התכנית לא תפורסם להפקדה."
  },
  // השלדים הבאים (21-49) ימולאו בהמשך...
  50: { 
    title: "מתן תוקף 🎉", 
    type: "knowledge", 
    info: "מזל טוב! התכנית פורסמה ברשומות, עברתם את כל ההתנגדויות והגעתם ליעד."
  }
};
