// app/dashboard/settings/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Settings, Bell, Mail, Smartphone, Lock } from 'lucide-react';

// Helper component for a single notification item
const NotificationItem = ({
  title,
  description,
  icon: Icon,
  id,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<React.HTMLAttributes<SVGElement>>;
  id: string;
}) => (
  <div className="flex items-center justify-between py-4 border-b last:border-b-0 dark:border-gray-800">
    <div className="flex items-start space-x-4">
      <Icon className="h-5 w-5 text-muted-foreground mt-1" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
    {/* Shadcn Switch component, dark mode friendly */}
    <Switch id={id} defaultChecked />
  </div>
);

export default function SettingsPage() {
  return (
    <div className="space-y-8 p-4 md:p-6">
      <div className="flex items-center space-x-3">
        <Settings className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      {/* 1. Notification Preferences Card */}
      <Card className="shadow-lg dark:bg-card dark:border-gray-800">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Bell className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl font-semibold">
              Notification Preferences
            </CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Manage how you receive updates about exams and deadlines
          </p>
        </CardHeader>
        <CardContent className="divide-y divide-gray-200 dark:divide-gray-800">
          <NotificationItem
            title="Email Notifications"
            description="Receive updates via email"
            icon={Mail}
            id="email-notif"
          />
          <NotificationItem
            title="SMS Notifications"
            description="Receive updates via SMS"
            icon={Smartphone}
            id="sms-notif"
          />
          <NotificationItem
            title="Exam Reminders"
            description="Get reminded 7 days before exam"
            icon={Bell}
            id="exam-reminders"
          />
          <NotificationItem
            title="Form Deadline Alerts"
            description="Alert 3 days before last date"
            icon={Bell}
            id="deadline-alerts"
          />
          <NotificationItem
            title="Result Announcements"
            description="Instant alerts for results"
            icon={Bell}
            id="result-announcements"
          />
          <div className="pt-6 flex justify-end">
            <Button className="bg-primary hover:bg-primary/90">Save Preferences</Button>
          </div>
        </CardContent>
      </Card>

      {/* 2. Security Section Card */}
      <Card className="shadow-lg dark:bg-card dark:border-gray-800">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl font-semibold">Security</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">
            Manage your password and security settings
          </p>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/5 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800">
            Change Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}