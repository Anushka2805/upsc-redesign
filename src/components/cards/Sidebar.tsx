import { LayoutDashboard, Calendar, User, BookOpen, FileText, Settings } from 'lucide-react'; // Example icons

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, current: true },
    { name: 'UPSC Calendar', icon: Calendar, current: false },
    { name: 'My Profile', icon: User, current: false },
    { name: 'Study Plan', icon: BookOpen, current: false },
    { name: 'Documents', icon: FileText, current: false },
    { name: 'Settings', icon: Settings, current: false },
  ];

  return (
    <div className="h-full bg-gray-800 text-white flex flex-col p-4 fixed w-64">
      {/* UPSC Portal Logo */}
      <div className="flex items-center space-x-2 pb-6 border-b border-gray-700 mb-6">
        {/* Replace with actual logo or text */}
        <span className="text-xl font-bold">UPSC Portal</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              item.current
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;