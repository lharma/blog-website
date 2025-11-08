'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Settings,
  FileText,
  Palette,
  BookOpen,
  Eye,
  Menu,
  MessageSquare,
  FilePlus,
  DollarSign,
  BarChart2,
  LayoutDashboard,
} from 'lucide-react'


const SideNav = ({ collapsed, setCollapsed }) => {
  const pathname = usePathname()
 
  const navItems = [
      { icon: <FilePlus size={20} />, label: 'New Post', href: `/Dashboard/post` },
    { icon: <MessageSquare size={20} />, label: 'Comments', href: '/Dashboard/comments' },
    { icon: <DollarSign size={20} />, label: 'Earnings', href: '/Dashboard/earning' },
    { icon: <BarChart2 size={20} />, label: 'Stats', href: '/Dashboard/stats' },
    { icon: <LayoutDashboard size={20} />, label: 'Layout', href: '/Dashboard/layout' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/Dashboard/settings' },
    { icon: <FileText size={20} />, label: 'Pages', href: '/Dashboard/view' },
    { icon: <Palette size={20} />, label: 'Theme', href: '/Dashboard/theme' },
    { icon: <BookOpen size={20} />, label: 'Read', href: '/' },
    { icon: <Eye size={20} />, label: 'View', href: '/' },
  ]

  return (
    <div className="md:flex flex-col h-full">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Dashboard
          </h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Add Post Button */}
      <div className="px-3 py-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed ? (
          <Link href='/Dashboard/postForm'
            className="w-full flex items-center justify-center gap-2 py-5 bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-md"
          >
            <FilePlus size={18} /> Add Post
          </Link>
        ) : (
          <Link href='/Dashboard/postForm'
            className="w-full flex items-center justify-center py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl shadow-md"
            title="Add Post"
          >
            <FilePlus size={18} />
          </Link>
        )}
      </div>

      {/* Scrollable Nav Links */}
      <nav className="flex-1 overflow-y-auto px-3 py-2 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all
                ${collapsed ? 'justify-center' : ''}
                ${
                  isActive
                    ? 'bg-orange-50 dark:bg-gray-800 text-orange-500 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              {item.icon}
              {!collapsed && <span className="text-xl font-medium">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-500">
        {!collapsed ? `${new Date().getFullYear()} ©  by Lamar Dev` : '©'}
      </div>
    </div>
  )
}

export default SideNav
