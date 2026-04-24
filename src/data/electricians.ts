export type Electrician = {
  id: number;
  name: string;
  photo: string;
  city: string;
  region: string;
  specializations: string[];
  experience: number;
  rating: number;
  reviewsCount: number;
  ordersCount: number;
  responseTime: string;
  pricePerHour: number;
  certified: boolean;
  licensed: boolean;
  available: boolean;
  availableFrom: string;
  workHours: string;
  level: "household" | "commercial" | "industrial";
  services: { name: string; price: string }[];
  reviews: { author: string; text: string; rating: number; date: string }[];
  badge?: string;
  about: string;
};

export const ELECTRICIANS: Electrician[] = [
  {
    id: 1,
    name: "Алексей Петров",
    photo: "",
    city: "Москва",
    region: "Москва и МО",
    specializations: ["Электропроводка", "Электрощитки", "Розетки"],
    experience: 12,
    rating: 4.9,
    reviewsCount: 128,
    ordersCount: 347,
    responseTime: "< 30 мин",
    pricePerHour: 1500,
    certified: true,
    licensed: true,
    available: true,
    availableFrom: "Сегодня",
    workHours: "8:00–22:00",
    level: "commercial",
    badge: "Рекомендован",
    about: "Специализируюсь на полном цикле электромонтажных работ в квартирах и офисах. Работаю чисто, по нормам ПУЭ.",
    services: [
      { name: "Монтаж розетки/выключателя", price: "от 400 ₽" },
      { name: "Замена проводки (1 комната)", price: "от 8 000 ₽" },
      { name: "Установка щитка", price: "от 5 000 ₽" },
      { name: "Подключение люстры", price: "от 600 ₽" },
    ],
    reviews: [
      { author: "Ольга М.", text: "Сделал всё быстро и аккуратно, убрал за собой. Рекомендую!", rating: 5, date: "15 апреля 2026" },
      { author: "Владимир С.", text: "Профессионал своего дела, грамотно объяснил что и как. Обязательно обращусь снова.", rating: 5, date: "2 апреля 2026" },
    ],
  },
  {
    id: 2,
    name: "Дмитрий Сорокин",
    photo: "",
    city: "Санкт-Петербург",
    region: "Санкт-Петербург и ЛО",
    specializations: ["Освещение", "Слаботочные системы", "Умный дом"],
    experience: 8,
    rating: 4.8,
    reviewsCount: 94,
    ordersCount: 218,
    responseTime: "< 1 час",
    pricePerHour: 1200,
    certified: true,
    licensed: false,
    available: true,
    availableFrom: "Сегодня",
    workHours: "9:00–21:00",
    level: "household",
    about: "Специализируюсь на светодиодном освещении, умном доме и слаботочных системах. Делаю всё под ключ.",
    services: [
      { name: "Монтаж точечных светильников", price: "от 300 ₽/шт" },
      { name: "Установка Smart-системы", price: "от 12 000 ₽" },
      { name: "Монтаж видеодомофона", price: "от 3 500 ₽" },
    ],
    reviews: [
      { author: "Мария К.", text: "Установил умное освещение в квартире. Всё работает идеально, очень доволен!", rating: 5, date: "10 апреля 2026" },
    ],
  },
  {
    id: 3,
    name: "Игорь Васильев",
    photo: "",
    city: "Екатеринбург",
    region: "Свердловская область",
    specializations: ["Промышленная электрика", "3-фазные сети", "АВР"],
    experience: 15,
    rating: 4.7,
    reviewsCount: 211,
    ordersCount: 520,
    responseTime: "< 2 часа",
    pricePerHour: 2000,
    certified: true,
    licensed: true,
    available: false,
    availableFrom: "Завтра",
    workHours: "8:00–20:00",
    level: "industrial",
    badge: "Топ мастер",
    about: "15 лет работы на промышленных объектах. Монтаж и обслуживание высоковольтного оборудования, ТП, КРУ.",
    services: [
      { name: "Монтаж 3-фазного ввода", price: "от 15 000 ₽" },
      { name: "Установка АВР", price: "от 20 000 ₽" },
      { name: "Ревизия электрооборудования", price: "от 8 000 ₽" },
    ],
    reviews: [
      { author: "ООО ПромТех", text: "Выполнил монтаж распределительного щита на нашем производстве. Всё в срок и по нормам.", rating: 5, date: "3 апреля 2026" },
    ],
  },
  {
    id: 4,
    name: "Михаил Коваль",
    photo: "",
    city: "Краснодар",
    region: "Краснодарский край",
    specializations: ["Умный дом", "KNX/DALI", "Автоматика"],
    experience: 6,
    rating: 4.9,
    reviewsCount: 67,
    ordersCount: 142,
    responseTime: "< 1 час",
    pricePerHour: 1800,
    certified: true,
    licensed: false,
    available: true,
    availableFrom: "Сегодня",
    workHours: "10:00–22:00",
    level: "commercial",
    badge: "Рекомендован",
    about: "Специалист по системам умного дома KNX, DALI, Z-Wave. Интегрирую свет, климат, безопасность в единую систему.",
    services: [
      { name: "Проектирование умного дома", price: "от 25 000 ₽" },
      { name: "Монтаж KNX-системы", price: "от 50 000 ₽" },
      { name: "Настройка автоматики", price: "от 10 000 ₽" },
    ],
    reviews: [
      { author: "Семья Ивановых", text: "Михаил сделал умный дом в нашем коттедже. Теперь всё управляется с телефона!", rating: 5, date: "8 апреля 2026" },
    ],
  },
  {
    id: 5,
    name: "Сергей Новиков",
    photo: "",
    city: "Новосибирск",
    region: "Новосибирская область",
    specializations: ["Частные дома", "Дачи", "Ввод кабеля"],
    experience: 10,
    rating: 4.6,
    reviewsCount: 153,
    ordersCount: 389,
    responseTime: "< 3 часа",
    pricePerHour: 1300,
    certified: false,
    licensed: true,
    available: true,
    availableFrom: "Сегодня",
    workHours: "8:00–20:00",
    level: "household",
    about: "Работаю с частными домами и дачами. Ввод электричества от столба, монтаж проводки, заземление.",
    services: [
      { name: "Ввод электроэнергии в дом", price: "от 10 000 ₽" },
      { name: "Монтаж проводки (дом)", price: "от 40 000 ₽" },
      { name: "Установка заземления", price: "от 12 000 ₽" },
    ],
    reviews: [
      { author: "Андрей Б.", text: "Провёл электричество на дачу. Сделал всё аккуратно, цена честная.", rating: 4, date: "1 апреля 2026" },
    ],
  },
  {
    id: 6,
    name: "Антон Фёдоров",
    photo: "",
    city: "Казань",
    region: "Республика Татарстан",
    specializations: ["Коммерческие объекты", "Магазины", "Офисы"],
    experience: 9,
    rating: 4.8,
    reviewsCount: 89,
    ordersCount: 201,
    responseTime: "< 2 часа",
    pricePerHour: 1600,
    certified: true,
    licensed: true,
    available: true,
    availableFrom: "Сегодня",
    workHours: "9:00–21:00",
    level: "commercial",
    about: "Специализируюсь на коммерческих объектах: магазины, рестораны, офисы. Работаю быстро, не мешаю бизнесу.",
    services: [
      { name: "Монтаж освещения (офис)", price: "от 20 000 ₽" },
      { name: "Замена щита (коммерция)", price: "от 15 000 ₽" },
      { name: "Техническое обслуживание", price: "от 5 000 ₽/мес" },
    ],
    reviews: [
      { author: "ИП Смирнова", text: "Сделал проводку в новом магазине. Работал в выходные, чтобы не закрывать торговлю. Молодец!", rating: 5, date: "12 апреля 2026" },
    ],
  },
];

export const CITIES = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Нижний Новгород", "Челябинск", "Самара", "Уфа", "Ростов-на-Дону",
  "Краснодар", "Пермь", "Воронеж", "Волгоград", "Красноярск",
];

export const WORK_TYPES = [
  "Монтаж проводки",
  "Ремонт электрики",
  "Установка оборудования",
  "Проектирование",
  "Умный дом",
  "Промышленный монтаж",
  "Слаботочные системы",
  "Освещение",
];
