"use client";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SplashScreen } from "@/components/SplashScreen";
import Navbar from "@/commonComponents/NavBar";
import ChatbotIcon from "@/commonComponents/ChatbotIcon";
import Sidebar from "@/components/cards/Sidebar";
import DashboardHeader from "@/components/cards/DashboardHeader";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensure client-only rendering
  }, []);

  if (!mounted) {
    // render empty body on server to avoid mismatch
    return (
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SplashScreen />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  // Paths jahan Navbar nahi dikhana
  const hideNavbarOn = ["/dashboard", "/signin", "/signup", "/calendar", "/profile", "/documents", "/settings"];

  // Paths jahan Sidebar dikhana hai
  const showSidebarOn = ["/dashboard", "/calendar", "/profile", "/documents", "/settings"];

  // Paths jahan DashboardHeader dikhana hai
  const showDashboardHeaderOn = ["/calendar", "/profile", "/documents", "/settings"];

  // Paths jahan SplashScreen nahi dikhana
  const hideSplashScreenOn = ["/dashboard", "/calendar", "/profile", "/documents", "/settings"];

  const showNavbar = !hideNavbarOn.includes(pathname);
  const showSidebar = showSidebarOn.some((path) => pathname.startsWith(path));
  const showDashboardHeader = showDashboardHeaderOn.some((path) => pathname.startsWith(path));
  const showSplashScreen = !hideSplashScreenOn.some((path) => pathname.startsWith(path));

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Conditionally show SplashScreen */}
          {showSplashScreen && <SplashScreen />}

          {/* Navbar */}
          {showNavbar && <Navbar />}

          {/* Sidebar */}
          {showSidebar && (
            <div className="fixed top-0 left-0 h-full w-64">
              <Sidebar />
            </div>
          )}

          {/* Main content */}
          <main className={`${showSidebar ? "ml-64" : "ml-0"} p-6`}>
            {showDashboardHeader && <DashboardHeader />}
            {children}
          </main>

          <ChatbotIcon />
        </ThemeProvider>
      </body>
    </html>
  );
}

