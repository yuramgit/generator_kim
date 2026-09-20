// Mock data simulating FIPI bank task cards

export interface TaskCard {
  id: string;
  num: number;
  grp: string;
  type: number;
  text: string;
  audio?: string;
  page: number;
}

export interface ListeningPreview {
  task1: { id: string; text: string };
  task2: { id: string; text: string };
  tasks39: { q: string; opts: string[] }[];
  audio: {
    task1: string;
    task2: string;
    tasks39: string;
  };
}

export interface ReadingPreview {
  task10: { id: string; headings: string[]; texts: string[] };
  task11: { id: string; body: string[]; parts: string[] };
  tasks1218: { q: string; opts: string[] }[];
}

const LISTENING_TASK1_TEXT = `You will hear people giving their opinions about whether schoolchildren should learn a foreign language. For questions 1–7, you will hear 7 short extracts. For questions 1–7, circle the number (1–7) which matches the speaker's opinion.

1. Speaker A believes that learning a foreign language is essential for future career prospects and opens doors to international opportunities.

2. Speaker B argues that with modern translation technology, the need for learning foreign languages has significantly decreased.

3. Speaker C thinks that foreign language learning should start at primary school to develop cognitive abilities.

4. Speaker D suggests that learning a foreign language helps understand one's own culture better through comparison.

5. Speaker E believes that only students with a natural talent for languages should be required to study them.

6. Speaker F argues that the current method of teaching foreign languages in schools is outdated and ineffective.

7. Speaker G thinks that learning a foreign language is a waste of time when there are so many other important subjects.`;

const LISTENING_TASK2_TEXT = `You will hear a dialogue between two friends discussing their plans for the weekend. For questions 8–14, mark Yes, No, or Not stated based on what you hear.

8. Mark wants to go hiking this weekend.
9. Sarah has already booked a table at the new restaurant.
10. They both agree to meet at 10 o'clock on Saturday.
11. Mark's brother is coming to visit from another city.
12. Sarah prefers indoor activities when the weather is bad.
13. They decided to go to the cinema on Sunday evening.
14. Mark needs to buy tickets for the concert in advance.`;

const LISTENING_TASKS39 = [
  {
    q: "You will hear an interview with a British teenager about his hobbies. In questions 3–9, fill in the table with the information you hear. You have 20 seconds to read the table. Now listen to the interview.",
    opts: [
      "A) Name: Alex Thompson",
      "B) Age: 16 years old",
      "C) Main hobby: Photography",
      "D) Started hobby: 3 years ago",
      "E) Favourite subject: Art",
      "F) Wants to become: A professional photographer",
      "G) Equipment: A Canon DSLR camera",
      "H) Best photo: A sunset over the lake",
      "I) Advice for beginners: Practice every day and don't be afraid to experiment"
    ]
  }
];

const READING_TASK10_HEADINGS = [
  "1. The Origins of Tea",
  "2. Health Benefits Revealed",
  "3. Tea Around the World",
  "4. Modern Tea Culture",
  "5. Environmental Impact",
  "6. The Perfect Cup",
  "7. Tea and Social Life",
  "8. Future of Tea Industry"
];

