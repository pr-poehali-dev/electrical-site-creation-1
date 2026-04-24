import { useState } from "react";
import Icon from "@/components/ui/icon";

const MASTERS = [
  {
    id: 1,
    name: "Рин",
    rank: "6 разряд · Цундерэ",
    spec: "Прозвонка проводки",
    price: "1 500 ₽",
    emoji: "🔌",
    badge: "Строгая сенпай",
    img: "https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/44fd8bd7-c7c8-42ed-b4fd-49dc60a4e497.jpg",
    rating: 4.9,
    orders: 214,
    color: "from-pink-100 to-rose-100",
    border: "border-pink-200",
  },
  {
    id: 2,
    name: "Эйприл",
    rank: "Мастер-электрик · Пышечка",
    spec: "Замена щитка / автоматов",
    price: "от 3 000 ₽",
    emoji: "⚡",
    badge: "Веселая пышечка",
    img: "https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/4e1b3c0e-1dc1-4d39-bb81-11077ad6058b.jpg",
    rating: 5.0,
    orders: 389,
    color: "from-fuchsia-100 to-pink-100",
    border: "border-fuchsia-200",
    featured: true,
  },
  {
    id: 3,
    name: "Нэко-тян",
    rank: "Аниме-гик · Кошечка",
    spec: "Монтаж освещения",
    price: "от 1 200 ₽",
    emoji: "🐱",
    badge: "Строгая сенпай",
    img: "https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/666ad2ab-a0c8-42ef-b0ea-6a4f1b18c4bd.jpg",
    rating: 4.8,
    orders: 156,
    color: "from-rose-100 to-pink-50",
    border: "border-rose-200",
  },
];

const ADVANTAGES = [
  {
    emoji: "⚡",
    title: "Приедем как молния",
    desc: "Быстрее чем Мирай из «Атаки Титанов». Отклик за 30 минут.",
    mood: "Сжимает кулак",
  },
  {
    emoji: "🔧",
    title: "Не уйдём пока не перестанет щипаться",
    desc: "Гарантия на все работы. Перепроверим трижды.",
    mood: "Серьёзный взгляд",
  },
  {
    emoji: "💝",
    title: "Пышные формы — надёжный контакт",
    desc: "Каждый разъём подходит идеально. Никаких искр там где не надо.",
    mood: "Улыбается",
  },
  {
    emoji: "🛡️",
    title: "Сертификаты и лицензии",
    desc: "Все мастера проверены. Работаем по нормам ПУЭ и ПТЭЭП.",
    mood: "Большой палец вверх",
  },
];

const FAQS = [
  ["Вы реально существуете?", "Да! Все совпадения с реальными электриками не случайны — мы реальны ⚡"],
  ["Работаете в выходные?", "Работаем 24/7. Пышечки не спят — ваш ток не ждёт!"],
  ["Есть гарантия?", "Гарантия на все работы от 1 года. Плюс выезд мастера при проблемах — бесплатно."],
  ["Как оплатить?", "Наличными, картой или переводом. Только после принятия работы."],
  ["Могу выбрать конкретного мастера?", "Конечно! Выбирай в разделе «Команда» и нажимай на карточку."],
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-2 border-pink-200 rounded-3xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-pink-soft transition-colors font-bold"
        onClick={() => setOpen(!open)}
      >
        <span style={{ color: "hsl(330 30% 15%)" }}>{q}</span>
        <span className="text-hot-pink text-xl ml-4">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm font-semibold text-muted-foreground border-t border-pink-100 pt-4 bg-pink-soft">
          {a}
        </div>
      )}
    </div>
  );
}

const CALC_COMPLEXITY = [
  { value: 1, label: "🔦 Только лампочку вкрутить" },
  { value: 2, label: "🔌 Пара розеток и выключатель" },
  { value: 3, label: "🏠 Квартира под ключ" },
  { value: 4, label: "💀 Адский колхоз 80х" },
];

