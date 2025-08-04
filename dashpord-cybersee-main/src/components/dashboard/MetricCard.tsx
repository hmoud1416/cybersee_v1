import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
  severity?: "critical" | "high" | "medium" | "good";
}

export function MetricCard({ 
  title, 
  value, 
  description, 
  trend = "neutral",
  icon,
  className,
  severity = "good"
}: MetricCardProps) {
  const getSeverityColors = () => {
    switch (severity) {
      case "critical":
        return "border-destructive/50 bg-destructive/5 hover:bg-destructive/10";
      case "high":
        return "border-orange-500/50 bg-orange-500/5 hover:bg-orange-500/10";
      case "medium":
        return "border-yellow-500/50 bg-yellow-500/5 hover:bg-yellow-500/10";
      case "good":
        return "border-success/50 bg-success/5 hover:bg-success/10";
      default:
        return "border-border bg-card hover:bg-card/80";
    }
  };

  const getIconColor = () => {
    switch (severity) {
      case "critical":
        return "text-destructive";
      case "high":
        return "text-orange-500";
      case "medium":
        return "text-yellow-500";
      case "good":
        return "text-success";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={cn(
      "p-6 transition-all duration-200 border-2",
      getSeverityColors(),
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <p className="text-3xl font-bold text-card-foreground">{value}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        {icon && (
          <div className={getIconColor()}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        {trend !== "neutral" && (
          <div className="flex items-center">
            <div className={cn(
              "w-2 h-2 rounded-full mr-2",
              trend === "up" && severity === "critical" && "bg-destructive",
              trend === "up" && severity !== "critical" && "bg-success",
              trend === "down" && severity === "critical" && "bg-success",
              trend === "down" && severity !== "critical" && "bg-destructive"
            )} />
            <span className="text-xs text-muted-foreground">
              {trend === "up" ? "Increasing" : "Decreasing"}
            </span>
          </div>
        )}
        
        <div className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          severity === "critical" && "bg-destructive/20 text-destructive",
          severity === "high" && "bg-orange-500/20 text-orange-500",
          severity === "medium" && "bg-yellow-500/20 text-yellow-500",
          severity === "good" && "bg-success/20 text-success"
        )}>
          {severity.toUpperCase()}
        </div>
      </div>
    </Card>
  );
}