const READING_TASK10_TEXTS = [
  "A) Tea has been consumed for thousands of years, with its origins traced back to ancient China. Legend has it that Emperor Shen Nung discovered tea when leaves from a wild tree blew into his pot of boiling water. From there, tea spread across Asia, eventually reaching Japan, India, and other countries where it became an integral part of daily life and cultural traditions.",
  "B) Scientific research has increasingly supported what tea drinkers have long believed — that tea offers numerous health benefits. Studies have shown that green tea contains powerful antioxidants called catechins that may help reduce the risk of heart disease and certain cancers. Black tea, on the other hand, has been linked to improved gut health and lower blood pressure.",
  "C) Different cultures have developed unique tea traditions over the centuries. In Japan, the tea ceremony (chanoyu) is a highly ritualised practice emphasising harmony, respect, purity, and tranquillity. In Britain, afternoon tea became a fashionable social event in the 1840s, while in Morocco, mint tea is served as a symbol of hospitality and friendship.",
  "D) Today, tea is the second most consumed beverage in the world after water. The global tea market continues to grow, with innovations such as cold brew teas, tea-infused cocktails, and specialty blends attracting younger consumers. Tea shops and cafes have become popular social gathering places in cities around the world.",
  "E) The environmental impact of tea production is an increasingly important concern. Large-scale tea farming can lead to deforestation, soil erosion, and water pollution from pesticides. However, many producers are now adopting sustainable practices, including organic farming methods, fair trade certifications, and carbon-neutral processing facilities.",
  "F) Brewing the perfect cup of tea requires attention to several factors: water temperature, steeping time, and tea-to-water ratio. Green tea should be brewed at 70–80°C for 2–3 minutes, while black tea requires water at 95–100°C for 3–5 minutes. Over-steeping can result in a bitter taste, while under-steeping produces a weak flavour.",
  "G) Throughout history, tea has played a significant role in social interactions. In 18th-century England, tea houses became centres of intellectual discussion and political debate. Today, sharing a cup of tea remains a universal gesture of welcome and friendship across cultures, from the elaborate tea ceremonies of East Asia to the simple act of offering a colleague a cuppa."
];

const READING_TASK11_BODY = [
  "Read the text below and fill in the gaps (A–G) with the correct parts of the sentences (1–7). There is one extra part you do not need to use.",
  "",
  "The History of the English Language",
  "",
  "English is one of the most widely spoken languages in the world, ___A___. Its history can be divided into three main periods: Old English, Middle English, and Modern English.",
  "",
  "Old English, ___B___, was brought to Britain by Germanic tribes in the 5th century. This early form of English would be almost unintelligible to modern speakers, ___C___.",
  "",
  "The Norman Conquest of 1066 marked the beginning of Middle English, ___D___. During this period, thousands of French words entered the English vocabulary, ___E___.",
  "",
  "Modern English emerged around 1500, ___F___. The Great Vowel Shift changed the pronunciation of long vowels, ___G___. The invention of the printing press helped standardise spelling and grammar."
];

const READING_TASK11_PARTS = [
  "1) which gave English a much larger vocabulary",
  "2) although it still shares some basic vocabulary with German",
  "3) which makes it a truly global means of communication",
  "4) which is why linguists study it so carefully",
  "5) when significant changes in pronunciation occurred",
  "6) which was spoken from approximately 450 to 1100 AD",
  "7) and this is the period we are most interested in"
];

const READING_TASKS1218 = [
  {
    q: "Read the text and answer questions 12–18. For each question, choose the correct answer (A, B, C, or D).",
    opts: []
  },
  {
    q: "12. According to the text, what was the main reason for the spread of English?",
    opts: [
      "A) The British Empire's colonial expansion",
      "B) The invention of the internet",
      "C) American cultural influence",
      "D) International trade agreements"
    ]
  },
  {
    q: "13. The word 'dominant' in paragraph 2 is closest in meaning to",
    opts: [
      "A) rare and unusual",
      "B) powerful and influential",
      "C) ancient and traditional",
      "D) simple and easy to learn"
    ]
  },
  {
    q: "14. What does the author suggest about English grammar?",
    opts: [
      "A) It is the most complex of all languages",
      "B) It has become simpler over time",
      "C) It is based entirely on Latin rules",
      "D) It will continue to change significantly"
    ]
  },
  {
    q: "15. According to paragraph 3, how many people speak English as a first language?",
    opts: [
      "A) About 200 million",
      "B) About 400 million",
      "C) About 600 million",
      "D) About 800 million"
    ]
  },
  {
    q: "16. The author mentions 'Singlish' as an example of",
    opts: [
      "A) a dying language",
      "B) an official language",
      "C) a local variety of English",
      "D) a constructed language"
    ]
  },
  {
    q: "17. What is the author's attitude towards the future of English?",
    opts: [
      "A) concerned about its decline",
      "B) optimistic about its continued growth",
      "C) neutral and objective",
      "D) pessimistic about its complexity"
    ]
  },
  {
    q: "18. The best title for this text would be",
    opts: [
      "A) 'Why English Will Disappear'",
      "B) 'English: A Global Language'",
      "C) 'The Difficulty of Learning English'",
      "D) 'English Grammar Rules'"
    ]
  }
];

