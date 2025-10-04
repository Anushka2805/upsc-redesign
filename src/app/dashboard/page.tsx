import DashboardHeader from "@/components/cards/DashboardHeader";
import ExamProgressTracker from "@/components/cards/ExamProgressTracker";
import PersonalProfile from "@/components/cards/PersonalProfile";
import Sidebar from "@/components/cards/Sidebar";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      {/* ✅ Fixed Sidebar */}
      <Sidebar />

      {/* ✅ Main content area shifted right */}
      <main className="flex-1 ml-64 p-6">
        {/* Header Section */}
        <DashboardHeader />

        {/* Main Grid */}  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Left Column (Exam Tracker + Quick Actions) */}
          <div className="lg:col-span-2 space-y-8">
            <ExamProgressTracker />

            {/* Quick Actions */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer">
                  <p className="text-lg font-semibold">View UPSC Calendar</p>
                  <p className="text-sm text-blue-200">
                    Check all upcoming exams
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    My Study Plan
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Access your personalized plan
                  </p>
                </div>

                {/* You can add more cards similarly */}
              </div>
            </div>
          </div>

          {/* Right Column (Profile) */}
          <div className="lg:col-span-1 space-y-8">
            <PersonalProfile />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
