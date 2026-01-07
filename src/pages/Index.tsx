import { Link } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { QuickInsights } from "@/components/dashboard/QuickInsights";
import { ProductionSection } from "@/components/dashboard/ProductionSection";
import { ProductionMap } from "@/components/dashboard/ProductionMap";
import { FinancialSection } from "@/components/dashboard/FinancialSection";
import { RiskAlertSection } from "@/components/dashboard/RiskAlertSection";
import { ProductionTrendChart } from "@/components/dashboard/ProductionTrendChart";
import { SiteComparisonChart } from "@/components/dashboard/SiteComparisonChart";
import { FinancialTrendChart } from "@/components/dashboard/FinancialTrendChart";
import { RiskDistributionChart } from "@/components/dashboard/RiskDistributionChart";
import { SeasonComparison } from "@/components/dashboard/SeasonComparison";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TimeFilter } from "@/components/dashboard/TimeFilter";
import { Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header with personalized greeting */}
        <DashboardHeader userName="Budi Santoso" userRole="General Manager" />
        
        {/* Quick Navigation to PM Dashboard */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/pm"
            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-xl text-sm font-medium transition-colors"
          >
            <Users className="w-4 h-4" />
            Lihat Dashboard Project Manager
          </Link>
          <TimeFilter />
        </div>
        
        {/* Quick Insights for GM */}
        <QuickInsights />
        
        {/* Production & Productivity Metrics */}
        <ProductionSection />
        
        {/* Production Map with Hover Info */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <ProductionMap />
        </div>
        
        {/* Financial Metrics */}
        <FinancialSection />
        
        {/* Risk Alerts & Recommendations Status */}
        <RiskAlertSection />
        
        {/* Production Trend Chart */}
        <ProductionTrendChart />
        
        {/* Site Comparison */}
        <SiteComparisonChart />
        
        {/* Financial Trend */}
        <FinancialTrendChart />
        
        {/* Risk Distribution & Recommendation Trend */}
        <RiskDistributionChart />
        
        {/* Season Comparison */}
        <SeasonComparison />
        
        {/* Quick Actions FAB */}
        <QuickActions />
      </div>
    </div>
  );
};

export default Index;
