"use client";

import { User, Mail, Phone, Edit, FileText } from "lucide-react";

const PersonalProfile = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-colors duration-300 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-0">
          Personal Profile
        </h2>
        <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors">
          <Edit className="w-4 h-4 mr-1" />
          Edit Profile
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
        <User className="w-10 h-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 mx-auto sm:mx-0 mb-3 sm:mb-0" />
        <div className="text-center sm:text-left">
          <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
            Rajesh Kumar
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Applicant ID: UPSC2026789012
          </p>
        </div>
      </div>

      {/* Key Details Grid */}
      <div className="grid grid-cols-2 gap-y-3 text-sm mb-6">
        <div>
          <p className="text-gray-500 dark:text-gray-400">Age</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">26 years</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Gender</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">Male</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">Category</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">General</p>
        </div>
        <div>
          <p className="text-gray-500 dark:text-gray-400">PwBD Status</p>
          <p className="font-medium text-gray-800 dark:text-gray-100">No</p>
        </div>
      </div>

      {/* Document Completion Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <p className="font-semibold text-gray-700 dark:text-gray-200">
            Document Completion
          </p>
          <p className="font-medium text-gray-800 dark:text-gray-100">4/5</p>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div
            className="h-2 bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
            style={{ width: "80%" }} // 4/5 = 80%
          ></div>
        </div>
      </div>

      {/* Document Status List */}
      <div className="space-y-2 text-sm">
        <p className="font-semibold text-gray-700 dark:text-gray-200">
          Document Status
        </p>

        {/* Uploaded */}
        <div className="flex justify-between items-center">
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <FileText className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
            Photo
          </p>
          <span className="text-green-600 dark:text-green-400 font-medium">
            Uploaded
          </span>
        </div>

        {/* Pending */}
        <div className="flex justify-between items-center">
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <FileText className="w-4 h-4 mr-2 text-gray-400 dark:text-gray-500" />
            Age Certificate
          </p>
          <span className="text-orange-500 dark:text-orange-400 font-medium">
            Pending
          </span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 text-sm">
        <p className="font-semibold text-gray-700 dark:text-gray-200">
          Contact Information
        </p>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1 sm:mb-0">
            <Mail className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
            rajesh.kumar@email.com
          </div>
          <span className="text-green-600 dark:text-green-400 font-medium">
            Verified
          </span>
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1 sm:mb-0">
            <Phone className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
            +91 98765 43210
          </div>
          <span className="text-green-600 dark:text-green-400 font-medium">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;
