import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, TrendingUp, AlertTriangle } from "lucide-react";
import { useState } from "react";

export function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  const threatData = [
    { 
      country: "Saudi Arabia", 
      count: 2156, 
      flag: "🇸🇦", 
      severity: "high",
      threats: ["Phishing", "Data Breach", "Malware"]
    },
    { 
      country: "United States", 
      count: 1847, 
      flag: "🇺🇸", 
      severity: "medium",
      threats: ["DDoS", "Ransomware", "APT"]
    },
    { 
      country: "China", 
      count: 1234, 
      flag: "🇨🇳", 
      severity: "critical",
      threats: ["State Sponsored", "IP Theft", "Espionage"]
    },
    { 
      country: "Russia", 
      count: 987, 
      flag: "🇷🇺", 
      severity: "critical",
      threats: ["Ransomware", "Banking Trojans", "APT"]
    },
    { 
      country: "Iran", 
      count: 654, 
      flag: "🇮🇷", 
      severity: "high",
      threats: ["Cyber Warfare", "Infrastructure", "Energy"]
    },
    { 
      country: "North Korea", 
      count: 432, 
      flag: "🇰🇵", 
      severity: "critical",
      threats: ["Cryptocurrency", "Financial", "Government"]
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "high": return "bg-orange-500 text-white";
      case "medium": return "bg-yellow-500 text-white";
      default: return "bg-success text-success-foreground";
    }
  };

  const getSeverityDot = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-destructive";
      case "high": return "bg-orange-500";
      case "medium": return "bg-yellow-500";
      default: return "bg-success";
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-card-foreground">
            Global Threat Intelligence Map
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <span>Safe</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span>High</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-destructive"></div>
            <span>Critical</span>
          </div>
        </div>
      </div>
      
      <div className="relative bg-gradient-to-br from-primary/10 to-cyber-blue/20 rounded-lg p-8 h-80 flex items-center justify-center border border-primary/20">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🌍</div>
          <p className="text-lg font-medium text-card-foreground mb-2">Interactive Threat Map</p>
          <p className="text-sm text-muted-foreground mb-4">Real-time global cybersecurity monitoring</p>
          <div className="flex items-center justify-center gap-2 text-sm text-primary">
            <TrendingUp className="w-4 h-4" />
            <span>Live Data Feed Active</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-medium text-card-foreground">Threat Sources by Country</h4>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <AlertTriangle className="w-3 h-3" />
            <span>Updated: {new Date().toLocaleString('ar-SA', { timeZone: 'Asia/Riyadh' })}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {threatData.map((item, index) => (
            <div 
              key={index} 
              className={`group p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                selectedCountry === item.country 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border bg-muted/30 hover:bg-muted/50'
              }`}
              onClick={() => setSelectedCountry(selectedCountry === item.country ? null : item.country)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-card-foreground">{item.country}</span>
                      <div className={`w-2 h-2 rounded-full ${getSeverityDot(item.severity)}`}></div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className={getSeverityColor(item.severity)}>
                        {item.severity.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.threats.length} threat types
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-primary">{item.count.toLocaleString()}</span>
                  <p className="text-xs text-muted-foreground">incidents</p>
                </div>
              </div>
              
              {selectedCountry === item.country && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Primary Threat Vectors:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.threats.map((threat, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {threat}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}