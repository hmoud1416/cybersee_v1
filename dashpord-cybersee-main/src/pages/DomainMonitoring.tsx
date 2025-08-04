import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Search, Download, Filter, Eye, Globe } from "lucide-react";

const domainData = [
  {
    id: 1,
    domain: "securebankingapp.com",
    keyword: "banking",
    originalTitle: "Secure Banking Solutions",
    title: "Secure Banking Solutions",
    titleSimilarity: 100,
    available: false,
    domainSimilarity: 95.8,
    action: "Monitor"
  },
  {
    id: 2,
    domain: "socialnetwork-pro.net",
    keyword: "social",
    originalTitle: "Social Network Platform",
    title: "Social Network Platform",
    titleSimilarity: 98,
    available: false,
    domainSimilarity: 87.3,
    action: "Review"
  },
  {
    id: 3,
    domain: "ecommerce-solutions.org",
    keyword: "shopping",
    originalTitle: "E-Commerce Hub",
    title: "E-Commerce Hub Solutions",
    titleSimilarity: 92,
    available: true,
    domainSimilarity: 94.1,
    action: "Alert"
  },
  {
    id: 4,
    domain: "crypto-trading-hub.io",
    keyword: "crypto",
    originalTitle: "Crypto Trading Platform",
    title: "Crypto Trading Hub",
    titleSimilarity: 89,
    available: false,
    domainSimilarity: 91.7,
    action: "Block"
  },
  {
    id: 5,
    domain: "healthcare-portal.med",
    keyword: "health",
    originalTitle: "Healthcare Management",
    title: "Healthcare Portal System",
    titleSimilarity: 85,
    available: true,
    domainSimilarity: 88.5,
    action: "Monitor"
  },
  {
    id: 6,
    domain: "gaming-network.game",
    keyword: "gaming",
    originalTitle: "Gaming Community",
    title: "Gaming Network Platform",
    titleSimilarity: 94,
    available: false,
    domainSimilarity: 92.3,
    action: "Review"
  },
  {
    id: 7,
    domain: "education-learning.edu",
    keyword: "education",
    originalTitle: "Learning Management System",
    title: "Education Learning Portal",
    titleSimilarity: 87,
    available: true,
    domainSimilarity: 90.2,
    action: "Monitor"
  },
  {
    id: 8,
    domain: "news-media-hub.info",
    keyword: "news",
    originalTitle: "News Broadcasting",
    title: "News Media Hub",
    titleSimilarity: 91,
    available: false,
    domainSimilarity: 89.6,
    action: "Alert"
  },
  {
    id: 9,
    domain: "travel-booking.trip",
    keyword: "travel",
    originalTitle: "Travel Booking System",
    title: "Travel Booking Platform",
    titleSimilarity: 96,
    available: true,
    domainSimilarity: 93.4,
    action: "Review"
  },
  {
    id: 10,
    domain: "fitness-tracker.fit",
    keyword: "fitness",
    originalTitle: "Fitness Tracking App",
    title: "Fitness Tracker Pro",
    titleSimilarity: 88,
    available: false,
    domainSimilarity: 86.7,
    action: "Monitor"
  }
];

export default function DomainMonitoring() {
  const getAvailabilityBadge = (available: boolean) => {
    return available ? (
      <Badge className="bg-success text-success-foreground">Available</Badge>
    ) : (
      <Badge variant="destructive">Unavailable</Badge>
    );
  };

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 90) return "bg-success";
    if (similarity >= 70) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Domain Monitoring</h1>
        <p className="text-muted-foreground">Monitor domain registrations and brand protection</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search Domains..." 
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
                <TableHead className="text-xs font-medium">Domain</TableHead>
                <TableHead className="text-xs font-medium">Keyword</TableHead>
                <TableHead className="text-xs font-medium">Original Title</TableHead>
                <TableHead className="text-xs font-medium">Title</TableHead>
                <TableHead className="text-xs font-medium">Title Similarity</TableHead>
                <TableHead className="text-xs font-medium">Available</TableHead>
                <TableHead className="text-xs font-medium">Domain Similarity</TableHead>
                <TableHead className="text-xs font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {domainData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm font-mono">{item.domain}</TableCell>
                  <TableCell className="text-sm">{item.keyword}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{item.originalTitle}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{item.title}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={item.titleSimilarity} 
                        className={`w-16 h-2 ${getSimilarityColor(item.titleSimilarity)}`}
                      />
                      <span className="text-xs">{item.titleSimilarity}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{getAvailabilityBadge(item.available)}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={item.domainSimilarity} 
                        className={`w-16 h-2 ${getSimilarityColor(item.domainSimilarity)}`}
                      />
                      <span className="text-xs">{item.domainSimilarity}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Globe className="w-4 h-4" />
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((page) => (
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
            Showing 1 to 10 of 109 results
          </p>
        </div>
      </Card>
    </div>
  );
}