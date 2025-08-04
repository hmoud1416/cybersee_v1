import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Search, Download, Filter, Eye, Smartphone, Apple, PlayCircle } from "lucide-react";

const appsData = [
  {
    id: 1,
    title: "SecureBank Mobile",
    store: "App Store",
    keyword: "banking",
    textSimilarity: 89,
    developer: "Financial Technologies Inc.",
    score: 4.7,
    installs: "5M+",
    action: "Monitor"
  },
  {
    id: 2,
    title: "CryptoTrader Pro",
    store: "Google Play",
    keyword: "crypto",
    textSimilarity: 92,
    developer: "Blockchain Solutions Ltd.",
    score: 4.3,
    installs: "1M+",
    action: "Review"
  },
  {
    id: 3,
    title: "HealthCare Manager",
    store: "App Store",
    keyword: "health",
    textSimilarity: 85,
    developer: "Medical Tech Corp.",
    score: 4.6,
    installs: "2M+",
    action: "Monitor"
  },
  {
    id: 4,
    title: "Gaming Hub Elite",
    store: "Google Play",
    keyword: "gaming",
    textSimilarity: 78,
    developer: "Entertainment Studios",
    score: 4.2,
    installs: "10M+",
    action: "Alert"
  },
  {
    id: 5,
    title: "EduLearn Platform",
    store: "App Store",
    keyword: "education",
    textSimilarity: 94,
    developer: "Learning Technologies",
    score: 4.8,
    installs: "3M+",
    action: "Monitor"
  },
  {
    id: 6,
    title: "SocialConnect Pro",
    store: "Google Play",
    keyword: "social",
    textSimilarity: 87,
    developer: "Social Media Inc.",
    score: 4.1,
    installs: "15M+",
    action: "Review"
  },
  {
    id: 7,
    title: "TravelGuide Plus",
    store: "App Store",
    keyword: "travel",
    textSimilarity: 81,
    developer: "Travel Tech Solutions",
    score: 4.4,
    installs: "4M+",
    action: "Monitor"
  },
  {
    id: 8,
    title: "FitnessTracker Elite",
    store: "Google Play",
    keyword: "fitness",
    textSimilarity: 90,
    developer: "Health & Wellness Corp.",
    score: 4.5,
    installs: "8M+",
    action: "Review"
  },
  {
    id: 9,
    title: "NewsReader Premium",
    store: "App Store",
    keyword: "news",
    textSimilarity: 86,
    developer: "Media Publishing Ltd.",
    score: 4.0,
    installs: "2M+",
    action: "Monitor"
  },
  {
    id: 10,
    title: "ShopSmart Mobile",
    store: "Google Play",
    keyword: "shopping",
    textSimilarity: 93,
    developer: "E-commerce Solutions",
    score: 4.6,
    installs: "12M+",
    action: "Alert"
  }
];

export default function AppsMonitoring() {
  const getStoreBadge = (store: string) => {
    if (store === "App Store") {
      return (
        <Badge className="bg-gray-800 text-white flex items-center gap-1">
          <Apple className="w-3 h-3" />
          {store}
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-green-600 text-white flex items-center gap-1">
          <PlayCircle className="w-3 h-3" />
          {store}
        </Badge>
      );
    }
  };

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 90) return "bg-red-500";
    if (similarity >= 70) return "bg-warning";
    return "bg-success";
  };

  const getScoreColor = (score: number) => {
    if (score >= 4.5) return "text-success";
    if (score >= 4.0) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Apps Monitoring</h1>
        <p className="text-muted-foreground">Monitor mobile applications and app store activities</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search Package..." 
                className="pl-10 w-64"
              />
            </div>
            <Button>
              <Search className="w-4 h-4 mr-2" />
              Search
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
                <TableHead className="text-xs font-medium">Title</TableHead>
                <TableHead className="text-xs font-medium">Store</TableHead>
                <TableHead className="text-xs font-medium">Keyword</TableHead>
                <TableHead className="text-xs font-medium">Text Similarity</TableHead>
                <TableHead className="text-xs font-medium">Developer</TableHead>
                <TableHead className="text-xs font-medium">Score</TableHead>
                <TableHead className="text-xs font-medium">Installs</TableHead>
                <TableHead className="text-xs font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appsData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm font-medium">{item.title}</TableCell>
                  <TableCell>{getStoreBadge(item.store)}</TableCell>
                  <TableCell className="text-sm">{item.keyword}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={item.textSimilarity} 
                        className={`w-16 h-2 ${getSimilarityColor(item.textSimilarity)}`}
                      />
                      <span className="text-xs">{item.textSimilarity}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{item.developer}</TableCell>
                  <TableCell className={`text-sm font-medium ${getScoreColor(item.score)}`}>
                    {item.score}
                  </TableCell>
                  <TableCell className="text-sm">{item.installs}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Smartphone className="w-4 h-4" />
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
            {[1, 2, 3, 4, 5].map((page) => (
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
            Showing 1 to 10 of 35 results
          </p>
        </div>
      </Card>
    </div>
  );
}