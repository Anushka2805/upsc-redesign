// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SplashScreen } from "@/components/SplashScreen";
import Navbar from "@/commonComponents/NavBar";
import ChatbotIcon from "@/commonComponents/ChatbotIcon"; // 1. Import the ChatbotIcon

// Make sure "export default function" is exactly like this
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
          <ChatbotIcon /> {/* 2. Add the component here */}
        </ThemeProvider>
      </body>
    </html>
  );
}