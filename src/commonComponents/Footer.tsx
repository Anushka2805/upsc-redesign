// components/Footer.tsx
import { FC } from "react";
import { Separator } from "@/components/ui/separator";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-6 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300">
          <a href="#" className="hover:text-white transition">Website Policies</a>
          <Separator orientation="vertical" className="h-4 bg-gray-500" />
          <a href="#" className="hover:text-white transition">Help</a>
          <Separator orientation="vertical" className="h-4 bg-gray-500" />
          <a href="#" className="hover:text-white transition">Contact us</a>
          <Separator orientation="vertical" className="h-4 bg-gray-500" />
          <a href="#" className="hover:text-white transition">Web Information Manager</a>
          <Separator orientation="vertical" className="h-4 bg-gray-500" />
          <a href="#" className="hover:text-white transition">Feedback</a>
          <Separator orientation="vertical" className="h-4 bg-gray-500" />
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <Separator orientation="vertical" className="h-4 bg-gray-500" />
          <a href="#" className="hover:text-white transition">Disclaimer</a>
        </div>

        {/* Visitor Info */}
        
      </div>

      {/* Bottom text */}
      <div className="mt-4 text-center text-gray-500 text-xs">
        <p>
          Website Content Managed by © Content Owned by Union Public Service Commission, New Delhi, India.
        </p>
        <p>Last Updated: 30 Sep 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
