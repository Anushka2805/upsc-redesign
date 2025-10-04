import { Bell } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex justify-between items-start">
        {/* Greeting Section */}
        <div>
          <h1 className="text-3xl font-semibold mb-1">Hello, Aspirant!</h1>
          <p className="text-sm text-blue-200">
            Last Login: Saturday, 4 October, 2025
          </p>
        </div>
        {/* Notification Bell */}
        <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-colors">
          <Bell className="w-6 h-6" />
        </button>
      </div>

      {/* Metrics Cards - using flex-grow to evenly distribute space */}
      <div className="mt-6 pt-4 border-t border-blue-700 flex flex-wrap gap-4">
        {/* Metric 1: Exams Registered */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-blue-200 text-sm mb-1">Exams Registered</p>
          <p className="text-4xl font-bold">3</p>
        </div>
        {/* Metric 2: Results Pending */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-blue-200 text-sm mb-1">Results Pending</p>
          <p className="text-4xl font-bold">1</p>
        </div>
        {/* Metric 3: Next Exam In */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-blue-200 text-sm mb-1">Next Exam In</p>
          <p className="text-4xl font-bold text-yellow-400">45 Days</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;