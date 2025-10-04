// // data/documents.ts

// /**
//  * Define the TypeScript structure for a single document summary object.
//  */
// export interface DocumentSummary {
//   id: number;
//   title: string;
//   size: string;
//   url: string;
//   gist: string;
//   keyPoints: string[];
//   relevance: string;
// }

// /**
//  * The array containing all hardcoded document summaries.
//  * The 'as DocumentSummary[]' ensures the array conforms to the defined type.
//  */
// export const documentsData: DocumentSummary[] = [
//   // --- DOCUMENT 1: Travel Allowance ---
//   {
//     id: 1,
//     title: "Travel Allowance (TA) Instructions for Interviewees",
//     size: "150 KB",
//     url: "/docs/ta-instructions.pdf",
//     gist: "Great news! While UPSC doesn't cover all your travel costs, they happily contribute towards your expenses to ease your financial burden. Understanding these rules ensures you get your reimbursement quickly and smoothly!",
//     keyPoints: [
//       "Reimbursement is limited to a **single Second Class (Mail) railway fare** by the shortest route (including sleeper charges).",
//       "For road travel, you'll be paid **road mileage** or the actual cost, whichever is less, from your residence to the nearest station.",
//       "**Halting Allowance** is provided only for specific delays, consecutive interviews, or tests—**not for the interview day itself**.",
//       "If you are a Government employee, you **won't receive TA** if you use a privilege pass.",
//       "Bring the **TA form in DUPLICATE, fully filled out**, to receive the cash payment on the spot (unless your candidature is provisional).",
//     ],
//     relevance: "This is crucial for every candidate summoned for an interview or Personality Test. Reading this prevents confusion and ensures you claim the maximum eligible amount for your travel.",
//   },

//   // --- DOCUMENT 2: DAF Guidelines ---
//   {
//     id: 2,
//     title: "Detailed Application Form (DAF) Filling Guidelines",
//     size: "95 KB",
//     url: "/docs/daf-guidelines.pdf",
//     gist: "Fantastic! You've cleared the written exam, and this guide is your roadmap to filling out the essential Detailed Application Form (DAF) correctly. Getting this right now is crucial for a smooth journey to your interview!",
//     keyPoints: [
//       "You must first **register** on the UPSC website before accessing the DAF modules.",
//       "Use your Name, Roll Number (6 digits), Date of Birth, and a **valid, active email** for registration.",
//       "The DAF has **SIX modules** (Personal, Educational, Parental, Employment, Documents, Final Submission).",
//       "**Save each module**, but remember: **Once Final Submission is made, no online change is possible**.",
//       "Some fields (Name, DOB, Father's Name, etc.) are **pre-populated and cannot be changed**; report discrepancies to the Commission separately.",
//     ],
//     relevance: "This is absolutely vital for candidates who have qualified for the Main/Interview stage. Follow these steps meticulously to avoid application rejection or delays!",
//   },

//   // --- DOCUMENT 3: Ex-Servicemen Certificate ---
//   {
//     id: 3,
//     title: "Age Concession Certificate for Armed Forces Personnel (Performa-IV)",
//     size: "120 KB",
//     url: "/docs/ex-servicemen-certificate.pdf",
//     gist: "Great job on your service! This document contains the official certificates you need to claim the **age concession benefit** for direct recruitment posts. Use the correct form (A, B, or C) to ensure your experience counts!",
//     keyPoints: [
//       "**Form A** is for **Released/Retired Personnel**; requires certification that the release was *not* due to dismissal/misconduct.",
//       "**Form B** is for **Serving Personnel** who are due for release within **one year**.",
//       "**Form C** is for **Serving ECOS/SSCOs** on extended assignment, allowing release on **three months' notice**.",
//       "Ensure the certificate is issued by the **Competent Authority** (e.g., Military Secretary Branch, Army Hqrs.).",
//       "Serving personnel must provide an **undertaking** confirming they will produce documentary evidence of release upon selection.",
//     ],
//     relevance: "Mandatory for all serving, retired, or released Armed Forces personnel claiming age relaxation for direct UPSC recruitment posts.",
//   },
// ];