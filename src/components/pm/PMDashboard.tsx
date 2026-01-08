import { 
  Map, 
  BarChart3, 
  Brain, 
  Sparkles, 
  TrendingUp, 
  AlertTriangle, 
  Leaf, 
  MapPin,
  ArrowRight,
  CheckCircle2,
  Clock
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface PMDashboardProps {
  onNavigate: (page: "peta-ndvi" | "analisis-korelasi" | "ai-dss" | "generator-rekomendasi") => void;
}

export const PMDashboard = ({ onNavigate }: PMDashboardProps) => {
  // Summary stats
  const lahanStats = [
    { label: "Total Lahan", value: "45", icon: MapPin, color: "text-primary", bg: "bg-primary/10" },
    { label: "Lahan Sehat", value: "24", icon: Leaf, color: "text-success", bg: "bg-success/10" },
    { label: "Lahan Sedang", value: "5", icon: TrendingUp, color: "text-warning", bg: "bg-warning/10" },
    { label: "Lahan Berisiko", value: "16", icon: AlertTriangle, color: "text-danger", bg: "bg-danger/10" },
  ];

  // Menu highlights
  const menuHighlights = [
    {
      id: "peta-ndvi" as const,
      title: "Peta & NDVI",
      icon: Map,
      color: "from-emerald-500 to-teal-600",
      summary: "Visualisasi kesehatan tanaman",
      metrics: [
        { label: "Rata-rata NDVI", value: "0.72" },
        { label: "Area Kritis", value: "8 ha" },
      ],
      alerts: 3,
    },
    {
      id: "analisis-korelasi" as const,
      title: "Analisis Korelasi",
      icon: BarChart3,
      color: "from-blue-500 to-indigo-600",
      summary: "Hubungan antar variabel produksi",
      metrics: [
        { label: "Korelasi Tertinggi", value: "0.87" },
        { label: "Variabel Aktif", value: "12" },
      ],
      alerts: 1,
    },
    {
      id: "ai-dss" as const,
      title: "AI & DSS",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      summary: "Prediksi berbasis kecerdasan buatan",
      metrics: [
        { label: "Prediksi Aktif", value: "5" },
        { label: "Akurasi Model", value: "89%" },
      ],
      alerts: 2,
    },
    {
      id: "generator-rekomendasi" as const,
      title: "Generator Rekomendasi",
      icon: Sparkles,
      color: "from-amber-500 to-orange-600",
      summary: "Rekomendasi otomatis untuk SM",
      metrics: [
        { label: "Rekomendasi Baru", value: "8" },
        { label: "Terkirim ke SM", value: "15" },
      ],
      alerts: 4,
    },
  ];

  // Recent activities
  const recentActivities = [
    { type: "alert", message: "Lahan B-12 menunjukkan penurunan NDVI signifikan", time: "10 menit lalu", urgent: true },
    { type: "recommendation", message: "Rekomendasi pemupukan dikirim ke SM Cluster Utara", time: "1 jam lalu", urgent: false },
    { type: "prediction", message: "Prediksi risiko kekeringan untuk minggu depan tersedia", time: "2 jam lalu", urgent: true },
    { type: "correlation", message: "Korelasi baru ditemukan: NDVI vs Kelembaban Tanah", time: "3 jam lalu", urgent: false },
  ];

  // Pending tasks
  const pendingTasks = [
    { title: "Review rekomendasi pemupukan Cluster Selatan", status: "pending", priority: "high" },
    { title: "Validasi prediksi AI untuk area berisiko", status: "in-progress", priority: "medium" },
    { title: "Kirim laporan mingguan ke GM", status: "pending", priority: "high" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="header-gradient rounded-2xl p-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-primary-foreground mb-2">
          Dashboard Project Manager
        </h2>
        <p className="text-primary-foreground/80 text-sm">
          Ringkasan insight dan pelaporan dari semua modul
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        {lahanStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-4 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Module Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        {menuHighlights.map((menu) => {
          const Icon = menu.icon;
          return (
            <Card 
              key={menu.id} 
              className="p-5 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate(menu.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${menu.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{menu.title}</h3>
                    <p className="text-xs text-muted-foreground">{menu.summary}</p>
                  </div>
                </div>
                {menu.alerts > 0 && (
                  <span className="px-2 py-1 text-xs font-medium bg-danger/10 text-danger rounded-full">
                    {menu.alerts} alert
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {menu.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Lihat Detail
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Bottom Section: Activities & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        {/* Recent Activities */}
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Aktivitas Terkini
          </h3>
          <div className="space-y-3">
            {recentActivities.map((activity, idx) => (
              <div 
                key={idx} 
                className={`p-3 rounded-lg border ${activity.urgent ? 'border-danger/30 bg-danger/5' : 'border-border bg-secondary/30'}`}
              >
                <p className="text-sm text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Tasks */}
        <Card className="p-5">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Tugas Tertunda
          </h3>
          <div className="space-y-3">
            {pendingTasks.map((task, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-border bg-secondary/30">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-foreground flex-1">{task.title}</p>
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    task.priority === 'high' 
                      ? 'bg-danger/10 text-danger' 
                      : 'bg-warning/10 text-warning'
                  }`}>
                    {task.priority === 'high' ? 'Prioritas Tinggi' : 'Prioritas Sedang'}
                  </span>
                </div>
                <div className="mt-2">
                  <Progress 
                    value={task.status === 'in-progress' ? 50 : 0} 
                    className="h-1.5"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {task.status === 'in-progress' ? 'Sedang dikerjakan' : 'Menunggu'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overall Progress */}
          <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Progress Mingguan</span>
              <span className="text-sm font-bold text-primary">67%</span>
            </div>
            <Progress value={67} className="h-2" />
          </div>
        </Card>
      </div>
    </div>
  );
};
