import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Shield, BookOpen, Trophy, User, LogOut } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8" />
              <span className="font-bold text-xl">SecureLearn</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/courses" className="flex items-center space-x-1 hover:text-indigo-200">
                <BookOpen className="w-5 h-5" />
                <span>Courses</span>
              </Link>
              <Link to="/achievements" className="flex items-center space-x-1 hover:text-indigo-200">
                <Trophy className="w-5 h-5" />
                <span>Achievements</span>
              </Link>
              <Link to="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </Link>
              <button className="flex items-center space-x-1 hover:text-indigo-200">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;