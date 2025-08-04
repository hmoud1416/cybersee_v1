import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Search, Download, Filter, Eye, Users } from "lucide-react";

const usersData = [
  {
    id: 1,
    platform: "Instagram",
    username: "corporate_finance",
    keyword: "finance",
    title: "Corporate Finance Solutions | Professional Services",
    similarity: 95,
    profile: "Business",
    action: "Monitor"
  },
  {
    id: 2,
    platform: "Facebook",
    username: "secure_banking_pro",
    keyword: "banking",
    title: "Secure Banking Professional Services",
    similarity: 88,
    profile: "Business",
    action: "Review"
  },
  {
    id: 3,
    platform: "Twitter",
    username: "crypto_trader_elite",
    keyword: "crypto",
    title: "Elite Crypto Trading Insights & Analysis",
    similarity: 92,
    profile: "Influencer",
    action: "Alert"
  },
  {
    id: 4,
    platform: "LinkedIn",
    username: "healthcare_innovations",
    keyword: "healthcare",
    title: "Healthcare Innovation & Technology Solutions",
    similarity: 85,
    profile: "Company",
    action: "Monitor"
  },
  {
    id: 5,
    platform: "TikTok",
    username: "gaming_community_hub",
    keyword: "gaming",
    title: "Gaming Community Hub - Latest Gaming Content",
    similarity: 78,
    profile: "Creator",
    action: "Review"
  },
  {
    id: 6,
    platform: "YouTube",
    username: "tech_education_pro",
    keyword: "education",
    title: "Technology Education & Professional Development",
    similarity: 91,
    profile: "Educational",
    action: "Monitor"
  },
  {
    id: 7,
    platform: "Snapchat",
    username: "travel_adventures_daily",
    keyword: "travel",
    title: "Daily Travel Adventures & Destination Guides",
    similarity: 83,
    profile: "Lifestyle",
    action: "Review"
  },
  {
    id: 8,
    platform: "Pinterest",
    username: "fitness_motivation_hub",
    keyword: "fitness",
    title: "Fitness Motivation Hub - Health & Wellness",
    similarity: 89,
    profile: "Health",
    action: "Monitor"
  },
  {
    id: 9,
    platform: "Reddit",
    username: "news_analysis_pro",
    keyword: "news",
    title: "Professional News Analysis & Current Events",
    similarity: 87,
    profile: "News",
    action: "Alert"
  },
  {
    id: 10,
    platform: "Discord",
    username: "ecommerce_community",
    keyword: "ecommerce",
    title: "E-commerce Community & Business Networking",
    similarity: 94,
    profile: "Business",
    action: "Review"
  }
];

export default function UsersMonitoring() {
  const getPlatformBadge = (platform: string) => {
    const platformColors = {
      "Instagram": "bg-pink-600 text-white",
      "Facebook": "bg-blue-600 text-white",
      "Twitter": "bg-cyan-500 text-white",
      "LinkedIn": "bg-blue-700 text-white",
      "TikTok": "bg-black text-white",
      "YouTube": "bg-red-600 text-white",
      "Snapchat": "bg-yellow-400 text-black",
      "Pinterest": "bg-red-500 text-white",
      "Reddit": "bg-orange-600 text-white",
      "Discord": "bg-indigo-600 text-white"
    };
    
    return (
      <Badge className={platformColors[platform as keyof typeof platformColors] || "bg-gray-600 text-white"}>
        {platform}
      </Badge>
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
        <h1 className="text-3xl font-bold text-foreground">Users Monitoring</h1>
        <p className="text-muted-foreground">Monitor social media accounts and user activities</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search Users..." 
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
                <TableHead className="text-xs font-medium">Platform</TableHead>
                <TableHead className="text-xs font-medium">Username</TableHead>
                <TableHead className="text-xs font-medium">Keyword</TableHead>
                <TableHead className="text-xs font-medium">Title</TableHead>
                <TableHead className="text-xs font-medium">Similarity</TableHead>
                <TableHead className="text-xs font-medium">Profile</TableHead>
                <TableHead className="text-xs font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell>{getPlatformBadge(item.platform)}</TableCell>
                  <TableCell className="text-sm font-mono">{item.username}</TableCell>
                  <TableCell className="text-sm">{item.keyword}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{item.title}</TableCell>
                  <TableCell className="text-sm">
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={item.similarity} 
                        className={`w-16 h-2 ${getSimilarityColor(item.similarity)}`}
                      />
                      <span className="text-xs">{item.similarity}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{item.profile}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Users className="w-4 h-4" />
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
            {[1, 2].map((page) => (
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
            Showing 1 to 10 of 16 results
          </p>
        </div>
      </Card>
    </div>
  );
}