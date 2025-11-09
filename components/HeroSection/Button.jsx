'use client'
import React from 'react'
import { supabase } from "@/lib/supabase/supabaseClient";
import Link from "next/link";
import { useEffect, useState } from "react";
const Button = ({bgColor}) => {
      const [user,setUser] = useState(null)
  useEffect(()=>{
    const fetchUser =  async ()=>{
      try{

    const {data:{user},error} = await supabase.auth.getUser()

    if(error){
     console.error('sorry can not find user')
    }
   setUser(user?.email || '')
  }catch(error){
    console.error(error.message)
  }
    }
fetchUser()

  },[])
  return (
    <>
      <Link href={user? '/Dashboard/postForm':'/api/auth/login'}>
      <button className={`w-fit  px-6 py-4 rounded-sm ${bgColor} text-white text-sm font-semibold`} >
        CREATE YOUR BLOG
      </button>
      </Link>
    </>
  )
}

export default Button
