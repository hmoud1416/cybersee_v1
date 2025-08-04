import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Filter, Eye, Share } from "lucide-react";

const stealerLogData = [
  {
    id: 1,
    ip: "192.168.1.100",
    url: "https://secure-banking.com",
    username: "john.doe@email.com",
    password: "SecurePass123!",
    keyword: "banking",
    tags: "financial",
    time: "2025-01-15 14:23:45",
    country: "United States",
    severity: "Critical",
    action: "Blocked"
  },
  {
    id: 2,
    ip: "10.0.0.25",
    url: "https://corporate-portal.net",
    username: "admin@company.com",
    password: "AdminPass456@",
    keyword: "corporate",
    tags: "business",
    time: "2025-01-15 13:45:12",
    country: "Canada",
    severity: "High",
    action: "Monitored"
  },
  {
    id: 3,
    ip: "172.16.5.88",
    url: "https://social-platform.io",
    username: "user.social",
    password: "MyPassword789#",
    keyword: "social",
    tags: "personal",
    time: "2025-01-15 12:15:33",
    country: "United Kingdom",
    severity: "Medium",
    action: "Flagged"
  },
  {
    id: 4,
    ip: "203.0.113.42",
    url: "https://e-commerce-site.com",
    username: "shopper123",
    password: "ShopSafe2024$",
    keyword: "ecommerce",
    tags: "retail",
    time: "2025-01-15 11:30:21",
    country: "Australia",
    severity: "Critical",
    action: "Blocked"
  },
  {
    id: 5,
    ip: "198.51.100.15",
    url: "https://crypto-exchange.org",
    username: "trader.pro",
    password: "CryptoKey987&",
    keyword: "crypto",
    tags: "financial",
    time: "2025-01-15 10:45:55",
    country: "Germany",
    severity: "High",
    action: "Investigating"
  },
  {
    id: 6,
    ip: "192.0.2.73",
    url: "https://healthcare-portal.med",
    username: "dr.smith",
    password: "MedSecure456!",
    keyword: "healthcare",
    tags: "medical",
    time: "2025-01-15 09:22:18",
    country: "France",
    severity: "Critical",
    action: "Blocked"
  },
  {
    id: 7,
    ip: "203.113.0.99",
    url: "https://education-hub.edu",
    username: "professor.lee",
    password: "EduPass123@",
    keyword: "education",
    tags: "academic",
    time: "2025-01-15 08:15:42",
    country: "Japan",
    severity: "Medium",
    action: "Monitored"
  },
  {
    id: 8,
    ip: "198.100.51.33",
    url: "https://gaming-network.game",
    username: "gamer.elite",
    password: "GameOn789#",
    keyword: "gaming",
    tags: "entertainment",
    time: "2025-01-15 07:30:11",
    country: "South Korea",
    severity: "Low",
    action: "Logged"
  },
  {
    id: 9,
    ip: "192.2.0.156",
    url: "https://news-portal.media",
    username: "journalist.news",
    password: "NewsPass456$",
    keyword: "media",
    tags: "journalism",
    time: "2025-01-15 06:45:29",
    country: "Brazil",
    severity: "Medium",
    action: "Flagged"
  },
  {
    id: 10,
    ip: "203.0.2.211",
    url: "https://travel-booking.trip",
    username: "traveler.world",
    password: "TravelSafe123&",
    keyword: "travel",
    tags: "tourism",
    time: "2025-01-15 05:18:37",
    country: "Italy",
    severity: "High",
    action: "Investigating"
  }
];

export default function StealerLog() {
  const getSeverityBadge = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return <Badge variant="destructive">{severity}</Badge>;
      case "high":
        return <Badge className="bg-red-600 text-white">{severity}</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">{severity}</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">{severity}</Badge>;
      default:
        return <Badge variant="secondary">{severity}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Stealer Log</h1>
        <p className="text-muted-foreground">Monitor and track stolen credentials and malware logs</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search username / keyword..." 
                className="pl-10 w-64"
              />
            </div>
            <Button>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
          <Button>
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs font-medium">#</TableHead>
                <TableHead className="text-xs font-medium">IP</TableHead>
                <TableHead className="text-xs font-medium">URL</TableHead>
                <TableHead className="text-xs font-medium">Username</TableHead>
                <TableHead className="text-xs font-medium">Password</TableHead>
                <TableHead className="text-xs font-medium">Keyword</TableHead>
                <TableHead className="text-xs font-medium">Tags</TableHead>
                <TableHead className="text-xs font-medium">Time</TableHead>
                <TableHead className="text-xs font-medium">Country</TableHead>
                <TableHead className="text-xs font-medium">Severity</TableHead>
                <TableHead className="text-xs font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stealerLogData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm font-mono">{item.ip}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{item.url}</TableCell>
                  <TableCell className="text-sm font-mono">{item.username}</TableCell>
                  <TableCell className="text-sm font-mono">{"•".repeat(item.password.length)}</TableCell>
                  <TableCell className="text-sm">{item.keyword}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{item.tags}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{item.time}</TableCell>
                  <TableCell className="text-sm">{item.country}</TableCell>
                  <TableCell>{getSeverityBadge(item.severity)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Share className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "ghost"}
                size="sm"
                className="w-8 h-8"
              >
                {page}
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Showing 1 to 10 of 85 results
          </p>
        </div>
      </Card>
    </div>
  );
}