import { 
  Shield, 
  BarChart3, 
  AlertTriangle, 
  Database, 
  Users, 
  Settings, 
  LogOut,
  FileText,
  Eye,
  Wifi,
  ChevronDown,
  Globe,
  UserCheck,
  Smartphone
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
];

const monitoringItems = [
  { title: "Stealer Log", url: "/stealer-log", icon: Database },
  { title: "BIN Monitoring", url: "/bin-monitoring", icon: Eye },
  { title: "Domain Monitoring", url: "/domain-monitoring", icon: Globe },
  { title: "Users Monitoring", url: "/users-monitoring", icon: UserCheck },
  { title: "Apps Monitoring", url: "/apps-monitoring", icon: Smartphone },
  { title: "Phishing", url: "/phishing", icon: AlertTriangle },
  { title: "Data Leak", url: "/data-leak", icon: Database },
];

const configItems = [
  { title: "Configurations", url: "/configurations", icon: Settings },
  { title: "TakeDown", url: "/takedown", icon: FileText },
  { title: "Profile", url: "/profile", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";
  
  const [monitoringOpen, setMonitoringOpen] = useState(true);

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium border-r-2 border-primary" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  const isAnyMonitoringActive = monitoringItems.some(item => isActive(item.url));

  return (
    <Sidebar
      className={`border-r border-sidebar-border ${collapsed ? "w-14" : "w-60"}`}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-sidebar-foreground">
              CyberSee
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-sidebar">
        {/* Main Items */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Monitoring Dropdown */}
        <SidebarGroup>
          <Collapsible open={monitoringOpen} onOpenChange={setMonitoringOpen}>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton 
                className={`w-full justify-between hover:bg-sidebar-accent/50 ${
                  isAnyMonitoringActive ? "bg-sidebar-accent text-sidebar-primary font-medium" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {!collapsed && <span>Monitoring</span>}
                </div>
                {!collapsed && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${monitoringOpen ? "rotate-180" : ""}`} />
                )}
              </SidebarMenuButton>
            </CollapsibleTrigger>
            
            {!collapsed && (
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="ml-4">
                    {monitoringItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink 
                            to={item.url} 
                            end 
                            className={getNavCls}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            )}
          </Collapsible>
        </SidebarGroup>

        {/* Configuration Items */}
        <SidebarGroup className="mt-8">
          <SidebarGroupContent>
            <SidebarMenu>
              {configItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-destructive hover:bg-destructive/10">
                  <LogOut className="w-4 h-4" />
                  {!collapsed && <span>Logout</span>}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}