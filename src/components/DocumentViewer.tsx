// // components/DocumentViewer.tsx

// "use client";

// import React, { useState } from "react";
// import { documentsData, DocumentSummary } from "../data/documents";

// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";

// const DocumentViewer: React.FC = () => {
//   const [selectedDocId, setSelectedDocId] = useState<number>(documentsData[0].id);

//   const currentDoc: DocumentSummary | undefined = documentsData.find(
//     (doc) => doc.id === selectedDocId
//   );

//   if (!currentDoc) {
//     return (
//       <div className="p-8 text-center text-red-500">
//         Document data not found for ID: {selectedDocId}.
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         UPSC Forms & Downloads: Document Analyzer Demo
//       </h1>

//       {/* Document Selection Tabs */}
//       <div className="flex space-x-4 mb-6 border-b pb-2">
//         {documentsData.map((doc) => ( // ✅ no more 'any'
//           <Button
//             key={doc.id}
//             variant={currentDoc.id === doc.id ? "default" : "outline"}
//             onClick={() => setSelectedDocId(doc.id)}
//             className="text-sm shadow-md"
//           >
//             {doc.title} ({doc.size})
//           </Button>
//         ))}
//       </div>

//       {/* 2-Column Layout */}
//       <div className="grid grid-cols-5 gap-6">
//         {/* LEFT: Mock PDF */}
//         <div className="col-span-3">
//           <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-1">
//             Live Preview: {currentDoc.title}
//           </h2>
//           <div className="h-[700px] w-full border rounded-lg overflow-hidden shadow-xl bg-white">
//             <ScrollArea className="h-full p-8 bg-gray-100 text-gray-500">
//               <div className="text-center mb-6">
//                 <p className="text-xl font-medium mb-2">📄 {currentDoc.title}</p>
//                 <p className="text-lg">(Mock PDF Viewer)</p>
//                 <Button
//                   onClick={() => window.open(currentDoc.url, "_blank")}
//                   variant="secondary"
//                   className="mt-4 bg-red-100 hover:bg-red-200 text-red-600 border-red-300"
//                 >
//                   ⬇️ Download Original PDF
//                 </Button>
//               </div>
//             </ScrollArea>
//           </div>
//         </div>

//         {/* RIGHT: AI Summary */}
//         <div className="col-span-2">
//           <h2 className="text-xl font-semibold mb-3 text-emerald-700 border-b pb-1">
//             🧠 AI Summary & Key Points
//           </h2>
//           <ScrollArea className="h-[700px] w-full p-4 border rounded-lg bg-emerald-50 shadow-xl">
//             <div className="space-y-6">
//               {/* Gist */}
//               <div className="p-4 bg-white border border-l-4 border-l-blue-500 rounded-md shadow-sm">
//                 <h3 className="text-xl font-bold text-blue-700 mb-1">🎯 Gist</h3>
//                 <p className="text-gray-700 italic">{currentDoc.gist}</p>
//               </div>

//               <Separator />

//               {/* Key Points */}
//               <div>
//                 <h3 className="text-xl font-bold text-green-700 mb-3">💡 Key Takeaways</h3>
//                 <ul className="list-disc space-y-3 text-gray-800 ml-4">
//                   {currentDoc.keyPoints.map((point, index) => (
//                     <li key={index} className="text-base font-medium">
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <Separator />

//               {/* Relevance */}
//               <div className="text-base p-4 bg-yellow-50 rounded-md border-l-4 border-l-yellow-600">
//                 <h3 className="font-bold text-yellow-800 mb-1">📌 Who Needs This?</h3>
//                 <p className="text-yellow-700">{currentDoc.relevance}</p>
//               </div>
//             </div>
//           </ScrollArea>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentViewer;