function Bubbles() {
  const items = [
    { size: 80, top: "10%", left: "5%", dur: 7, delay: 0 },
    { size: 50, top: "25%", right: "8%", dur: 5, delay: 1 },
    { size: 120, top: "60%", left: "2%", dur: 9, delay: 2 },
    { size: 40, top: "80%", right: "15%", dur: 6, delay: 0.5 },
    { size: 65, top: "40%", right: "3%", dur: 8, delay: 1.5 },
  ];
  return (
    <>
      {items.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: (b as { left?: string }).left,
            right: (b as { right?: string }).right,
            "--duration": `${b.dur}s`,
            "--delay": `${b.delay}s`,
          } as React.CSSProperties}
        />
      ))}
      {["⭐", "✨", "💛", "🌟", "⚡", "💕"].map((s, i) => (
        <div
          key={`spark-${i}`}
          className="spark"
          style={{
            top: `${15 + i * 13}%`,
            left: `${8 + i * 15}%`,
            "--duration": `${2.5 + i * 0.5}s`,
            "--delay": `${i * 0.4}s`,
            "--size": `${0.8 + i * 0.1}rem`,
          } as React.CSSProperties}
        >
          {s}
        </div>
      ))}
    </>
  );
}

type OrderForm = {
  name: string;
  phone: string;
  problem: string;
  measure: boolean;
  team: string;
  agree: boolean;
};

