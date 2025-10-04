// This code is created in a single file for quick implementation on your website.
// It demonstrates the Dark Mode toggle and the side-by-side document summary feature.
"use client";
import React, { createContext, useContext, useEffect, useState, useMemo, ReactNode } from 'react';

// Shadcn/Lucide Icon and Component Imports
// (Assuming these are available in your project)
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, Target, Lightbulb, User, Moon, Sun } from 'lucide-react';

// ----------------------------------------------------------------------
// 1. DATA AND TYPE DEFINITIONS
// ----------------------------------------------------------------------

/**
 * TypeScript structure for a single document summary object.
 */
interface DocumentSummary {
  id: number;
  title: string;
  size: string;
  url: string;
  gist: string;
  keyPoints: string[];
  relevance: string;
}

/**
 * Hardcoded document summary data (3 documents).
 */
const documentsData: DocumentSummary[] = [
  // --- Document 1: Travel Allowance (TA) Instructions ---
  {
    id: 1,
    title: "Travel Allowance (TA) Instructions for Interviewees",
    size: "150 KB",
    url: "/docs/ta-instructions.pdf",
    gist: "Great news! While UPSC doesn't cover all your travel costs, they happily contribute towards your expenses to ease your financial burden. Understanding these rules ensures you get your reimbursement quickly and smoothly!",
    keyPoints: [
      "Reimbursement is limited to a **single Second Class (Mail) railway fare** by the shortest route (including sleeper charges).",
      "For road travel, you'll be paid **road mileage** or the actual cost, whichever is less, from your residence to the nearest station.",
      "**Halting Allowance** is provided only for specific delays, consecutive interviews, or tests—**not for the interview day itself**.",
      "If you are a Government employee, you **won't receive TA** if you use a privilege pass.",
      "Bring the **TA form in DUPLICATE, fully filled out**, to receive the cash payment on the spot (unless your candidature is provisional).",
    ],
    relevance: "This is crucial for every candidate summoned for an interview or Personality Test. Reading this prevents confusion and ensures you claim the maximum eligible amount for your travel.",
  },

  // --- Document 2: DAF Filling Guidelines ---
  {
    id: 2,
    title: "Detailed Application Form (DAF) Filling Guidelines",
    size: "95 KB",
    url: "/docs/daf-guidelines.pdf",
    gist: "Fantastic! You've cleared the written exam, and this guide is your roadmap to filling out the essential Detailed Application Form (DAF) correctly. Getting this right now is crucial for a smooth journey to your interview!",
    keyPoints: [
      "You must first **register** on the UPSC website before accessing the DAF modules.",
      "Use your Name, Roll Number (6 digits), Date of Birth, and a **valid, active email** for registration.",
      "The DAF has **SIX modules** (Personal, Educational, Parental, Employment, Documents, Final Submission).",
      "**Save each module**, but remember: **Once Final Submission is made, no online change is possible**.",
      "Some fields (Name, DOB, Father's Name, etc.) are **pre-populated and cannot be changed**; report discrepancies to the Commission separately.",
    ],
    relevance: "This is absolutely vital for candidates who have qualified for the Main/Interview stage. Follow these steps meticulously to avoid application rejection or delays!",
  },

  // --- Document 3: Ex-Servicemen Certificate ---
  {
    id: 3,
    title: "Age Concession Certificate for Armed Forces Personnel (Performa-IV)",
    size: "120 KB",
    url: "/docs/ex-servicemen-certificate.pdf",
    gist: "Great job on your service! This document contains the official certificates you need to claim the **age concession benefit** for direct recruitment posts. Use the correct form (A, B, or C) to ensure your experience counts!",
    keyPoints: [
      "**Form A** is for **Released/Retired Personnel**; requires certification that the release was *not* due to dismissal/misconduct.",
      "**Form B** is for **Serving Personnel** who are due for release within **one year**.",
      "**Form C** is for **Serving ECOS/SSCOs** on extended assignment, allowing release on **three months' notice**.",
      "Ensure the certificate is issued by the **Competent Authority** (e.g., Military Secretary Branch, Army Hqrs.).",
      "Serving personnel must provide an **undertaking** confirming they will produce documentary evidence of release upon selection.",
    ],
    relevance: "Mandatory for all serving, retired, or released Armed Forces personnel claiming age relaxation for direct UPSC recruitment posts.",
  },
];


