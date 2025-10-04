"use client";

import { Calendar } from "lucide-react";

const ExamProgressTracker = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-colors duration-300 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center text-gray-800 dark:text-gray-100">
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600 dark:text-blue-400" />
        Exam Progress Tracker
      </h2>

      {/* CSE Prelims 2026 Entry */}
      <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg mb-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-medium text-red-600 dark:text-red-400">
            CSE Prelims 2026
          </h3>
          <div className="text-sm font-semibold text-red-500 dark:text-red-300 mt-1 sm:mt-0">
            45 Days Left
          </div>
        </div>

        {/* Status Tag */}
        <span className="inline-block bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full mb-3">
          Form Available
        </span>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
          <p>Notification Date:</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">
            15 Feb 2026
          </p>
          <p>Form Last Date:</p>
          <p className="font-medium text-red-600 dark:text-red-400">
            15 Mar 2026
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors flex justify-center items-center text-sm sm:text-base">
          Apply / Register Now <span className="ml-2">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default ExamProgressTracker;
