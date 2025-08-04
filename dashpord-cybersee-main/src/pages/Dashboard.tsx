import { MetricCard } from "@/components/dashboard/MetricCard";
import { DashboardCharts } from "@/components/dashboard/DashboardCharts";
import { WorldMap } from "@/components/dashboard/WorldMap";
import { TimeFilter } from "@/components/dashboard/TimeFilter";
import { Shield, AlertTriangle, Eye, Database, Clock, UserCheck, AlertCircle, Activity, Target, TrendingUp, TrendingDown } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("24h");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">CyberSee Security Dashboard</h1>
        <p className="text-muted-foreground">Real-time cybersecurity monitoring and threat intelligence</p>
      </div>

      {/* Time Filter */}
      <TimeFilter value={timeRange} onChange={setTimeRange} />

      {/* Critical Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Mean Time to Detect"
          value="4.2"
          description="hours avg detection time"
          icon={<Clock className="w-6 h-6" />}
          trend="down"
          severity="critical"
        />
        <MetricCard
          title="Mean Time to Resolve"
          value="12.8"
          description="hours avg resolution time"
          icon={<Activity className="w-6 h-6" />}
          trend="down"
          severity="high"
        />
        <MetricCard
          title="Security Rating"
          value="8.7"
          description="out of 10"
          icon={<Shield className="w-6 h-6" />}
          trend="up"
          severity="good"
        />
        <MetricCard
          title="Active Threats"
          value="23"
          description="requiring attention"
          icon={<AlertCircle className="w-6 h-6" />}
          trend="up"
          severity="critical"
        />
      </div>

      {/* Monitoring Services */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Security Monitoring Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Brand Protection"
            value="3,847"
            description="monitored assets"
            icon={<Shield className="w-6 h-6" />}
            trend="up"
            severity="good"
          />
          <MetricCard
            title="Dark Web Intelligence"
            value="1,234"
            description="threat indicators"
            icon={<Eye className="w-6 h-6" />}
            trend="up"
            severity="medium"
          />
          <MetricCard
            title="Phishing Detection"
            value="89"
            description="blocked attempts"
            icon={<AlertTriangle className="w-6 h-6" />}
            trend="up"
            severity="high"
          />
          <MetricCard
            title="Domain Monitoring"
            value="156"
            description="protected domains"
            icon={<Database className="w-6 h-6" />}
            trend="neutral"
            severity="good"
          />
        </div>
      </div>

      {/* Advanced Monitoring */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-foreground">Advanced Security Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Employee Security Training"
            value="94%"
            description="completion rate"
            icon={<UserCheck className="w-6 h-6" />}
            trend="up"
            severity="good"
          />
          <MetricCard
            title="Rogue Apps Detection"
            value="7"
            description="suspicious apps found"
            icon={<Target className="w-6 h-6" />}
            trend="down"
            severity="medium"
          />
          <MetricCard
            title="BIN Monitoring"
            value="45,672"
            description="transactions monitored"
            icon={<Activity className="w-6 h-6" />}
            trend="up"
            severity="good"
          />
          <MetricCard
            title="Data Leak Prevention"
            value="0"
            description="incidents this month"
            icon={<Database className="w-6 h-6" />}
            trend="neutral"
            severity="good"
          />
        </div>
      </div>

      {/* World Map and Latest Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WorldMap />
        </div>
        <div className="space-y-6">
          {/* Additional metrics or reports can go here */}
        </div>
      </div>

      {/* Charts Section */}
      <DashboardCharts />
    </div>
  );
}