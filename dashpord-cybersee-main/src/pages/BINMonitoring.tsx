import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye, CreditCard } from "lucide-react";

const binData = [
  {
    id: 1,
    bin: "424242",
    date: "2025-01-15",
    level: "Premium",
    cardNumber: "4242 **** **** 1234",
    cardExpiry: "12/28",
    action: "Monitor"
  },
  {
    id: 2,
    bin: "456789",
    date: "2025-01-15",
    level: "Gold",
    cardNumber: "4567 **** **** 5678",
    cardExpiry: "08/27",
    action: "Block"
  },
  {
    id: 3,
    bin: "512345",
    date: "2025-01-14",
    level: "Standard",
    cardNumber: "5123 **** **** 9012",
    cardExpiry: "03/26",
    action: "Alert"
  },
  {
    id: 4,
    bin: "378282",
    date: "2025-01-14",
    level: "Platinum",
    cardNumber: "3782 **** **** 3456",
    cardExpiry: "11/28",
    action: "Review"
  },
  {
    id: 5,
    bin: "601111",
    date: "2025-01-13",
    level: "Business",
    cardNumber: "6011 **** **** 7890",
    cardExpiry: "07/29",
    action: "Monitor"
  }
];

export default function BINMonitoring() {
  const getLevelBadge = (level: string) => {
    switch (level.toLowerCase()) {
      case "platinum":
        return <Badge className="bg-purple-600 text-white">{level}</Badge>;
      case "premium":
        return <Badge className="bg-cyber-blue text-white">{level}</Badge>;
      case "gold":
        return <Badge className="bg-warning text-warning-foreground">{level}</Badge>;
      case "business":
        return <Badge className="bg-success text-success-foreground">{level}</Badge>;
      case "standard":
        return <Badge variant="secondary">{level}</Badge>;
      default:
        return <Badge variant="outline">{level}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">BIN Monitoring</h1>
        <p className="text-muted-foreground">Monitor Bank Identification Numbers and card activities</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Card Number..." 
                className="pl-10 w-64"
              />
            </div>
            <Button>
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs font-medium">#</TableHead>
                <TableHead className="text-xs font-medium">BIN</TableHead>
                <TableHead className="text-xs font-medium">Date</TableHead>
                <TableHead className="text-xs font-medium">Level</TableHead>
                <TableHead className="text-xs font-medium">Card Number</TableHead>
                <TableHead className="text-xs font-medium">Card Expiry</TableHead>
                <TableHead className="text-xs font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {binData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/30">
                  <TableCell className="text-sm">{item.id}</TableCell>
                  <TableCell className="text-sm font-mono">{item.bin}</TableCell>
                  <TableCell className="text-sm">{item.date}</TableCell>
                  <TableCell>{getLevelBadge(item.level)}</TableCell>
                  <TableCell className="text-sm font-mono">{item.cardNumber}</TableCell>
                  <TableCell className="text-sm font-mono">{item.cardExpiry}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-center mt-8">
          <p className="text-muted-foreground text-center">
            No more BIN entries to display
          </p>
        </div>
      </Card>
    </div>
  );
}