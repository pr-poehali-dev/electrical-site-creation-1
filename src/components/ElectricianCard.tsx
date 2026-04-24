import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import type { Electrician } from "@/data/electricians";

export default function ElectricianCard({ e }: { e: Electrician }) {
  return (
    <div className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center text-white font-bold text-lg">
            {e.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <span className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white ${e.available ? "bg-green-500" : "bg-gray-300"}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-navy leading-tight">{e.name}</h3>
              <div className="flex items-center gap-1 mt-0.5">
                <Icon name="MapPin" size={11} className="text-muted-foreground shrink-0" />
                <span className="text-xs text-muted-foreground truncate">{e.city}</span>
              </div>
            </div>
            {e.badge && (
              <span className="shrink-0 text-xs bg-gold/15 text-gold font-semibold px-2 py-0.5 rounded-full border border-gold/30">
                {e.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center gap-1">
              <Icon name="Star" size={12} className="text-gold" />
              <span className="text-sm font-bold text-navy">{e.rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({e.reviewsCount} отз.)</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{e.ordersCount} заказов</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {e.specializations.slice(0, 3).map(s => (
          <span key={s} className="text-xs bg-surface text-navy/70 px-2.5 py-1 rounded-full">{s}</span>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-surface rounded-lg">
        <div className="text-center">
          <div className="text-xs text-muted-foreground mb-0.5">Опыт</div>
          <div className="text-sm font-bold text-navy">{e.experience} лет</div>
        </div>
        <div className="text-center border-x border-border">
          <div className="text-xs text-muted-foreground mb-0.5">Отклик</div>
          <div className="text-sm font-bold text-navy">{e.responseTime}</div>
        </div>
        <div className="text-center">
          <div className="text-xs text-muted-foreground mb-0.5">От</div>
          <div className="text-sm font-bold text-navy">{e.pricePerHour} ₽/ч</div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {e.certified && (
          <div className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
            <Icon name="BadgeCheck" size={11} />
            Сертификат
          </div>
        )}
        {e.licensed && (
          <div className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            <Icon name="Shield" size={11} />
            Лицензия
          </div>
        )}
        <div className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded ml-auto ${e.available ? "text-green-600 bg-green-50" : "text-gray-500 bg-gray-100"}`}>
          <Icon name="Clock" size={11} />
          {e.available ? `Доступен ${e.availableFrom.toLowerCase()}` : `С ${e.availableFrom.toLowerCase()}`}
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <Link
          to={`/electrician/${e.id}`}
          className="flex-1 text-center border border-navy text-navy text-sm font-semibold py-2 rounded-lg hover:bg-navy hover:text-white transition-colors"
        >
          Профиль
        </Link>
        <Link
          to={`/order?master=${e.id}`}
          className="flex-1 text-center bg-navy text-white text-sm font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Заявка
        </Link>
      </div>
    </div>
  );
}