// ----------------------------------------------------------------------
// 2. THEME CONTEXT AND HOOKS (Dark Mode Logic)
// ----------------------------------------------------------------------

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      // Check local storage, or system preference
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);
  
  const toggleTheme = () => {
    setThemeState(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ----------------------------------------------------------------------
// 3. HEADER COMPONENT (NAVBAR WITH TOGGLE)
// ----------------------------------------------------------------------

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            UPSC Document AI Tool
          </h1>
        </div>

        {/* Dark Mode Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
};


// ----------------------------------------------------------------------
// 4. MAIN DOCUMENT VIEWER COMPONENT
// ----------------------------------------------------------------------

const DocumentViewer: React.FC = () => {
  // State to track which document is currently selected for the detailed view
  const [selectedDocId, setSelectedDocId] = useState<number>(documentsData[0].id); 
  // Finds the current document data based on the selected ID
  const currentDoc: DocumentSummary | undefined = documentsData.find(doc => doc.id === selectedDocId);

  if (!currentDoc) {
      return (
        <div className="p-8 text-center text-red-500 dark:text-red-400">
            Document data not found.
        </div>
      );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        Forms & Downloads: Document Analysis
      </h1>
      
      {/* Document Selection Tabs Area (Card-like wrapper) */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg mb-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200 border-b dark:border-gray-700 pb-2">
            Select Document for Analysis
        </h2>
        <div className="flex flex-wrap gap-3">
          {documentsData.map((doc) => (
            <Button
              key={doc.id}
              variant={currentDoc.id === doc.id ? "default" : "secondary"}
              onClick={() => setSelectedDocId(doc.id)}
              className={`text-sm shadow-md transition-all duration-200 
                ${currentDoc.id === doc.id 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'}`}
            >
              <FileText className="w-4 h-4 mr-2" />
              {doc.title}
            </Button>
          ))}
        </div>
      </div>

      {/* 2-Column Layout: PDF Preview (60%) and AI Summary (40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        
        {/* LEFT SIDE (3/5 width): PDF Preview Mock Card */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
            <FileText className="w-5 h-5 mr-2 text-blue-500" /> 
            Live Document Preview: {currentDoc.title}
          </h2>
          
          <div className="h-[600px] w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-inner">
            {/* The PDF Preview Placeholder (Scrollable Area) */}
            <ScrollArea className="h-full p-6 bg-gray-100 dark:bg-gray-700 text-gray-500">
                <div className="text-center mb-6">
                    <p className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-100">
                        📄 **{currentDoc.title}**
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        *(Mock PDF Viewer - Simulating a scrollable view)*
                    </p>
                    {/* Download Button styled prominently in red */}
                    <Button 
                        onClick={() => window.open(currentDoc.url, '_blank')} 
                        variant="default"
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600 shadow-md"
                    >
                        <Download className="w-4 h-4 mr-2" /> Download Original ({currentDoc.size})
                    </Button>
                </div>
                {/* Visual mock of document content (Simulating PDF lines) */}
                <div className="space-y-4 p-4 border border-dashed border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`h-4 bg-gray-300 dark:bg-gray-600 rounded ${i % 3 === 0 ? 'w-full' : (i % 3 === 1 ? 'w-5/6' : 'w-3/4')}`}></div>
                    ))}
                </div>
            </ScrollArea>
          </div>
        </div>
        
        {/* RIGHT SIDE (2/5 width): AI Summary Card */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 flex items-center text-emerald-700 dark:text-emerald-400">
            <Target className="w-5 h-5 mr-2" /> 
            AI Summary: Key Insights
          </h2>
          
          <ScrollArea className="h-[600px] w-full p-2">
            <div className="space-y-6">
              
              {/* GIST Section (Blue Accent) */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/40 border border-l-4 border-l-blue-500 dark:border-blue-400 rounded-md shadow-sm">
                <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2" /> 
                    Gist / Overview
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">{currentDoc.gist}</p>
              </div>
              
              <Separator className="dark:bg-gray-700" />

              {/* KEY POINTS Section (Green Accent) */}
              <div>
                <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3 flex items-center">
                    <Target className="w-4 h-4 mr-2" /> 
                    Key Takeaways
                </h3>
                <ul className="list-disc space-y-3 text-gray-800 dark:text-gray-200 ml-4">
                  {currentDoc.keyPoints.map((point, index) => (
                    <li key={index} className="text-base font-medium">{point}</li>
                  ))}
                </ul>
              </div>

              <Separator className="dark:bg-gray-700" />

              {/* RELEVANCE Section (Yellow Accent) */}
              <div className="text-base p-4 bg-yellow-50 dark:bg-yellow-900/40 rounded-md border-l-4 border-l-yellow-600 dark:border-yellow-400">
                <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-1 flex items-center">
                    <User className="w-4 h-4 mr-2" /> 
                    Who Needs This?
                </h3>
                <p className="text-yellow-700 dark:text-yellow-200">{currentDoc.relevance}</p>
              </div>
              
            </div>
             <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
                *This summary was pre-processed using a custom-tuned LLM for the hackathon demo.
            </p>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 5. EXPORT THE MAIN APPLICATION WRAPPER
// ----------------------------------------------------------------------

// The default export wraps the Document Viewer in the Theme Provider.
const DocumentApp: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      {/* The main content area applies the dark/light background */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <DocumentViewer />
      </div>
    </ThemeProvider>
  );
};

export default DocumentApp;