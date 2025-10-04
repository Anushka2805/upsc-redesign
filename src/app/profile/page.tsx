// app/dashboard/profile/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  User,
  Mail,
  Smartphone,
  Calendar,
  MapPin,
} from 'lucide-react';

export default function MyProfilePage() {
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex items-center space-x-3">
        {/* Profile Icon and Title */}
        <User className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-bold">My Profile</h1>
      </div>

      <Card className="shadow-lg dark:bg-card dark:border-gray-800">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Personal Information</CardTitle>
          <p className="text-sm text-muted-foreground">Update your personal details</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Form Grid - Responsive Layout: 1 column on small screens, 2 columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <div className="relative">
                <Input
                  id="fullName"
                  placeholder="Rahul Kumar"
                  defaultValue="Rahul Kumar"
                  className="pl-10 dark:bg-input dark:border-gray-700"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  placeholder="rahul.kumar@email.com"
                  defaultValue="rahul.kumar@email.com"
                  className="pl-10 dark:bg-input dark:border-gray-700"
                  type="email"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Input
                  id="phone"
                  placeholder="+91 9876543210"
                  defaultValue="+91 9876543210"
                  className="pl-10 dark:bg-input dark:border-gray-700"
                  type="tel"
                />
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <div className="relative">
                <Input
                  id="dob"
                  defaultValue="05/15/1998"
                  className="pl-3 pr-10 dark:bg-input dark:border-gray-700"
                  readOnly // Placeholder for a DatePicker functionality
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Gender Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select defaultValue="Male">
                <SelectTrigger id="gender" className="dark:bg-input dark:border-gray-700">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="General">
                <SelectTrigger id="category" className="dark:bg-input dark:border-gray-700">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-800">
                  <SelectItem value="General">General</SelectItem>
                  <SelectItem value="OBC">OBC</SelectItem>
                  <SelectItem value="SC">SC</SelectItem>
                  <SelectItem value="ST">ST</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Address (Full Width) */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <Input
                id="address"
                placeholder="New Delhi, India"
                defaultValue="New Delhi, India"
                className="pl-10 dark:bg-input dark:border-gray-700"
              />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Save Changes Button */}
          <div className="flex justify-end pt-4">
            <Button className="bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/80">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}