import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Phishing from "./pages/Phishing";
import DataLeak from "./pages/DataLeak";
import StealerLog from "./pages/StealerLog";
import BINMonitoring from "./pages/BINMonitoring";
import DomainMonitoring from "./pages/DomainMonitoring";
import UsersMonitoring from "./pages/UsersMonitoring";
import AppsMonitoring from "./pages/AppsMonitoring";
import Configurations from "./pages/Configurations";
import TakeDown from "./pages/TakeDown";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/phishing" element={<Phishing />} />
            <Route path="/data-leak" element={<DataLeak />} />
            <Route path="/stealer-log" element={<StealerLog />} />
            <Route path="/bin-monitoring" element={<BINMonitoring />} />
            <Route path="/domain-monitoring" element={<DomainMonitoring />} />
            <Route path="/users-monitoring" element={<UsersMonitoring />} />
            <Route path="/apps-monitoring" element={<AppsMonitoring />} />
            <Route path="/configurations" element={<Configurations />} />
            <Route path="/takedown" element={<TakeDown />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
