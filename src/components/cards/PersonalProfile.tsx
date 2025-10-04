import { User, Mail, Phone, Edit, FileText } from "lucide-react";

const PersonalProfile = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-lg font-semibold">Personal Profile</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium">
          <Edit className="w-4 h-4 mr-1" />
          Edit Profile
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4 mb-6">
        <User className="w-10 h-10 p-2 rounded-full bg-gray-100 text-gray-500" />
        <div>
          <p className="text-xl font-semibold">Rajesh Kumar</p>
          <p className="text-xs text-gray-500">Applicant ID: UPSC2026789012</p>
        </div>
      </div>

      {/* Key Details Grid */}
      <div className="grid grid-cols-2 gap-y-3 text-sm mb-6">
        <div><p className="text-gray-500">Age</p><p className="font-medium">26 years</p></div>
        <div><p className="text-gray-500">Gender</p><p className="font-medium">Male</p></div>
        <div><p className="text-gray-500">Category</p><p className="font-medium">General</p></div>
        <div><p className="text-gray-500">PwBD Status</p><p className="font-medium">No</p></div>
      </div>

      {/* Document Completion Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
            <p className="font-semibold">Document Completion</p>
            <p className="font-medium">4/5</p>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
            <div 
                className="h-2 bg-blue-600 rounded-full" 
                style={{ width: '80%' }} // 4/5 = 80%
            ></div>
        </div>
      </div>

      {/* Document Status List */}
      <div className="space-y-2 text-sm">
        <p className="font-semibold text-gray-700">Document Status</p>
        {/* Status Item - Uploaded (Green) */}
        <div className="flex justify-between items-center">
            <p className="flex items-center text-gray-600"><FileText className="w-4 h-4 mr-2 text-gray-400" />Photo</p>
            <span className="text-green-600 font-medium">Uploaded</span>
        </div>
        {/* Status Item - Pending (Orange) */}
        <div className="flex justify-between items-center">
            <p className="flex items-center text-gray-600"><FileText className="w-4 h-4 mr-2 text-gray-400" />Age Certificate</p>
            <span className="text-orange-500 font-medium">Pending</span>
        </div>
      </div>
      
      {/* Contact Info (below the document status) */}
      <div className="mt-6 border-t pt-4 space-y-2 text-sm">
        <p className="font-semibold text-gray-700">Contact Information</p>
        {/* Email */}
        <div className="flex justify-between items-center">
            <div className='flex items-center text-gray-600'>
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                rajesh.kumar@email.com
            </div>
            <span className="text-green-600 font-medium">Verified</span>
        </div>
        {/* Phone */}
        <div className="flex justify-between items-center">
            <div className='flex items-center text-gray-600'>
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                +91 98765 43210
            </div>
            <span className="text-green-600 font-medium">Verified</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;