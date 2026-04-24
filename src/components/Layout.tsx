import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { href: "/search", label: "Найти электрика" },
  { href: "/how-it-works", label: "Как работает" },
  { href: "/prices", label: "Цены" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/blog", label: "Советы" },
  { href: "/contacts", label: "Контакты" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-gold" />
            </div>
            <span className="font-bold text-navy text-lg tracking-tight">ЭлектроМастер</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === href
                    ? "text-navy"
                    : "text-muted-foreground hover:text-navy"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/order"
              className="hidden md:inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Icon name="Zap" size={14} />
              Оставить заявку
            </Link>
            <button className="lg:hidden p-2 text-navy" onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name={mobileOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-sm font-medium text-navy py-1"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/order"
              className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-4 py-2 rounded-lg w-fit mt-1"
              onClick={() => setMobileOpen(false)}
            >
              <Icon name="Zap" size={14} />
              Оставить заявку
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-foreground mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-gold rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={14} className="text-navy" />
                </div>
                <span className="font-bold text-white">ЭлектроМастер</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Платформа подбора проверенных электриков по всей России
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Сервис</h4>
              <div className="flex flex-col gap-2">
                {[["/ search", "Найти электрика"], ["/how-it-works", "Как работает"], ["/prices", "Цены и тарифы"]].map(([href, label]) => (
                  <Link key={href} to={href} className="text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Информация</h4>
              <div className="flex flex-col gap-2">
                {[["/reviews", "Отзывы"], ["/blog", "Советы"], ["/contacts", "Контакты"]].map(([href, label]) => (
                  <Link key={href} to={href} className="text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Контакты</h4>
              <div className="flex flex-col gap-2 text-sm text-white/50">
                <span>8 (800) 555-35-35</span>
                <span>info@electro-master.ru</span>
                <span>Пн–Вс, 8:00–22:00</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">© 2026 ЭлектроМастер. Все права защищены.</p>
            <div className="flex gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/60 transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
