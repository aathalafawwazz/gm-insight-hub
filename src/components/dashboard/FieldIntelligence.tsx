import { Info, TrendingUp, AlertTriangle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from "recharts";

// Crop Growth Distribution Data
const cropGrowthData = [
  { name: "Vegetative", value: 87, color: "hsl(142, 76%, 36%)" },
  { name: "Flowering", value: 8, color: "hsl(84, 81%, 44%)" },
  { name: "Ripening", value: 3, color: "hsl(48, 96%, 53%)" },
  { name: "Seedling", value: 2, color: "hsl(205, 89%, 48%)" },
];

// Weekly Rainfall Data
const rainfallData = [
  { day: "Sen", value: 12 },
  { day: "Sel", value: 15 },
  { day: "Rab", value: 18 },
  { day: "Kam", value: 22 },
  { day: "Jum", value: 28 },
  { day: "Sab", value: 24 },
  { day: "Min", value: 20 },
];

// Cluster Health Data
const clusterHealthData = [
  { name: "A", compliance: 92, health: 88 },
  { name: "B", compliance: 78, health: 72 },
  { name: "C", compliance: 85, health: 80 },
  { name: "D", compliance: 90, health: 86 },
];

export const FieldIntelligence = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-sm font-semibold text-foreground">Field Intelligence</h2>
        <span className="text-xs text-muted-foreground">• Real-time Analytics with AI Insights</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Crop Growth Distribution */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm font-medium text-foreground">Crop Growth Distribution</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-success">
              <TrendingUp className="w-3 h-3" />
              <span>On Schedule</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-28 h-28">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={cropGrowthData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={45}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {cropGrowthData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex-1 space-y-1.5">
              {cropGrowthData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-border">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-info flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                87% of fields are in vegetative stage, indicating synchronized planting. This is optimal for coordinated harvesting in 45-50 days.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Rainfall Pattern */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-info" />
              <span className="text-sm font-medium text-foreground">Weekly Rainfall Pattern</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-success">
              <TrendingUp className="w-3 h-3" />
              <span>+15% vs Expected</span>
            </div>
          </div>

          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={rainfallData}>
                <defs>
                  <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(205, 89%, 48%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(205, 89%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} tickFormatter={(v) => `${v}mm`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(205, 89%, 48%)"
                  strokeWidth={2}
                  fill="url(#rainfallGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Expected line reference */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-xs">
              <div className="w-4 h-0.5 bg-info" />
              <span className="text-muted-foreground">Actual</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-4 h-0.5 bg-muted-foreground/30 border-dashed" style={{ borderTop: '2px dashed hsl(var(--muted-foreground) / 0.5)' }} />
              <span className="text-muted-foreground">Expected</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-info flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                Rainfall this week is 15% above seasonal average. Drainage systems in Clusters A & C should be monitored closely.
              </p>
            </div>
          </div>
        </div>

        {/* Cluster Health Overview */}
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning" />
              <span className="text-sm font-medium text-foreground">Cluster Health Overview</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-danger">
              <AlertTriangle className="w-3 h-3" />
              <span>Cluster B Alert</span>
            </div>
          </div>

          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={clusterHealthData} barGap={2}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="compliance" name="Compliance %" fill="hsl(142, 76%, 36%)" radius={[2, 2, 0, 0]} />
                <Bar dataKey="health" name="Crop Health %" fill="hsl(48, 96%, 53%)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 mt-2">
            <div className="flex items-center gap-1 text-xs">
              <div className="w-3 h-3 rounded-sm bg-success" />
              <span className="text-muted-foreground">Compliance %</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(48, 96%, 53%)' }} />
              <span className="text-muted-foreground">Crop Health %</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                Cluster B shows lower crop health (78%) and farmer compliance (88%). Recommend targeted field officer visits and technical assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
