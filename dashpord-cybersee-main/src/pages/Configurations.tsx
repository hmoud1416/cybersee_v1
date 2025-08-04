import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Edit, Trash2, Settings, Copy, FileCheck, AlertTriangle, Users } from "lucide-react";

const configData = [
  {
    id: 1,
    userName: "System Administrator",
    keywordId: 15,
    keywordName: "banking-security",
    title: "Banking Security Solutions",
    type: "Domain",
    level: "Critical",
    tags: "financial",
    created: "2025-01-20",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 2,
    userName: "Security Analyst",
    keywordId: 23,
    keywordName: "crypto-trading",
    title: "Cryptocurrency Trading Platform",
    type: "Domain",
    level: "High",
    tags: "finance",
    created: "2025-01-19",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 3,
    userName: "Brand Manager",
    keywordId: 8,
    keywordName: "healthcare-portal",
    title: "Healthcare Management Portal",
    type: "Brand Protection",
    level: "Critical",
    tags: "medical",
    created: "2025-01-18",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 4,
    userName: "Monitoring Team",
    keywordId: 12,
    keywordName: "social-network",
    title: "Social Network Platform",
    type: "Domain",
    level: "Medium",
    tags: "social",
    created: "2025-01-17",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 5,
    userName: "IT Security",
    keywordId: 31,
    keywordName: "ecommerce-store",
    title: "E-commerce Store Platform",
    type: "Brand Protection",
    level: "High",
    tags: "retail",
    created: "2025-01-16",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 6,
    userName: "Threat Analyst",
    keywordId: 19,
    keywordName: "gaming-platform",
    title: "Gaming Community Platform",
    type: "Domain",
    level: "Low",
    tags: "entertainment",
    created: "2025-01-15",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 7,
    userName: "Security Team",
    keywordId: 7,
    keywordName: "education-hub",
    title: "Educational Learning Hub",
    type: "Brand Protection",
    level: "Medium",
    tags: "education",
    created: "2025-01-14",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 8,
    userName: "Admin User",
    keywordId: 25,
    keywordName: "news-media",
    title: "News Media Portal",
    type: "Domain",
    level: "Critical",
    tags: "media",
    created: "2025-01-13",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 9,
    userName: "Brand Protection",
    keywordId: 14,
    keywordName: "travel-booking",
    title: "Travel Booking System",
    type: "Domain",
    level: "High",
    tags: "travel",
    created: "2025-01-12",
    options: ["edit", "copy", "delete", "view"]
  },
  {
    id: 10,
    userName: "Security Ops",
    keywordId: 9,
    keywordName: "fitness-tracker",
    title: "Fitness Tracking Application",
    type: "Brand Protection",
    level: "Medium",
    tags: "health",
    created: "2025-01-11",
    options: ["edit", "copy", "delete", "view"]
  }
];

export default function Configurations() {
  const getLevelBadge = (level: string) => {
    switch (level.toLowerCase()) {
      case "critical":
        return <Badge variant="destructive">{level}</Badge>;
      case "high":
        return <Badge className="bg-red-600 text-white">{level}</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">{level}</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">{level}</Badge>;
      default:
        return <Badge variant="secondary">{level}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    return type === "Domain" ? (
      <Badge className="bg-cyber-blue text-white">{type}</Badge>
    ) : (
      <Badge className="bg-purple-600 text-white">{type}</Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Configurations</h1>
        <p className="text-muted-foreground">Manage keywords, policies, and monitoring configurations</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Button className="bg-cyber-blue hover:bg-cyber-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Keywords
        </Button>
        <Button variant="secondary" className="bg-warning hover:bg-warning/90">
          <FileCheck className="w-4 h-4 mr-2" />
          Check List
        </Button>
        <Button variant="destructive">
          <AlertTriangle className="w-4 h-4 mr-2" />
          Policy List
        </Button>
        <Button variant="outline">
          <Users className="w-4 h-4 mr-2" />
          Social Media
        </Button>
        <div className="flex items-center gap-2 ml-auto">
          <Badge variant="outline">All</Badge>
          <Badge className="bg-success text-success-foreground">Active</Badge>
          <Badge className="bg-warning text-warning-foreground">Pending</Badge>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search..." 
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      <Card className="p-6">
        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs font-medium">#</TableHead>
                <TableHead className="text-xs font-medium">User Name</TableHead>
                <TableHead className="text-xs font-medium">ID</TableHead>
                <TableHead className="text-xs font-medium">Keyword Name</TableHead>
                <TableHead className="text-xs font-medium">Title</TableHead>
                <TableHead className="text-xs font-medium">Type</TableHead>
                <TableHead className="text-xs font-medium">Level</TableHead>
                <TableHead className="text-xs font-medium">Tags</TableHead>
                <TableHead className="text-xs font-medium">Created</TableHead>
                <TableHead className="text-xs font-medium">Options</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {configData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm">{item.userName}</TableCell>
                  <TableCell className="text-sm font-mono">{item.keywordId}</TableCell>
                  <TableCell className="text-sm font-medium">{item.keywordName}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate">{item.title}</TableCell>
                  <TableCell>{getTypeBadge(item.type)}</TableCell>
                  <TableCell>{getLevelBadge(item.level)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{item.tags}</Badge>
                  </TableCell>
                  <TableCell className="text-sm">{item.created}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Copy className="w-3 h-3 text-cyan-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <FileCheck className="w-3 h-3 text-green-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Edit className="w-3 h-3 text-orange-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Settings className="w-3 h-3 text-blue-400" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <Trash2 className="w-3 h-3 text-red-400" />
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
            Showing 1 to 10 of 15 results
          </p>
        </div>
      </Card>
    </div>
  );
}