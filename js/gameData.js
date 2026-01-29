
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
    options: ["כן, תמיד", "לא, בשום אופן", "רק אם הוגשה בקשת הקלה מיוחדת", "רק אם מדובר בשימוש חורג"],
    correct: 1
  },
  3: { 
    title: "קו כחול", 
    type: "knowledge", 
    info: "תיחום שטח התכנית. זהו הקו המגדיר על אילו חלקות חלה התכנית החדשה.",
    more: "חשוב לוודא שכל הבעלים בתוך הקו הכחול קיבלו הודעה."
  },
  4: { 
    title: "גלגל המזל: עיכוב סטטוטורי", 
    type: "wheel", 
    info: "התגלה אתר ארכיאולוגי בשטח התכנית! רשות העתיקות עוצרת הכל.",
    more: "חזרו 3 משבצות אחורה לבדיקת חלופות."
  },
  5: { 
    title: "מדידה ומיפוי", 
    type: "quiz", 
    question: "מהו תוקפה המקסימלי של מפת מדידה לצורך הגשת תכנית לוועדה?",
    options: ["3 חודשים", "6 חודשים", "שנה אחת", "שנתיים"],
    correct: 1
  },
  6: { 
    title: "נסח טאבו", 
    type: "knowledge", 
    info: "הוכחת בעלות. ללא הוכחת זיקה לקרקע, לא ניתן לקדם את התכנית.",
    question: "איזה סוג נסח נדרש להגשת תכנית?",
    options: ["נסח רגיל", "נסח היסטורי", "נסח מרוכז", "נסח מאושר (עדכני ל-3 חודשים)"],
    correct: 3
  },
  7: { 
    title: "הנחיות מרחביות", 
    type: "quiz", 
    question: "מי קובע את ההנחיות המרחביות (עיצוב אדריכלי, חומרים וכדומה)?",
    options: ["הוועדה המחוזית", "הוועדה המקומית", "מתכנן המחוז", "המועצה הארצית"],
    correct: 1
  },
  8: { 
    title: "נספח תנועה", 
    type: "knowledge", 
    info: "בדיקת השפעת התכנית על עומסי התנועה באזור.",
    more: "תכנית גדולה ללא נספח תנועה מאושר לא תעלה לדיון."
  },
  9: { 
    title: "תיק מידע", 
    type: "quiz", 
    question: "לכמה זמן תקף תיק מידע להיתר/תכנית?",
    options: ["שנה אחת", "שנתיים", "6 חודשים", "ללא הגבלה"],
    correct: 1
  },
  10: { 
    title: "הגשה למערכת מקוונת", 
    type: "knowledge", 
    info: "הזנת התכנית למערכת 'רישוי זמין' או מבא\"ת.",
    more: "שימו לב: טעות אחת בפורמט הקובץ והתכנית תידחה אוטומטית."
  },
  // השלדים הבאים (11-49) ימולאו בהמשך...
  50: { 
    title: "מתן תוקף 🎉", 
    type: "knowledge", 
    info: "מזל טוב! התכנית פורסמה ברשומות, עברתם את כל ההתנגדויות והגעתם ליעד."
  }
};