export default function Index() {
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: "", phone: "", problem: "", measure: false, team: "pышечка", agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<OrderForm>>({});
  const [area, setArea] = useState(50);
  const [complexity, setComplexity] = useState(2);
  const [selectedMaster, setSelectedMaster] = useState<typeof MASTERS[0] | null>(null);
  const [masterForm, setMasterForm] = useState({ fio: "", address: "", issue: "" });
  const [masterSent, setMasterSent] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [helpMsg, setHelpMsg] = useState("");
  const [helpChat, setHelpChat] = useState<string[]>([]);

  const calcPrice = () => {
    const base = area * 350;
    const mult = [1, 1, 1.8, 2.8, 4.5][complexity];
    return Math.round(base * mult / 1000) * 1000;
  };

  const validate = () => {
    const e: Partial<Record<keyof OrderForm, string>> = {};
    if (!orderForm.name.trim()) e.name = "Напиши своё имя";
    if (!orderForm.phone.trim()) e.phone = "Телефон обязателен";
    if (!orderForm.problem) e.problem = "Выбери что случилось";
    if (!orderForm.agree) e.agree = "Надо поставить галочку ʚ♡ɞ";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleHelpSend = () => {
    if (!helpMsg.trim()) return;
    setHelpChat(prev => [...prev, helpMsg]);
    setHelpMsg("");
    setTimeout(() => {
      setHelpChat(prev => [...prev, "Куколка, описывай проблему подробнее и я пришлю тебе мастера! ⚡💕"]);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background font-nunito overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-black text-xl font-montserrat" style={{ color: "hsl(328 100% 54%)" }}>
              ВольтГёрлз
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {[["#masters", "Команда"], ["#calc", "Калькулятор"], ["#order", "Вызвать"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-semibold text-muted-foreground hover:text-hot-pink transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <a href="#order" className="gradient-button shake-btn text-white font-black text-sm px-5 py-2.5 rounded-full glow-pink">
            ⚡ Заказать
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-24 pb-16 gradient-hero overflow-hidden min-h-[90vh] flex items-center">
        <Bubbles />

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-pink-300 text-pink-deep font-bold text-xs px-4 py-2 rounded-full mb-6 shadow-sm">
              ✨ Аниме-вайб гарантирован
            </div>

            <h1 className="font-black font-montserrat text-5xl sm:text-6xl leading-none mb-4" style={{ color: "hsl(330 30% 15%)" }}>
              Искрит?
              <br />
              <span style={{ color: "hsl(328 100% 54%)" }}>Мигает?</span>
              <br />
              <span className="text-4xl sm:text-5xl">— Вызови молнию!</span>
            </h1>

            <p className="text-muted-foreground text-lg font-semibold mb-8 leading-relaxed">
              Ремонт, монтаж, замеры.<br />
              Приедем <span className="text-hot-pink font-black">даже в грозу.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#order"
                className="gradient-button shake-btn glow-pink text-white font-black text-lg px-8 py-4 rounded-full text-center animate-pulse-pink"
              >
                ⚡ ЗАКАЗАТЬ ЭЛЕКТРИКА СЕЙЧАС ⚡
              </a>
              <a
                href="#masters"
                className="border-2 border-hot-pink text-hot-pink font-black text-lg px-8 py-4 rounded-full text-center hover:bg-pink-50 transition-colors"
              >
                Посмотреть команду
              </a>
            </div>

            <div className="mt-10 flex gap-8">
              {[["500+", "заказов"], ["4.9 ★", "рейтинг"], ["30 мин", "отклик"]].map(([v, l]) => (
                <div key={l} className="text-center">
                  <div className="font-black text-2xl font-montserrat" style={{ color: "hsl(328 100% 54%)" }}>{v}</div>
                  <div className="text-xs text-muted-foreground font-semibold">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-slide-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-5xl overflow-hidden shadow-2xl border-4 border-pink-200" style={{ boxShadow: "0 20px 60px rgba(255,20,147,0.25)" }}>
                <img
                  src="https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/4e1b3c0e-1dc1-4d39-bb81-11077ad6058b.jpg"
                  alt="Электрик Эйприл"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-lg p-3 border border-pink-200 animate-float">
                <div className="text-xs font-black text-hot-pink">⚡ ОНЛАЙН</div>
                <div className="text-xs text-muted-foreground">Эйприл готова!</div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-lg p-3 border border-pink-200">
                <div className="flex items-center gap-1">
                  {"⭐⭐⭐⭐⭐".split("").map((s, i) => <span key={i} className="text-sm">{s}</span>)}
                </div>
                <div className="text-xs font-semibold text-muted-foreground">389 заказов</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="white" fillOpacity="0.5" />
          </svg>
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-pink-mid px-4 py-1.5 rounded-full text-hot-pink font-black text-sm mb-3">
              ⚡ НАШИ МОЛНИИ
            </div>
            <h2 className="font-black font-montserrat text-4xl sm:text-5xl" style={{ color: "hsl(330 30% 15%)" }}>
              Команда мастеров
            </h2>
            <p className="text-muted-foreground mt-3 font-semibold">
              Каждая — профессионал. И у каждой — характер!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {MASTERS.map((m) => (
              <div
                key={m.id}
                className={`relative bg-gradient-to-br ${m.color} border-2 ${m.border} rounded-4xl p-6 card-hover cursor-pointer ${m.featured ? "ring-4 ring-pink-400 ring-offset-2" : ""}`}
                onClick={() => setSelectedMaster(m)}
              >
                {m.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-hot-pink text-white font-black text-xs px-4 py-1 rounded-full shadow">
                    ⭐ ТОП МАСТЕР
                  </div>
                )}

                <div className="relative mb-4">
                  <div className="w-full h-52 rounded-3xl overflow-hidden shadow-md">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 rounded-2xl px-2.5 py-1 text-xs font-black text-hot-pink">
                    {m.emoji} {m.price}
                  </div>
                </div>

                <h3 className="font-black font-montserrat text-2xl mb-0.5" style={{ color: "hsl(330 30% 15%)" }}>
                  {m.name}
                </h3>
                <p className="text-xs font-semibold text-muted-foreground mb-2">{m.rank}</p>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-bold text-hot-pink">★ {m.rating}</span>
                  <span className="text-xs text-muted-foreground">· {m.orders} заказов</span>
                </div>

                <div className="bg-white/70 rounded-2xl px-3 py-2 text-sm font-semibold text-foreground mb-4">
                  {m.spec}
                </div>

                <button
                  className={`w-full font-black py-3 rounded-2xl transition-all text-sm ${
                    m.featured
                      ? "gradient-button text-white glow-pink"
                      : "border-2 border-hot-pink text-hot-pink hover:bg-pink-50"
                  }`}
                  onClick={(e) => { e.stopPropagation(); setSelectedMaster(m); }}
                >
                  {m.featured ? "✨ Хочу такую!" : "⚡ Выбрать"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTER POPUP */}
      {selectedMaster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => { setSelectedMaster(null); setMasterSent(false); }}
        >
          <div
            className="bg-white rounded-4xl p-8 max-w-md w-full shadow-2xl animate-pop-in"
            onClick={e => e.stopPropagation()}
          >
            {masterSent ? (
              <div className="text-center py-6">
                <img src={selectedMaster.img} alt="" className="w-28 h-28 rounded-3xl object-cover mx-auto mb-4" />
                <div className="text-4xl mb-3">⚡💕</div>
                <h3 className="font-black font-montserrat text-2xl mb-2" style={{ color: "hsl(328 100% 54%)" }}>Фух, едем!</h3>
                <p className="text-muted-foreground font-semibold">{selectedMaster.name} уже заряжает тейзер. Жди звонка ʚ♡ɞ</p>
                <button className="mt-6 gradient-button text-white font-black px-8 py-3 rounded-2xl" onClick={() => { setSelectedMaster(null); setMasterSent(false); }}>
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <img src={selectedMaster.img} alt={selectedMaster.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h3 className="font-black font-montserrat text-xl" style={{ color: "hsl(330 30% 15%)" }}>{selectedMaster.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedMaster.rank}</p>
                  </div>
                  <button className="ml-auto text-muted-foreground hover:text-hot-pink" onClick={() => setSelectedMaster(null)}>
                    <Icon name="X" size={20} />
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    placeholder="ФИО (или ник в Telegram)"
                    value={masterForm.fio}
                    onChange={e => setMasterForm({ ...masterForm, fio: e.target.value })}
                    className="w-full border-2 border-pink-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-hot-pink bg-pink-soft"
                  />
                  <input
                    placeholder="Адрес вызова"
                    value={masterForm.address}
                    onChange={e => setMasterForm({ ...masterForm, address: e.target.value })}
                    className="w-full border-2 border-pink-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-hot-pink bg-pink-soft"
                  />
                  <select
                    value={masterForm.issue}
                    onChange={e => setMasterForm({ ...masterForm, issue: e.target.value })}
                    className="w-full border-2 border-pink-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-hot-pink bg-pink-soft"
                  >
                    <option value="">Тип проблемы...</option>
                    <option value="socket">🔌 Розетка</option>
                    <option value="panel">⚡ Щиток / автоматы</option>
                    <option value="short">☠️ Короткое замыкание</option>
                    <option value="light">💡 Освещение</option>
                    <option value="other">🤷 Другое</option>
                  </select>
                  <button
                    className="w-full gradient-button text-white font-black py-3.5 rounded-2xl glow-pink"
                    onClick={() => masterForm.fio && masterForm.address && setMasterSent(true)}
                  >
                    ⚡ Вызвать {selectedMaster.name}!
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ADVANTAGES */}
      <section className="py-20 gradient-hero">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/80 border border-pink-300 px-4 py-1.5 rounded-full text-hot-pink font-black text-sm mb-3">
              💝 ПОЧЕМУ МЫ
            </div>
            <h2 className="font-black font-montserrat text-4xl" style={{ color: "hsl(330 30% 15%)" }}>
              Наши преимущества
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-white/80 border-2 border-pink-200 rounded-4xl p-6 card-hover text-center">
                <div className="text-5xl mb-4 animate-wiggle" style={{ animationDelay: `${i * 0.3}s`, display: "inline-block" }}>
                  {a.emoji}
                </div>
                <h3 className="font-black font-montserrat text-base mb-2 leading-snug" style={{ color: "hsl(330 30% 15%)" }}>
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground font-semibold leading-relaxed">{a.desc}</p>
                <div className="mt-3 text-xs text-pink-deep font-bold bg-pink-mid px-3 py-1 rounded-full inline-block">
                  {a.mood}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-pink-mid px-4 py-1.5 rounded-full text-hot-pink font-black text-sm mb-3">
              🔢 КАЛЬКУЛЯТОР
            </div>
            <h2 className="font-black font-montserrat text-4xl" style={{ color: "hsl(330 30% 15%)" }}>
              Считаем стоимость
            </h2>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 rounded-4xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="font-black text-sm mb-3 block" style={{ color: "hsl(330 30% 15%)" }}>
                    Площадь помещения: <span className="text-hot-pink">{area} м²</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={300}
                    value={area}
                    onChange={e => setArea(Number(e.target.value))}
                    className="w-full accent-pink-500"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground font-semibold mt-1">
                    <span>10 м² (комната)</span>
                    <span>300 м² (офис)</span>
                  </div>
                </div>

                <div>
                  <label className="font-black text-sm mb-3 block" style={{ color: "hsl(330 30% 15%)" }}>
                    Сложность работ
                  </label>
                  <div className="space-y-2">
                    {CALC_COMPLEXITY.map((c) => (
                      <button
                        key={c.value}
                        onClick={() => setComplexity(c.value)}
                        className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold border-2 transition-all ${
                          complexity === c.value
                            ? "border-hot-pink bg-white text-hot-pink shadow-md"
                            : "border-pink-200 bg-white/60 text-foreground hover:border-pink-300"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/4e1b3c0e-1dc1-4d39-bb81-11077ad6058b.jpg"
                  alt="Эйприл считает"
                  className="w-48 h-48 rounded-3xl object-cover mx-auto mb-6 shadow-lg border-4 border-pink-200 animate-float"
                />
                <div className="bg-white rounded-3xl p-6 shadow-md border-2 border-pink-200">
                  <div className="text-sm text-muted-foreground font-semibold mb-2">Ориентировочная стоимость</div>
                  <div className="font-black font-montserrat text-4xl mb-1" style={{ color: "hsl(328 100% 54%)" }}>
                    {calcPrice().toLocaleString("ru")} ₽
                  </div>
                  <div className="text-xs text-muted-foreground mb-4">Точная цена — после осмотра</div>
                  <a href="#order" className="gradient-button text-white font-black px-6 py-3 rounded-2xl inline-block w-full glow-pink">
                    Рассчитано! Записаться ⚡
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-20 gradient-hero">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-white/80 border border-pink-300 px-4 py-1.5 rounded-full text-hot-pink font-black text-sm mb-3">
              ☎️ ВЫЗОВ
            </div>
            <h2 className="font-black font-montserrat text-4xl" style={{ color: "hsl(330 30% 15%)" }}>
              Вызвать наряд
            </h2>
            <p className="text-muted-foreground font-semibold mt-2">Заполни — и Эйприл уже едет!</p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-4xl p-10 text-center shadow-xl border-2 border-pink-300 animate-pop-in">
              <img
                src="https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/4e1b3c0e-1dc1-4d39-bb81-11077ad6058b.jpg"
                alt=""
                className="w-32 h-32 rounded-3xl object-cover mx-auto mb-4 border-4 border-pink-300 animate-float"
              />
              <div className="text-5xl mb-3">⚡💕</div>
              <h3 className="font-black font-montserrat text-3xl mb-2" style={{ color: "hsl(328 100% 54%)" }}>
                Ура!
              </h3>
              <p className="font-semibold text-foreground text-lg">
                Электричка уже заряжает тейзер! Жди звонка ʚ♡ɞ
              </p>
              <p className="text-sm text-muted-foreground mt-2">Номер заявки: #VG-{Math.floor(Math.random() * 9000) + 1000}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-4xl p-8 shadow-xl border-2 border-pink-200 space-y-5">
              {/* Name */}
              <div>
                <label className="font-black text-sm mb-2 block" style={{ color: "hsl(330 30% 15%)" }}>
                  Твоё имя (Telegram-ник разрешён) *
                </label>
                <input
                  type="text"
                  placeholder="Мисака Микото"
                  value={orderForm.name}
                  onChange={e => setOrderForm({ ...orderForm, name: e.target.value })}
                  className={`w-full border-2 rounded-2xl px-4 py-3.5 font-semibold focus:outline-none transition-colors bg-pink-soft ${errors.name ? "border-red-400" : "border-pink-200 focus:border-hot-pink"}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">⚡ {errors.name as string}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="font-black text-sm mb-2 block" style={{ color: "hsl(330 30% 15%)" }}>
                  Телефон *
                </label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={orderForm.phone}
                  onChange={e => setOrderForm({ ...orderForm, phone: e.target.value })}
                  className={`w-full border-2 rounded-2xl px-4 py-3.5 font-semibold focus:outline-none transition-colors bg-pink-soft ${errors.phone ? "border-red-400" : "border-pink-200 focus:border-hot-pink"}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">⚡ {errors.phone as string}</p>}
              </div>

              {/* Problem */}
              <div>
                <label className="font-black text-sm mb-2 block" style={{ color: "hsl(330 30% 15%)" }}>
                  Что случилось? *
                </label>
                <select
                  value={orderForm.problem}
                  onChange={e => setOrderForm({ ...orderForm, problem: e.target.value })}
                  className={`w-full border-2 rounded-2xl px-4 py-3.5 font-semibold focus:outline-none transition-colors bg-pink-soft ${errors.problem ? "border-red-400" : "border-pink-200 focus:border-hot-pink"}`}
                >
                  <option value="">Выбери проблему...</option>
                  <option value="no_power">☠️ Нет света</option>
                  <option value="socket_smoke">💔 Розетка дымит</option>
                  <option value="neighbor">😡 Сосед врезался</option>
                  <option value="panel">⚡ Проблема с щитком</option>
                  <option value="install">🔧 Монтаж с нуля</option>
                  <option value="other">🤷 Другое</option>
                </select>
                {errors.problem && <p className="text-red-500 text-xs mt-1 font-semibold">⚡ {errors.problem as string}</p>}
              </div>

              {/* Measure */}
              <div className="flex items-center justify-between bg-pink-soft border-2 border-pink-200 rounded-2xl px-4 py-3">
                <span className="font-bold text-sm" style={{ color: "hsl(330 30% 15%)" }}>Нужен замер?</span>
                <div className="flex gap-2">
                  {["Да", "Нет"].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setOrderForm({ ...orderForm, measure: opt === "Да" })}
                      className={`px-4 py-1.5 rounded-full font-bold text-sm transition-all ${
                        (opt === "Да" ? orderForm.measure : !orderForm.measure)
                          ? "bg-hot-pink text-white shadow"
                          : "bg-white border border-pink-300 text-muted-foreground"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div>
                <label className="font-black text-sm mb-2 block" style={{ color: "hsl(330 30% 15%)" }}>
                  Какая команда нравится?
                </label>
                <div className="flex gap-3">
                  {["Строгая сенпай", "Веселая пышечка"].map(opt => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setOrderForm({ ...orderForm, team: opt })}
                      className={`flex-1 py-3 rounded-2xl font-bold text-sm border-2 transition-all ${
                        orderForm.team === opt
                          ? "border-hot-pink bg-pink-soft text-hot-pink shadow"
                          : "border-pink-200 bg-white text-muted-foreground hover:border-pink-300"
                      }`}
                    >
                      {opt === "Строгая сенпай" ? "⚡ " : "💕 "}{opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Agree */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                      orderForm.agree ? "bg-hot-pink border-hot-pink" : "border-pink-300 bg-white"
                    }`}
                    onClick={() => setOrderForm({ ...orderForm, agree: !orderForm.agree })}
                  >
                    {orderForm.agree && <Icon name="Check" size={14} className="text-white" />}
                  </div>
                  <span className="font-semibold text-sm text-muted-foreground">
                    Не боюсь тока и аниме-девочек 💕 (обязательно)
                  </span>
                </label>
                {errors.agree && <p className="text-red-500 text-xs mt-1 font-semibold">⚡ {errors.agree as string}</p>}
              </div>

              <button
                type="submit"
                className="w-full gradient-button text-white font-black text-lg py-4 rounded-2xl glow-pink shake-btn"
              >
                ⚡ Вызвать молнию! ⚡
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-block bg-pink-mid px-4 py-1.5 rounded-full text-hot-pink font-black text-sm mb-3">
              ❓ ВОПРОСЫ
            </div>
            <h2 className="font-black font-montserrat text-4xl" style={{ color: "hsl(330 30% 15%)" }}>FAQ</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(([q, a], i) => (
              <FaqItem key={i} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="font-black text-white font-montserrat">ВольтГёрлз</span>
            </div>
            <p className="text-xs text-white/40 text-center">
              Все совпадения с реальными электриками случайны, но мы реальны ⚡<br />
              © 2026 ВольтГёрлз. Все права защищены.
            </p>
            <div className="flex gap-4 text-sm text-white/50">
              <span>📱 8-800-VOLT</span>
              <span>📬 hello@voltgirls.ru</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ORDER */}
      <a
        href="#order"
        className="fixed bottom-6 right-20 z-40 w-14 h-14 gradient-button rounded-full flex items-center justify-center shadow-xl glow-pink animate-pulse-pink text-2xl"
        title="Оставить заявку"
      >
        🔌
      </a>

      {/* HELP WIDGET */}
      <div className="fixed bottom-6 left-6 z-40">
        {helpOpen && (
          <div className="mb-3 bg-white rounded-3xl shadow-2xl border-2 border-pink-200 w-72 overflow-hidden animate-pop-in">
            <div className="bg-gradient-to-r from-pink-400 to-pink-600 p-4 flex items-center gap-3">
              <img
                src="https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/4e1b3c0e-1dc1-4d39-bb81-11077ad6058b.jpg"
                alt=""
                className="w-10 h-10 rounded-2xl object-cover border-2 border-white"
              />
              <div>
                <div className="font-black text-white text-sm">Эйприл</div>
                <div className="text-white/80 text-xs">Онлайн ⚡</div>
              </div>
            </div>
            <div className="p-4 max-h-48 overflow-y-auto space-y-2">
              <div className="bg-pink-50 rounded-2xl p-3 text-sm font-semibold text-foreground">
                Куколка, описывай проблему! 💕
              </div>
              {helpChat.map((msg, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-3 text-sm font-semibold max-w-[85%] ${
                    i % 2 === 0
                      ? "bg-hot-pink text-white ml-auto"
                      : "bg-pink-50 text-foreground"
                  }`}
                >
                  {msg}
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-pink-100 flex gap-2">
              <input
                type="text"
                placeholder="Напиши..."
                value={helpMsg}
                onChange={e => setHelpMsg(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleHelpSend()}
                className="flex-1 border-2 border-pink-200 rounded-2xl px-3 py-2 text-sm font-semibold focus:outline-none focus:border-hot-pink bg-pink-soft"
              />
              <button onClick={handleHelpSend} className="gradient-button text-white w-10 h-10 rounded-2xl flex items-center justify-center shrink-0">
                <Icon name="Send" size={14} />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => setHelpOpen(!helpOpen)}
          className="w-14 h-14 gradient-button rounded-full shadow-xl glow-pink flex items-center justify-center text-xl animate-float"
        >
          {helpOpen ? "✕" : "💬"}
        </button>
      </div>
    </div>
  );
}