function generateId(): string {
  return Math.random().toString(16).substring(2, 10).toUpperCase();
}

export function generateListeningPreview(): ListeningPreview {
  return {
    task1: {
      id: generateId(),
      text: LISTENING_TASK1_TEXT
    },
    task2: {
      id: generateId(),
      text: LISTENING_TASK2_TEXT
    },
    tasks39: LISTENING_TASKS39,
    audio: {
      task1: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      task2: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      tasks39: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
  };
}

export function generateReadingPreview(): ReadingPreview {
  return {
    task10: {
      id: generateId(),
      headings: READING_TASK10_HEADINGS,
      texts: READING_TASK10_TEXTS
    },
    task11: {
      id: generateId(),
      body: READING_TASK11_BODY,
      parts: READING_TASK11_PARTS
    },
    tasks1218: READING_TASKS1218
  };
}

export function generateLogMessages(step: string): string[] {
  switch (step) {
    case "browser":
      return [
        "[браузер] Запуск Chromium...",
        "[браузер] Открытие банка заданий ФИПИ...",
        "[браузер] Проект: 4B53A6CB75B0B5E1427E596EB4931A2A",
        "[браузер] ✓ Браузер готов. При необходимости войдите в систему."
      ];
    case "listening":
      return [
        "[аудирование] Фильтр: тема 1.2 (Аудирование)",
        "[аудирование] Нажатие «НАЙТИ» (1-е)...",
        "[аудирование] Нажатие «НАЙТИ» (2-е)...",
        "[аудирование] Сбор карточек со страниц 1–25...",
        "[аудирование] Найдено 67 карточек",
        "[аудирование] Классификация: тип 1 (соответствие) — 12 шт.",
        "[аудирование] Классификация: тип 2 (диалог) — 18 шт.",
        "[аудирование] Классификация: тип 3 (интервью) — 37 шт.",
        "[аудирование] Выбор кандидатов...",
        "[аудирование] ✓ Готово для проверки"
      ];
    case "reading":
      return [
        "[чтение] Фильтр: тема 1.3 (Чтение)",
        "[чтение] Нажатие «НАЙТИ» (1-е)...",
        "[чтение] Нажатие «НАЙТИ» (2-е)...",
        "[чтение] Сбор карточек со страниц 1–25...",
        "[чтение] Найдено 54 карточки",
        "[чтение] Классификация: тип 10 (заголовки) — 15 шт.",
        "[чтение] Классификация: тип 11 (пропуски) — 11 шт.",
        "[чтение] Классификация: тип 12 (вопросы) — 28 шт.",
        "[чтение] Выбор кандидатов...",
        "[чтение] ✓ Готово для проверки"
      ];
    case "build":
      return [
        "[сборка] Определение номера варианта...",
        "[сборка] Папки: Variant_1, Variant_2, Variant_3",
        "[сборка] Новый вариант: №4",
        "[сборка] Создание папки: ~/Downloads/Variant_4/",
        "[сборка] Скачивание audio_task1.mp3... ✓",
        "[сборка] Скачивание audio_task2.mp3... ✓",
        "[сборка] Скачивание audio_tasks3-9.mp3... ✓",
        "[сборка] Загрузка template.docx...",
        "[сборка] Заполнение плейсхолдеров {{task1}}–{{task14}}...",
        "[сборка] Заполнение слота задания 10 (заголовки + тексты)...",
        "[сборка] Заполнение слота задания 11 (текст + части)...",
        "[сборка] Заполнение слота заданий 12–18...",
        "[сборка] Сохранение KIMVariant_4.docx...",
        "[сборка] Запись в used_tasks.log: 18 ID",
        "[сборка] ✓ Вариант №4 готов!"
      ];
    default:
      return [];
  }
}
