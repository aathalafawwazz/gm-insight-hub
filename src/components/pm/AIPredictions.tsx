import { Brain, Send } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface Prediction {
  id: number;
  title: string;
  riskLevel: "tinggi" | "sedang" | "rendah";
  confidence: number;
  lahan: number;
  timeframe: string;
  type: string;
  recommendations: string[];
}

const predictions: Prediction[] = [
  {
    id: 1,
    title: "Prediksi stres air dalam 5-7 hari",
    riskLevel: "tinggi",
    confidence: 85,
    lahan: 44,
    timeframe: "5-7 hari",
    type: "Stress",
    recommendations: [
      "Tingkatkan frekuensi irigasi",
      "Monitor NDVI harian",
      "Koordinasi dengan SM untuk eksekusi",
    ],
  },
  {
    id: 2,
    title: "Waktu panen optimal: 15-20 hari lagi",
    riskLevel: "rendah",
    confidence: 92,
    lahan: 9,
    timeframe: "15-20 hari",
    type: "Harvest",
    recommendations: [
      "Persiapkan peralatan panen",
      "Koordinasi jadwal dengan SM",
      "Monitor kualitas gabah",
    ],
  },
  {
    id: 3,
    title: "Risiko gagal panen 15% tanpa intervensi",
    riskLevel: "sedang",
    confidence: 78,
    lahan: 8,
    timeframe: "30 hari",
    type: "Failure",
    recommendations: [
      "Pemupukan tambahan diperlukan",
      "Pengendalian hama intensif",
      "Review dengan SM dan GM",
    ],
  },
];

const getRiskBadge = (level: Prediction["riskLevel"]) => {
  const styles = {
    tinggi: "bg-red-100 text-red-700",
    sedang: "bg-yellow-100 text-yellow-700",
    rendah: "bg-green-100 text-green-700",
  };
  const labels = {
    tinggi: "Risiko Tinggi",
    sedang: "Risiko Sedang",
    rendah: "Risiko Rendah",
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${styles[level]}`}>
      {labels[level]}
    </span>
  );
};

const getCardBorder = (level: Prediction["riskLevel"]) => {
  switch (level) {
    case "tinggi":
      return "border-l-4 border-l-danger";
    case "sedang":
      return "border-l-4 border-l-warning";
    case "rendah":
      return "border-l-4 border-l-success";
  }
};

export const AIPredictions = () => {
  const today = format(new Date(), "EEEE, dd MMMM yyyy", { locale: id });
  const highRiskCount = predictions.filter((p) => p.riskLevel === "tinggi").length;
  const avgConfidence = Math.round(
    predictions.reduce((acc, p) => acc + p.confidence, 0) / predictions.length
  );

  return (
    <div className="space-y-6">
      <div className="header-gradient rounded-2xl p-6 animate-fade-in relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-primary-foreground mb-2">
            AI Predictions & Decision Support
          </h2>
          <p className="text-primary-foreground/80 text-sm">
            Prediksi dan rekomendasi berbasis AI • {today}
          </p>
        </div>
        <Brain className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 text-primary-foreground/20" />
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="card-metric">
          <p className="text-xs text-muted-foreground mb-1">Total Predictions</p>
          <p className="text-2xl font-bold text-foreground">{predictions.length}</p>
        </div>
        <div className="card-metric">
          <p className="text-xs text-muted-foreground mb-1">Risiko Tinggi</p>
          <p className="text-2xl font-bold text-danger">{highRiskCount}</p>
        </div>
        <div className="card-metric">
          <p className="text-xs text-muted-foreground mb-1">Avg Confidence</p>
          <p className="text-2xl font-bold text-foreground">{avgConfidence}%</p>
        </div>
      </div>

      {/* Prediction Cards */}
      <div className="space-y-4">
        {predictions.map((prediction, index) => (
          <div
            key={prediction.id}
            className={`card-metric ${getCardBorder(prediction.riskLevel)} animate-fade-in`}
            style={{ animationDelay: `${0.1 * (index + 2)}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="text-base font-semibold text-foreground">{prediction.title}</h3>
              </div>
              {getRiskBadge(prediction.riskLevel)}
            </div>

            <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Lahan</p>
                <p className="font-semibold text-foreground">{prediction.lahan}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Confidence</p>
                <p className="font-semibold text-foreground">{prediction.confidence}%</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Timeframe</p>
                <p className="font-semibold text-foreground">{prediction.timeframe}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Type</p>
                <p className="font-semibold text-foreground">{prediction.type}</p>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-foreground mb-2">Rekomendasi:</p>
              <ul className="space-y-1">
                {prediction.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                <Send className="w-4 h-4" />
                Kirim ke SM
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                Detail Analisis
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
