import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Building2, Calendar, Shield } from "lucide-react";

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and profile information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <Card className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-cyber-blue text-white text-2xl">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-xl font-semibold">CyberSee Team</h3>
              <p className="text-sm text-muted-foreground">(CyberSee Company)</p>
              <p className="text-sm text-muted-foreground">cybersee@cybersee.io</p>
              <p className="text-xs text-muted-foreground mt-2">
                Last login: Thu, 24 Jul 2025 03:53:04
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-success">Security Verified</span>
            </div>
          </div>
        </Card>

        {/* Profile Information & Password Change */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Organization Profile</h2>
              <p className="text-sm text-muted-foreground">Update your organization profile</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Information */}
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Profile Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      defaultValue="CyberSee" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      defaultValue="Team" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="orgName">
                      Organization Name 
                      <span className="text-xs text-red-400 ml-1">(only admin can change)</span>
                    </Label>
                    <Input 
                      id="orgName" 
                      defaultValue="CyberSee Company" 
                      disabled
                      className="mt-1 bg-muted"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      defaultValue="cybersee@cybersee.io" 
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button className="bg-cyber-blue hover:bg-cyber-blue/90">
                  Save
                </Button>
              </div>

              {/* Password Change */}
              <div className="space-y-4">
                <h3 className="font-medium flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Password Change
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input 
                      id="currentPassword" 
                      type="password"
                      placeholder="Current Password" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input 
                      id="newPassword" 
                      type="password"
                      placeholder="New Password" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      type="password"
                      placeholder="Confirm Password" 
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button className="bg-cyber-blue hover:bg-cyber-blue/90">
                  Change Password
                </Button>
              </div>
            </div>
          </Card>

          {/* Account Actions */}
          <Card className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-destructive">Danger Zone</h3>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                </div>
                <Button variant="destructive">
                  Delete Account
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}