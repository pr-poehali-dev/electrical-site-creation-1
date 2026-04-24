import { useState } from "react";
import Icon from "@/components/ui/icon";

type TIcon = Parameters<typeof Icon>[0]["name"];

const ELECTRICIANS = [
  {
    id: 1,
    name: "Алексей Петров",
    rating: 4.9,
    reviews: 128,
    experience: 12,
    specialization: "Электропроводка, щитки",
    price: "от 1 500 ₽/час",
    avatar: "АП",
    tags: ["Квартиры", "Офисы", "Щитки"],
    available: true,
  },
  {
    id: 2,
    name: "Дмитрий Сорокин",
    rating: 4.8,
    reviews: 94,
    experience: 8,
    specialization: "Розетки, освещение",
    price: "от 1 200 ₽/час",
    avatar: "ДС",
    tags: ["Освещение", "Розетки", "Ремонт"],
    available: true,
  },
  {
    id: 3,
    name: "Игорь Васильев",
    rating: 4.7,
    reviews: 211,
    experience: 15,
    specialization: "Промышленные объекты",
    price: "от 2 000 ₽/час",
    avatar: "ИВ",
    tags: ["Промышленность", "Сварка", "3-фазные"],
    available: false,
  },
  {
    id: 4,
    name: "Михаил Коваль",
    rating: 4.9,
    reviews: 67,
    experience: 6,
    specialization: "Умный дом, автоматика",
    price: "от 1 800 ₽/час",
    avatar: "МК",
    tags: ["Умный дом", "Автоматика", "KNX"],
    available: true,
  },
  {
    id: 5,
    name: "Сергей Новиков",
    rating: 4.6,
    reviews: 153,
    experience: 10,
    specialization: "Частные дома, дачи",
    price: "от 1 300 ₽/час",
    avatar: "СН",
    tags: ["Дома", "Дачи", "Ввод кабеля"],
    available: true,
  },
  {
    id: 6,
    name: "Антон Фёдоров",
    rating: 4.8,
    reviews: 89,
    experience: 9,
    specialization: "Коммерческая недвижимость",
    price: "от 1 600 ₽/час",
    avatar: "АФ",
    tags: ["Магазины", "Офисы", "Освещение"],
    available: true,
  },
];

const SERVICES = [
  { icon: "Zap", label: "Монтаж проводки", desc: "Новая проводка в квартире или доме" },
  { icon: "CircuitBoard", label: "Электрощиток", desc: "Установка и замена щитков" },
  { icon: "Lightbulb", label: "Освещение", desc: "Люстры, споты, светодиодные ленты" },
  { icon: "Plug", label: "Розетки и выключатели", desc: "Установка и замена" },
  { icon: "Home", label: "Умный дом", desc: "Автоматизация и управление" },
  { icon: "Wrench", label: "Ремонт электрики", desc: "Устранение любых неисправностей" },
];

const REVIEWS = [
  {
    name: "Ольга М.",
    text: "Алексей сделал всё быстро и аккуратно. Проложил новую проводку в двух комнатах за один день. Очень довольна результатом.",
    rating: 5,
    date: "15 апреля 2026",
    service: "Монтаж проводки",
  },
  {
    name: "Вадим К.",
    text: "Обратился по срочному звонку — перестали работать несколько розеток. Мастер приехал через 40 минут, нашёл причину и устранил за час.",
    rating: 5,
    date: "10 апреля 2026",
    service: "Ремонт электрики",
  },
  {
    name: "Светлана Р.",
    text: "Заменили старый щиток на современный с автоматами. Работа выполнена чисто, всё соответствует нормам. Рекомендую.",
    rating: 5,
    date: "3 апреля 2026",
    service: "Электрощиток",
  },
];

const FAQS = [
  {
    q: "Как быстро приедет электрик?",
    a: "В большинстве случаев мастер прибывает в течение 1-2 часов после оформления заявки. При срочном вызове — в течение 30-60 минут.",
  },
  {
    q: "Есть ли гарантия на работы?",
    a: "Все мастера предоставляют гарантию от 1 года на выполненные работы. При возникновении проблем — бесплатный выезд.",
  },
  {
    q: "Как формируется цена?",
    a: "Цена зависит от объёма работ. Мастер делает бесплатную оценку на месте. Стоимость фиксируется в договоре до начала работ.",
  },
  {
    q: "Работаете ли вы с юридическими лицами?",
    a: "Да, оформляем договор, закрывающие документы и чеки. Работаем с НДС и без.",
  },
  {
    q: "Нужно ли покупать материалы самому?",
    a: "Нет. Мастер может закупить все необходимые материалы по оптовым ценам и привезти на объект.",
  },
];

