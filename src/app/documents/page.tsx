"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Upload, RefreshCw } from "lucide-react";

type DocumentStatus = "uploaded" | "verified" | "pending";

interface Document {
  id: string;
  label: string;
  required?: boolean;
  sizeKb?: number;
  uploadedOn?: string;
  status: DocumentStatus;
  fileType?: string;
  dimensions?: string;
}

const initialDocuments: Document[] = [
  {
    id: "photo",
    label: "Photograph",
    required: true,
    sizeKb: 45,
    uploadedOn: "15/9/2025",
    status: "uploaded",
    fileType: "JPG",
    dimensions: "3.5 cm × 3.5 cm (350 × 350 pixels)",
  },
  {
    id: "signature",
    label: "Signature",
    required: true,
    sizeKb: 12,
    uploadedOn: "15/9/2025",
    status: "uploaded",
    fileType: "JPG",
    dimensions: "4 cm × 2 cm (400 × 200 pixels)",
  },
  {
    id: "idProof",
    label: "ID Proof (Aadhar Card)",
    required: true,
    sizeKb: 230,
    uploadedOn: "10/9/2025",
    status: "verified",
    fileType: "PDF",
    dimensions: "maximum 300 KB",
  },
  {
    id: "categoryCertificate",
    label: "Category Certificate",
    status: "pending",
  },
  {
    id: "pwbdCertificate",
    label: "PwBD Certificate",
    status: "pending",
  },
];

export default function DocumentManagementPage() {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
const handleUpload = (id: string) => {
  setDocuments((prev) =>
    prev.map((doc) =>
      doc.id === id ? { ...doc, status: "uploaded", uploadedOn: new Date().toLocaleDateString() } : doc
    )
  );
};

  const handleReupload = (id: string) => {
    alert(`Re-upload clicked for ${id}`);
  };

  

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-8 font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-xl font-semibold">Document Management</h1>

      <section className="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h2 className="font-semibold mb-3">Upload Required Documents</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          Ensure all documents meet UPSC specifications (size, format, dimensions)
        </p>

        <ul className="space-y-4">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className={`flex items-center justify-between rounded-md border p-4 ${
                doc.status === "verified"
                  ? "bg-green-50 dark:bg-green-900 border-green-300 dark:border-green-700"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-3-3v6m9-7v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h7l5 5z"
                  />
                </svg>

                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{doc.label}</p>
                    {doc.required && (
                      <span className="text-xs font-semibold bg-red-600 text-white rounded px-2 py-0.5">
                        Required
                      </span>
                    )}
                  </div>

                  {doc.sizeKb && doc.uploadedOn && (
                    <p className="text-xs text-gray-400 dark:text-gray-400">
                      {doc.sizeKb} KB · Uploaded on {doc.uploadedOn}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {doc.status === "uploaded" && (
                  <>
                    <button
                      onClick={() => handleReupload(doc.id)}
                      className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-xs flex items-center space-x-1"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Re-upload</span>
                    </button>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 select-none text-gray-800 dark:text-gray-300">
                      Uploaded
                    </span>
                  </>
                )}
                {doc.status === "verified" && (
                  <>
                    <button
                      className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white flex items-center space-x-1 text-xs"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <span className="text-xs bg-green-600 rounded px-2 py-0.5 select-none text-white">
                      Verified
                    </span>
                  </>
                )}
                {doc.status === "pending" && (
                  <>
                    <span className="text-xs bg-gray-200 dark:bg-gray-700 rounded px-2 py-0.5 select-none mr-2 text-gray-800 dark:text-gray-300">
                      Pending
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpload(doc.id)}
                      className="text-xs flex items-center space-x-1"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Upload</span>
                    </Button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h2 className="font-semibold mb-2">Document Guidelines</h2>
        <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1">
          <li>
            Photograph: JPG format, 40-100 KB, dimensions 3.5 cm × 3.5 cm (350 ×
            350 pixels)
          </li>
          <li>
            Signature: JPG format, 10-40 KB, dimensions 4 cm × 2 cm (400 × 200
            pixels)
          </li>
          <li>ID Proof: PDF format, maximum 300 KB</li>
        </ul>
      </section>
    </main>
  );
}
