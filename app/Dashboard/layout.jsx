'use client'

import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import { Toaster } from 'sonner'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  // Hide sidebar for postForm or detail pages (e.g., /Dashboard/post/[id], /Dashboard/profile/[id])
  const hidePostForm = ['/Dashboard/postForm'].includes(pathname)
  const hideSidebar = /^\/Dashboard\/[^/]+\/[^/]+$/.test(pathname)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Top Navigation */}
      <TopNav onToggleSidebar={() => setCollapsed(!collapsed)} />

      {/* Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        {!hidePostForm && !hideSidebar && (
          <aside
            className={`fixed top-16 left-0 h-[calc(100vh-4rem)] hidden md:block transition-all duration-300 
              ${collapsed ? 'w-20' : 'w-64'}
              bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 overflow-y-auto`}
          >
            <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
          </aside>
        )}

        {/* Main content */}
        <main
          className={`flex-1 transition-all duration-300 flex justify-end overflow-y-auto p-6
            ${hideSidebar || hidePostForm ? 'ml-0' : collapsed ? 'md:ml-20' : 'md:ml-64'}
          `}
        >
          {children}
        </main>

        <Toaster richColors position="top-right" />
      </div>
    </div>
  )
}
