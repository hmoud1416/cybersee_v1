import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Eye, X, Ticket, AlertCircle } from "lucide-react";

const takeDownData = [
  {
    id: 1,
    ticketNumber: "TD-2025-001",
    user: "Security Team Alpha",
    fakeUrl: "https://fake-banking-secure.com",
    type: "Domain",
    dataSource: "Threat Intelligence",
    step: "Investigation",
    requestDate: "2025-01-20 10:30:00",
    options: ["close", "ticket", "delete"]
  },
  {
    id: 2,
    ticketNumber: "TD-2025-002",
    user: "Brand Protection Unit",
    fakeUrl: "https://crypto-scam-exchange.net",
    type: "Phishing",
    dataSource: "User Report",
    step: "Pending Review",
    requestDate: "2025-01-19 14:45:30",
    options: ["close", "ticket", "delete"]
  },
  {
    id: 3,
    ticketNumber: "TD-2025-003",
    user: "Cybersecurity Analyst",
    fakeUrl: "https://malicious-social-app.org",
    type: "Malware",
    dataSource: "Automated Scan",
    step: "Active Takedown",
    requestDate: "2025-01-18 09:15:22",
    options: ["close", "ticket", "delete"]
  },
  {
    id: 4,
    ticketNumber: "TD-2025-004",
    user: "Threat Researcher",
    fakeUrl: "https://healthcare-phish.med",
    type: "Domain",
    dataSource: "Security Feed",
    step: "Completed",
    requestDate: "2025-01-17 16:22:45",
    options: ["close", "ticket", "delete"]
  },
  {
    id: 5,
    ticketNumber: "TD-2025-005",
    user: "Brand Security Team",
    fakeUrl: "https://fake-ecommerce-store.shop",
    type: "Brand Abuse",
    dataSource: "Customer Report",
    step: "Legal Review",
    requestDate: "2025-01-16 11:30:18",
    options: ["close", "ticket", "delete"]
  }
];

export default function TakeDown() {
  const getStepBadge = (step: string) => {
    switch (step.toLowerCase().replace(" ", "")) {
      case "investigation":
        return <Badge className="bg-cyber-blue text-white">{step}</Badge>;
      case "pendingreview":
        return <Badge className="bg-warning text-warning-foreground">{step}</Badge>;
      case "activetakedown":
        return <Badge className="bg-cyan-600 text-white">{step}</Badge>;
      case "completed":
        return <Badge className="bg-success text-success-foreground">{step}</Badge>;
      case "legalreview":
        return <Badge className="bg-purple-600 text-white">{step}</Badge>;
      default:
        return <Badge variant="secondary">{step}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type.toLowerCase()) {
      case "domain":
        return <Badge className="bg-blue-600 text-white">{type}</Badge>;
      case "phishing":
        return <Badge variant="destructive">{type}</Badge>;
      case "malware":
        return <Badge className="bg-red-600 text-white">{type}</Badge>;
      case "brand abuse":
        return <Badge className="bg-orange-600 text-white">{type}</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Take Down</h1>
        <p className="text-muted-foreground">Manage takedown requests and threat mitigation</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Button className="bg-cyber-blue hover:bg-cyber-blue/90">
          <Plus className="w-4 h-4 mr-2" />
          Request Take Down
        </Button>
        <Button variant="outline" className="bg-teal-600 text-white hover:bg-teal-700">
          Types List
        </Button>
        <Button variant="outline" className="bg-red-600 text-white hover:bg-red-700">
          Statuses List
        </Button>
        <Button variant="outline">
          DataSources List
        </Button>
        <div className="flex items-center gap-2 ml-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
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
                <TableHead className="text-xs font-medium">Ticket Number</TableHead>
                <TableHead className="text-xs font-medium">User</TableHead>
                <TableHead className="text-xs font-medium">Fake Url</TableHead>
                <TableHead className="text-xs font-medium">Type</TableHead>
                <TableHead className="text-xs font-medium">Data Source</TableHead>
                <TableHead className="text-xs font-medium">Step</TableHead>
                <TableHead className="text-xs font-medium">Request Date</TableHead>
                <TableHead className="text-xs font-medium">Options</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {takeDownData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm font-mono">{item.ticketNumber}</TableCell>
                  <TableCell className="text-sm">{item.user}</TableCell>
                  <TableCell className="text-sm max-w-xs truncate font-mono">{item.fakeUrl}</TableCell>
                  <TableCell>{getTypeBadge(item.type)}</TableCell>
                  <TableCell className="text-sm">{item.dataSource}</TableCell>
                  <TableCell>{getStepBadge(item.step)}</TableCell>
                  <TableCell className="text-sm">{item.requestDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 px-2 bg-teal-600 text-white hover:bg-teal-700"
                      >
                        <X className="w-3 h-3 mr-1" />
                        Close
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 px-2 bg-cyber-blue text-white hover:bg-cyber-blue/90"
                      >
                        <Ticket className="w-3 h-3 mr-1" />
                        Ticket
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 px-2 bg-red-600 text-white hover:bg-red-700"
                      >
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-center mt-8">
          <p className="text-muted-foreground text-center">
            No more takedown requests to display
          </p>
        </div>
      </Card>
    </div>
  );
}