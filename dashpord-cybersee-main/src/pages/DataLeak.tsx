import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Filter, Eye, Share } from "lucide-react";

const dataLeakData = [
  {
    id: 1,
    url: "1",
    username: "Asem1234",
    password: "A 12333",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 2,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 3,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 4,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 5,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 6,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 7,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 8,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 9,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  },
  {
    id: 10,
    url: "1",
    username: "---",
    password: "A1*)*",
    sources: "Low",
    tags: "none",
    lastSeen: "2025-05-20 ()",
    firstSeen: "2025-05-20",
    score: "High",
    keyword: "asem",
    type: "domain",
    status: "Pending",
    reason: "Malicious",
    action: "none"
  }
];

export default function DataLeak() {
  const getSourcesBadge = (sources: string) => {
    switch (sources.toLowerCase()) {
      case "high":
        return <Badge variant="destructive">{sources}</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">{sources}</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">{sources}</Badge>;
      default:
        return <Badge variant="secondary">{sources}</Badge>;
    }
  };

  const getScoreBadge = (score: string) => {
    switch (score.toLowerCase()) {
      case "high":
        return <Badge variant="destructive">{score}</Badge>;
      case "medium":
        return <Badge className="bg-warning text-warning-foreground">{score}</Badge>;
      case "low":
        return <Badge className="bg-success text-success-foreground">{score}</Badge>;
      default:
        return <Badge variant="secondary">{score}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case "resolved":
        return <Badge className="bg-success text-success-foreground">Resolved</Badge>;
      case "active":
        return <Badge variant="destructive">Active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Data Leak</h1>
        <p className="text-muted-foreground">Monitor and track data leaks and credential compromises</p>
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
                <TableHead className="text-xs font-medium">Id</TableHead>
                <TableHead className="text-xs font-medium">url</TableHead>
                <TableHead className="text-xs font-medium">username</TableHead>
                <TableHead className="text-xs font-medium">password</TableHead>
                <TableHead className="text-xs font-medium">sources</TableHead>
                <TableHead className="text-xs font-medium">tags</TableHead>
                <TableHead className="text-xs font-medium">last seen</TableHead>
                <TableHead className="text-xs font-medium">first seen</TableHead>
                <TableHead className="text-xs font-medium">score</TableHead>
                <TableHead className="text-xs font-medium">Keyword</TableHead>
                <TableHead className="text-xs font-medium">Type</TableHead>
                <TableHead className="text-xs font-medium">status</TableHead>
                <TableHead className="text-xs font-medium">reason</TableHead>
                <TableHead className="text-xs font-medium">action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dataLeakData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm">{item.url}</TableCell>
                  <TableCell className="text-sm font-mono">{item.username}</TableCell>
                  <TableCell className="text-sm font-mono">{item.password}</TableCell>
                  <TableCell>{getSourcesBadge(item.sources)}</TableCell>
                  <TableCell className="text-sm">{item.tags}</TableCell>
                  <TableCell className="text-sm">{item.lastSeen}</TableCell>
                  <TableCell className="text-sm">{item.firstSeen}</TableCell>
                  <TableCell>{getScoreBadge(item.score)}</TableCell>
                  <TableCell className="text-sm">{item.keyword}</TableCell>
                  <TableCell className="text-sm">{item.type}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell className="text-sm">{item.reason}</TableCell>
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
            {[1, 2, 3].map((page) => (
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
            Showing 1 to 10 of 26 results
          </p>
        </div>
      </Card>
    </div>
  );
}