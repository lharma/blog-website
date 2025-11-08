'use client'
import React, { useEffect, useState } from 'react'
import { supabase} from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'

const Inner = () => {
     const [userInfor,setUserInfo] =useState(null)
    useEffect(()=>{
    const fetchUser = async  ()=>{

        const {data:{user},error:newErro} = await supabase.auth.getUser()
        if(!user){
         toast.error(newErro.message)
        }
        setUserInfo(user)
    }
    fetchUser()
    },[])
    
    const dataFormat= new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  return (
     <div>
      <div  className='w-[80%] h-full p-5 ml-29  border-2 border-black z-50'>{
        userInfor?.email ||'Guest' ? (
            <p className='px-5 '> <strong className='font-extrabold'>
                {userInfor?.email}
                </strong> welcome the local time is {dataFormat} This page would be built tomorrow please wait small</p>
        ):(
            <p> please log in </p>
        )
        }</div>
    </div>
  )
}

export default Inner
