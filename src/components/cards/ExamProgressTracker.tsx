import { Calendar } from 'lucide-react';

const ExamProgressTracker = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
        Exam Progress Tracker
      </h2>

      {/* CSE Prelims 2026 Entry */}
      <div className="border p-4 rounded-lg mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-red-600">CSE Prelims 2026</h3>
          <div className="text-sm text-red-500 font-semibold">45 Days Left</div>
        </div>
        
        {/* Status Tag */}
        <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
          Form Available
        </span>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-600 mb-4">
          <p>Notification Date:</p>
          <p className="font-medium text-gray-800">15 Feb 2026</p>
          <p>Form Last Date:</p>
          <p className="font-medium text-red-600">15 Mar 2026</p>
        </div>

        {/* Action Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors flex justify-center items-center">
          Apply / Register Now <span className="ml-2">&rarr;</span>
        </button>
      </div>

      {/* Other Exam Entries (CDS, CSE Prelims 2025, etc.) would follow a similar pattern, adjusting colors/tags */}
      
    </div>
  );
};

export default ExamProgressTracker;