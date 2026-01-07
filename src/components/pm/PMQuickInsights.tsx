import { AlertTriangle, TrendingUp, Leaf, MapPin } from "lucide-react";

const stats = [
  { label: "Total Lahan", value: "45", icon: MapPin, color: "text-primary" },
  { label: "Lahan Sehat", value: "24", icon: Leaf, color: "text-success" },
  { label: "Lahan Sedang", value: "5", icon: TrendingUp, color: "text-warning" },
  { label: "Lahan Berisiko", value: "16", icon: AlertTriangle, color: "text-danger" },
];

export const PMQuickInsights = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="card-metric flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl bg-secondary ${stat.color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
