"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";
export default function UPSCDashboard() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-lg font-semibold">UNION PUBLIC SERVICE COMMISSION</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Anushka</span>
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
            <span className="text-xs font-bold">AA</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </Button>
        </div>
      </header>
      <h2 className="text-2xl font-bold mb-6">Welcome, Aspirant</h2>
      {/* Grid layout */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Application Status */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <CheckCircle className="text-green-500" />
            <div>
              <p className="font-semibold">Submitted</p>
              <p className="text-sm text-muted-foreground">
                UPSC CSE 2025 <br /> Submitted on: 01 Jan 2025
              </p>
            </div>
          </CardContent>
        </Card>
        {/* Notifications */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <AlertCircle className="text-blue-500" /> Admit Card available
                </span>
                <span className="text-sm text-muted-foreground">15 Sep 2025</span>
              </li>
              <Separator />
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <AlertCircle className="text-blue-500" /> UPSC CSE 2025 results
                </span>
                <span className="text-sm text-muted-foreground">25 May 2025</span>
              </li>
              <Separator />
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <AlertCircle className="text-blue-500" /> New exam notification
                </span>
                <span className="text-sm text-muted-foreground">01 Jan 2025</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        {/* Examination */}
        <Card>
          <CardHeader>
            <CardTitle>Examination</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Prelims</span>
              <span>05 Jun 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Mains</span>
              <span>17 Sep 2025 (Delhi)</span>
            </div>
            <div className="flex justify-between">
              <span>Interview</span>
              <span>23 Nov 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Final Result</span>
              <span>30 Apr 2025</span>
            </div>
          </CardContent>
        </Card>
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Submitted application form</span>
              <span>01 Jan 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Payment of fees</span>
              <span>01 Jan 2025</span>
            </div>
            <div className="flex justify-between">
              <span>Uploaded documents</span>
              <span>01 Jan 2025</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}