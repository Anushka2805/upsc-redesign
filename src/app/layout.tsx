// src/app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SplashScreen } from "@/components/SplashScreen";
import Navbar from "@/commonComponents/NavBar";

// Make sure "export default function" is exactly like this
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SplashScreen />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}