import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Filter, Eye, Share } from "lucide-react";

const phishingData = [
  {
    id: 1,
    timestamp: "2025-06-15",
    riskRating: "Medium",
    keyword: "asem",
    originalTitle: "none",
    phishingTitle: "1",
    similarity: 1,
    status: "Pending",
    tags: "none",
    phishingUrl: "1",
    phishingUrlStatus: "un-active",
    source: "Botnet",
    action: "none"
  },
  {
    id: 2,
    timestamp: "2025-06-15",
    riskRating: "Medium",
    keyword: "asem",
    originalTitle: "none",
    phishingTitle: "1",
    similarity: 1,
    status: "Pending",
    tags: "none",
    phishingUrl: "1",
    phishingUrlStatus: "un-active",
    source: "Botnet",
    action: "none"
  },
  {
    id: 3,
    timestamp: "2025-06-15",
    riskRating: "Medium",
    keyword: "asem",
    originalTitle: "none",
    phishingTitle: "1",
    similarity: 1,
    status: "Pending",
    tags: "none",
    phishingUrl: "1",
    phishingUrlStatus: "un-active",
    source: "Botnet",
    action: "none"
  },
  {
    id: 4,
    timestamp: "2025-06-15",
    riskRating: "Medium",
    keyword: "asem",
    originalTitle: "none",
    phishingTitle: "1",
    similarity: 1,
    status: "Pending",
    tags: "none",
    phishingUrl: "1",
    phishingUrlStatus: "un-active",
    source: "Botnet",
    action: "none"
  },
  {
    id: 5,
    timestamp: "2025-06-15",
    riskRating: "Medium",
    keyword: "asem",
    originalTitle: "none",
    phishingTitle: "1",
    similarity: 1,
    status: "Pending",
    tags: "none",
    phishingUrl: "1",
    phishingUrlStatus: "un-active",
    source: "Botnet",
    action: "none"
  }
];

export default function Phishing() {
  const getRiskBadge = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "high":
        return <Badge variant="destructive">{risk}</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">{risk}</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">{risk}</Badge>;
      default:
        return <Badge variant="secondary">{risk}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case "active":
        return <Badge variant="destructive">Active</Badge>;
      case "un-active":
        return <Badge variant="destructive">Un-active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Phishing</h1>
        <p className="text-muted-foreground">Monitor and track phishing attempts and threats</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search URL..." 
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
                <TableHead className="text-xs font-medium">Timestamp</TableHead>
                <TableHead className="text-xs font-medium">Risk Rating</TableHead>
                <TableHead className="text-xs font-medium">Keyword</TableHead>
                <TableHead className="text-xs font-medium">Original Title</TableHead>
                <TableHead className="text-xs font-medium">Phishing Title</TableHead>
                <TableHead className="text-xs font-medium">Similarity (%)</TableHead>
                <TableHead className="text-xs font-medium">Status</TableHead>
                <TableHead className="text-xs font-medium">Tags</TableHead>
                <TableHead className="text-xs font-medium">Phishing Url</TableHead>
                <TableHead className="text-xs font-medium">Phishing Url (Status)</TableHead>
                <TableHead className="text-xs font-medium">Source</TableHead>
                <TableHead className="text-xs font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {phishingData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm">{item.timestamp}</TableCell>
                  <TableCell>{getRiskBadge(item.riskRating)}</TableCell>
                  <TableCell className="text-sm">{item.keyword}</TableCell>
                  <TableCell className="text-sm">{item.originalTitle}</TableCell>
                  <TableCell className="text-sm">{item.phishingTitle}</TableCell>
                  <TableCell className="text-sm">{item.similarity}</TableCell>
                  <TableCell>{getRiskBadge(item.status)}</TableCell>
                  <TableCell className="text-sm">{item.tags}</TableCell>
                  <TableCell className="text-sm">{item.phishingUrl}</TableCell>
                  <TableCell>{getStatusBadge(item.phishingUrlStatus)}</TableCell>
                  <TableCell className="text-sm">{item.source}</TableCell>
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
            Showing 1 to 5 of 46 results
          </p>
        </div>
      </Card>
    </div>
  );
}