const STEPS = [
  { num: "01", title: "Оставьте заявку", desc: "Опишите задачу или выберите нужную услугу" },
  { num: "02", title: "Выберите мастера", desc: "Просмотрите профили, рейтинг и отзывы" },
  { num: "03", title: "Подтвердите визит", desc: "Согласуйте время — мастер приедет в срок" },
  { num: "04", title: "Примите работу", desc: "Оплатите после проверки результата" },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("Все");
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", comment: "" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filters = ["Все", "Квартиры", "Дома", "Офисы", "Умный дом"];

  const filtered = activeFilter === "Все"
    ? ELECTRICIANS
    : ELECTRICIANS.filter(e =>
        e.tags.some(t =>
          t.toLowerCase().includes(activeFilter.toLowerCase()) ||
          (activeFilter === "Дома" && (t.includes("Дач") || t.includes("дом")))
        )
      );

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-gold" />
            </div>
            <span className="font-bold text-navy text-lg tracking-tight">ЭлектроМастер</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {([["#services", "Услуги"], ["#masters", "Мастера"], ["#how", "Как работает"], ["#reviews", "Отзывы"], ["#faq", "FAQ"]] as [string, string][]).map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-muted-foreground hover:text-navy transition-colors font-medium">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              <Icon name="Phone" size={14} />
              Вызвать мастера
            </a>
            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-4">
            {([["#services", "Услуги"], ["#masters", "Мастера"], ["#how", "Как работает"], ["#reviews", "Отзывы"], ["#faq", "FAQ"], ["#contact", "Вызвать мастера"]] as [string, string][]).map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-medium text-navy" onClick={() => setMobileMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-24 pb-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/15">
                <Icon name="Star" size={12} className="text-gold" />
                Более 500 проверенных мастеров
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                Надёжный электрик <span className="text-gold">рядом</span> с вами
              </h1>

              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                Подберём проверенного специалиста для любой электрической задачи. Быстро, безопасно, с гарантией.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-base">
                  <Icon name="Zap" size={18} />
                  Вызвать мастера
                </a>
                <a href="#masters" className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-6 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base">
                  Выбрать мастера
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-8">
                {([["500+", "Мастеров"], ["15 000+", "Выполненных работ"], ["4.8", "Средний рейтинг"]] as [string, string][]).map(([val, lbl]) => (
                  <div key={lbl}>
                    <div className="text-2xl font-black text-white">{val}</div>
                    <div className="text-white/50 text-xs mt-0.5">{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/6b770b3c-e1b7-4a8f-9ae6-c6b8755253e6/files/ab19c9f7-0097-4d75-a7b1-261ca22fc0d7.jpg"
                  alt="Профессиональный электрик"
                  className="rounded-2xl object-cover w-full h-[420px] shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">Мастер едет</div>
                    <div className="text-xs text-muted-foreground">Прибудет через ~45 мин</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-surface border-y border-border py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {([
              ["ShieldCheck", "Все мастера проверены"],
              ["Clock", "Приедем за 1-2 часа"],
              ["FileText", "Договор и гарантия"],
              ["CreditCard", "Оплата после работы"],
              ["Star", "Рейтинг и отзывы"],
            ] as [string, string][]).map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name={icon as TIcon} size={16} className="text-navy" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Что мы делаем</p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy">Наши услуги</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              От простой замены розетки до полного монтажа электрики в новостройке
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div
                key={s.label}
                className="group bg-white border border-border rounded-xl p-6 hover:border-navy hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-4 group-hover:bg-navy transition-colors">
                  <Icon name={s.icon as TIcon} size={22} className="text-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-navy text-base mb-1">{s.label}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Просто и понятно</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Как это работает</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="font-mono text-4xl font-bold text-gold/40 mb-4">{step.num}</div>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-sm text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MASTERS */}
      <section id="masters" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Наша команда</p>
              <h2 className="text-3xl sm:text-4xl font-black text-navy">Мастера</h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                    activeFilter === f
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-navy border-border hover:border-navy"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(filtered.length > 0 ? filtered : ELECTRICIANS).map((e) => (
              <div key={e.id} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {e.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-navy truncate">{e.name}</h3>
                      <span className={`shrink-0 w-2 h-2 rounded-full ${e.available ? "bg-green-500" : "bg-gray-300"}`} />
                    </div>
                    <p className="text-sm text-muted-foreground">{e.specialization}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Icon name="Star" size={13} className="text-gold" />
                      <span className="text-sm font-semibold text-navy">{e.rating}</span>
                      <span className="text-xs text-muted-foreground">({e.reviews} отз.)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {e.tags.map(t => (
                    <span key={t} className="text-xs bg-surface text-navy/70 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Опыт {e.experience} лет</div>
                    <div className="text-sm font-bold text-navy">{e.price}</div>
                  </div>
                  <a
                    href="#contact"
                    className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Выбрать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Что говорят клиенты</p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy">Отзывы</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} className="text-gold" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-5">"{r.text}"</p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-navy text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.service}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-3">Вопросы и ответы</p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy">FAQ</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-surface transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-navy pr-4">{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-muted-foreground shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / FORM */}
      <section id="contact" className="py-20 bg-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">Оставьте заявку</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">Вызвать мастера</h2>
              <p className="text-white/70 mb-8">
                Опишите задачу — подберём подходящего специалиста и свяжемся с вами в течение 15 минут.
              </p>

              <div className="space-y-5">
                {([
                  ["Phone", "8 (800) 555-35-35", "Бесплатный звонок"],
                  ["Mail", "info@electro-master.ru", "Написать на почту"],
                  ["MapPin", "Москва и область", "Зона работы"],
                  ["Clock", "Пн–Вс, 8:00–22:00", "Режим работы"],
                ] as [string, string, string][]).map(([icon, val, hint]) => (
                  <div key={val} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon name={icon as TIcon} size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{val}</div>
                      <div className="text-white/50 text-xs">{hint}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">Заявка на вызов</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Услуга</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors bg-white"
                  >
                    <option value="">Выберите услугу...</option>
                    {SERVICES.map(s => (
                      <option key={s.label} value={s.label}>{s.label}</option>
                    ))}
                    <option value="Другое">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy mb-1.5 block">Комментарий</label>
                  <textarea
                    placeholder="Опишите задачу подробнее..."
                    rows={3}
                    value={formData.comment}
                    onChange={e => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-navy text-white font-bold py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gold rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={14} className="text-navy" />
              </div>
              <span className="font-bold text-white text-base">ЭлектроМастер</span>
            </div>

            <div className="flex gap-8">
              {([["#services", "Услуги"], ["#masters", "Мастера"], ["#faq", "FAQ"]] as [string, string][]).map(([href, label]) => (
                <a key={href} href={href} className="text-sm text-white/50 hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>

            <p className="text-xs text-white/30">© 2026 ЭлектроМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}