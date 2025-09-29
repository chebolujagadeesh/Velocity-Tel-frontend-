import React, { useState } from 'react';
import { 
  User, CreditCard, Smartphone, Settings, Download, 
  Eye, EyeOff, Bell, Shield, Phone, Mail, MapPin 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const MyAccount: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, ST 12345',
    planName: 'Gaming Pro Plan',
    planPrice: 112,
    planDuration: '12 months',
    balance: 85.50,
    dataUsed: '8.2 GB',
    dataTotal: '15 GB',
    nextBilling: '2024-02-15',
    accountCreated: '2023-06-15'
  };

  const recentActivity = [
    { date: '2024-01-15', description: 'Account recharged', amount: '+$50.00' },
    { date: '2024-01-10', description: 'Monthly plan renewal', amount: '-$112.00' },
    { date: '2024-01-05', description: 'International add-on', amount: '-$15.00' },
    { date: '2023-12-28', description: 'Account recharged', amount: '+$25.00' },
  ];

  const bills = [
    { date: '2024-01-01', amount: '$112.00', status: 'Paid', download: true },
    { date: '2023-12-01', amount: '$112.00', status: 'Paid', download: true },
    { date: '2023-11-01', amount: '$112.00', status: 'Paid', download: true },
    { date: '2023-10-01', amount: '$112.00', status: 'Paid', download: true },
  ];

  const tabs = [
    { id: 'overview', name: 'Account Overview', icon: User },
    { id: 'billing', name: 'Billing & Usage', icon: CreditCard },
    { id: 'plan', name: 'Plan & Services', icon: Smartphone },
    { id: 'settings', name: 'Account Settings', icon: Settings },
  ];

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleDownloadBill = (date: string) => {
    toast({
      title: "Download Started",
      description: `Downloading bill for ${date}...`,
    });
  };

  const TabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Account Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary text-primary-foreground rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Account Balance</h3>
                <p className="text-3xl font-bold">${userData.balance}</p>
                <p className="text-sm opacity-80">Available credit</p>
              </div>
              <div className="bg-success text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Data Usage</h3>
                <p className="text-3xl font-bold">{userData.dataUsed}</p>
                <p className="text-sm opacity-80">of {userData.dataTotal} used</p>
              </div>
              <div className="bg-accent text-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Next Billing</h3>
                <p className="text-3xl font-bold">{new Date(userData.nextBilling).getDate()}</p>
                <p className="text-sm opacity-80">{new Date(userData.nextBilling).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Current Plan */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Current Plan</h3>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-medium text-foreground">{userData.planName}</h4>
                  <p className="text-muted-foreground">${userData.planPrice} / {userData.planDuration}</p>
                </div>
                <Button variant="outline">Change Plan</Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {recentActivity.slice(0, 5).map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                    <div>
                      <p className="font-medium text-foreground">{activity.description}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    <span className={`font-semibold ${activity.amount.startsWith('+') ? 'text-success' : 'text-foreground'}`}>
                      {activity.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'billing':
        return (
          <div className="space-y-8">
            {/* Billing Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Usage This Month</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data</span>
                    <span className="font-medium">{userData.dataUsed} / {userData.dataTotal}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Voice Minutes</span>
                    <span className="font-medium">Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Text Messages</span>
                    <span className="font-medium">Unlimited</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Payment Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Balance</span>
                    <span className="font-medium">${userData.balance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next Payment</span>
                    <span className="font-medium">${userData.planPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Due Date</span>
                    <span className="font-medium">{userData.nextBilling}</span>
                  </div>
                  <Button className="w-full mt-4">Add Funds</Button>
                </div>
              </div>
            </div>

            {/* Bill History */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Bill History</h3>
              <div className="space-y-3">
                {bills.map((bill, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                    <div>
                      <p className="font-medium text-foreground">{bill.date}</p>
                      <p className="text-sm text-muted-foreground">Monthly billing</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-foreground">{bill.amount}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        bill.status === 'Paid' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                      }`}>
                        {bill.status}
                      </span>
                      {bill.download && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownloadBill(bill.date)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'plan':
        return (
          <div className="space-y-8">
            {/* Current Plan Details */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Current Plan Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{userData.planName}</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Unlimited Nationwide Talk & Text</li>
                    <li>• 15GB High-Speed Data</li>
                    <li>• Gaming Optimized Network</li>
                    <li>• No Contracts Required</li>
                    <li>• 5G Network Access</li>
                  </ul>
                </div>
                <div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-2xl font-bold text-primary">${userData.planPrice}</p>
                    <p className="text-sm text-muted-foreground">per {userData.planDuration}</p>
                    <Button className="w-full mt-4">Change Plan</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Available Add-ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'International Calling', price: 15, description: 'Call 60+ countries' },
                  { name: 'Extra Data', price: 10, description: '5GB additional data' },
                  { name: 'Mobile Hotspot', price: 20, description: 'Unlimited hotspot usage' },
                  { name: 'Premium Support', price: 5, description: 'Priority customer service' },
                ].map((addon, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-foreground">{addon.name}</h4>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">${addon.price}/mo</p>
                        <Button variant="outline" size="sm">Add</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue={userData.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={userData.email} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue={userData.phone} />
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue={userData.address} />
                  </div>
                </div>
                <Button onClick={handleSaveProfile}>Save Changes</Button>
              </form>
            </div>

            {/* Security Settings */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Security Settings</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative">
                    <Input 
                      id="currentPassword" 
                      type={showPassword ? 'text' : 'password'} 
                      placeholder="Enter current password" 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" placeholder="Enter new password" />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                </div>
                <Button>Update Password</Button>
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                {[
                  'Email notifications for bills and payments',
                  'SMS alerts for usage warnings',
                  'Push notifications for account updates',
                  'Marketing emails and promotions'
                ].map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-muted-foreground">{option}</span>
                  </div>
                ))}
                <Button>Save Preferences</Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-secondary-foreground py-16">
        <div className="container-custom">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                My Account
              </h1>
              <p className="text-xl opacity-90">
                Welcome back, {userData.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border text-foreground hover:bg-muted'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Contact */}
              <div className="mt-8 bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">(855) 686-0102</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">support@velocitytel.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <TabContent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccount;