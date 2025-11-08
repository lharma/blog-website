'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'

export default function Page() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    
    const fetchUser = async () => {
        try{
        const { data, error } = await supabase.auth.getUser()
        if (error) {
          toast.error('useer Error',error.message)
        }
        
        setUser(data?.user)
  
        // ✅ Redirect based on user state
        if (data?.user?.email) {
          router.push('/Dashboard')
        } else {
          router.push('/Landing')
        }
      }catch (error){
        toast.error('error',error.message)
      }
    }

    fetchUser()
  }, [router])

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500">Checking authentication...</p>
    </div>
  )
}
