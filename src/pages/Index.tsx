import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { QuickInsights } from "@/components/dashboard/QuickInsights";
import { ProductionSection } from "@/components/dashboard/ProductionSection";
import { FinancialSection } from "@/components/dashboard/FinancialSection";
import { RiskAlertSection } from "@/components/dashboard/RiskAlertSection";
import { ProductionTrendChart } from "@/components/dashboard/ProductionTrendChart";
import { SiteComparisonChart } from "@/components/dashboard/SiteComparisonChart";
import { FinancialTrendChart } from "@/components/dashboard/FinancialTrendChart";
import { RiskDistributionChart } from "@/components/dashboard/RiskDistributionChart";
import { SeasonComparison } from "@/components/dashboard/SeasonComparison";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { TimeFilter } from "@/components/dashboard/TimeFilter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header with personalized greeting */}
        <DashboardHeader userName="Budi Santoso" userRole="General Manager" />
        
        {/* Time Filter */}
        <div className="flex justify-end mb-6">
          <TimeFilter />
        </div>
        
        {/* Quick Insights for GM */}
        <QuickInsights />
        
        {/* Production & Productivity Metrics */}
        <ProductionSection />
        
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
