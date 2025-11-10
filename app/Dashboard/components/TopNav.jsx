'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import { Menu, Search, X ,User2} from 'lucide-react'
import { supabase } from '@/lib/supabase/supabaseClient'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const TopNav = ({ onToggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
const handleLogout =async()=>{
  const {error}= await supabase.auth.signOut()
  if(!error) {
    router.push('/landingPage')
  }
} 
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-orange-600 flex items-center justify-between px-4 z-50 shadow">
      {/* Left Section: Logo + Menu Button */}
      <div className="flex items-center gap-3">
        {/* Hamburger for small screens */}
        <button
          onClick={() => {
            setMenuOpen(!menuOpen)
            onToggleSidebar?.()
          }}
          className="md:hidden text-white p-2 rounded-lg hover:bg-orange-700 transition"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            width={100}
            height={40}
            alt="Logo"
            className="rounded-full"
          />
          <h1 className="hidden sm:block text-lg font-semibold text-white">
            MyDashboard
          </h1>
        </div>
      </div>

      {/* Center: Search (hidden on small screens) */}
      <div className="hidden md:flex items-center relative w-1/3">
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-9 pr-4 py-2 rounded-md text-sm outline-none bg-white text-gray-700"
        />
      </div>

      {/* Right Section */}
      <nav>
        <ul className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer"><Link href='/userProfile'>
          <User2 />
          </Link> </li>
          <li className="hover:underline cursor-pointer"><Button onClick={handleLogout}>LogOut</Button></li>
        </ul>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-white text-gray-800 rounded-lg shadow-md md:hidden">
            <ul className="flex flex-col">
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Home</li>
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">profile</li>
              <li className="px-4 py-2 hover:bg-orange-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default TopNav
