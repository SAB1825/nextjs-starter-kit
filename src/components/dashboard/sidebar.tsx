"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  HelpCircle,
  Menu,
  X,
  LucideIcon
} from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, href, isActive }) => (
  <Link 
    href={href} 
    className={`flex items-center p-2 rounded-lg hover:bg-gray-200 hover:text-black  dark:hover:bg-[#111111] dark:hover:text-white ${isActive ? 'bg-blue-600 text-white dark:bg-white dark:text-black' : 'hover:bg-[#11111] dark:hover:bg-[#111111]'}`}
  >
    <Icon className={`w-6 h-6 mr-3 ${isActive ? 'text-white dark:text-black' : 'text-gray-600 dark:text-white'}`} />
    <span className="text-sm">{label}</span>
  </Link>
);

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Users', href: '/users' },
    { icon: FileText, label: 'Reports', href: '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
  ];

  return (
    <>
      <button 
        className="fixed top-12 left-5 z-50 md:hidden p-2  rounded-full" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className=" " /> : <Menu className="" />}
      </button>

      <aside className={`fixed top-16 left-0 z-40 bg-white dark:bg-black w-64 h-[calc(100vh-4rem)] transition-transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 p-4 shadow-lg overflow-y-auto`}
      >
        <nav>
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <SidebarItem 
                  {...item} 
                  isActive={pathname === item.href}
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      {/* Main content area adjustment */}
      <div className={`transition-all ${isOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {/* This is where your main content will go */}
      </div>
    </>
  );
};

export default Sidebar;
