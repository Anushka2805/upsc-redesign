"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
  const router = useRouter();
  const [aadhaarVerified, setAadhaarVerified] = React.useState(false);

  const handleAadhaarVerify = () => {
    // Dummy Aadhaar verification
    setAadhaarVerified(true);
    alert("Aadhaar verified successfully ✅");
  };

  const handleRedirect = () => {
    router.push("/signin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="gap-2 name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your name" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="aadhaar">Aadhaar Number</Label>
              <div className="flex gap-2">
                <Input
                  id="aadhaar"
                  type="text"
                  placeholder="XXXX-XXXX-XXXX"
                  required
                />
                <Button
                  type="button"
                  variant={aadhaarVerified ? "secondary" : "default"}
                  onClick={handleAadhaarVerify}
                >
                  {aadhaarVerified ? "Verified" : "Verify"}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Gmail</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Set Password</Label>
              <Input id="password" type="password" placeholder="********" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>

          {/* Redirect for existing users */}
          <div className="text-center mt-4">
            <p className="text-sm mb-2">Already have an account?</p>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleRedirect}
            >
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}