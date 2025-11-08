'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'
import Link from 'next/link'
import { AwardIcon } from 'lucide-react'

export default function page() {
  const router = useRouter()
  const[userInfor,setUserInfo] =useState({
    firstName:'',
    email:'',
    password:'',
  })
  const [loading, setLoading] = useState(false)
const [error,setError] = useState(null)

  const handleSignup = async (e) => {
  e.preventDefault()
    setLoading(true)

   const { data, error } = await supabase.auth.signUp({
  email: userInfor.email,
  password: userInfor.password,
  options: {
    data: {
      first_name: userInfor.firstName, // optional metadata
    },
  },
})

    console.log(error)
    if (error) {
  if (error.message.includes('already registered')) {
    toast.error('This email is already registered!')
  } else {
    toast.error(error.message)
  }
  setLoading(false)
  return
}

    toast.success('Account created! Please check your email to confirm.')
    router.push('/api/auth/login')
    setLoading(false)
  }
const handleChange =(e)=>{
    const{name,value}=e.target
    setUserInfo({
    
        ...userInfor,
        [name]:value
    })
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <div className="w-full max-w-md p-8 bg-white dark:bg-neutral-800 shadow-md rounded-2xl border border-gray-200 dark:border-neutral-700">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
          Create an account ✨
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              First Name
            </label>
            <input
              type="text"
              value={userInfor.firstName}
              name='firstName'
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Lamar dev"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name='email'
              value={userInfor.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Lamar@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={userInfor.password}
              name="password"
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-neutral-600 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
            
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Already have an account?{' '}
          <Link href="/api/auth/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
