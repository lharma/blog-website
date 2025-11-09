'use client'
import React, { useEffect, useState } from 'react'
import { Image as LucideImage ,User2,LogOut} from 'lucide-react'
import Button2 from './../HeroSection/Button'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo.png'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
const NavBar = () => {
    const [user,setUser]= useState(null)
    const router = useRouter()
    const pathname = usePathname()
    const hideNavbar = ['/api/auth/login','/api/auth/SignUp','/Dashboard'].includes(pathname)
    const hdieDashbord =pathname.startsWith('/Dashboard')
useEffect(()=>{
    const fethUser = async()=>{
        try{

            const {data:{user},error} = await supabase.auth.getUser()
            if(!error){
                setUser(user)
            }
        }
        catch (err){
            toast.error('sorry something went wrong',err)
        }
    }
    fethUser()
},[])
    // const handleRoute = ()=>{
    //         if(user?.email){
    //             router.push('/Dashboard/postForm')
    //         }
    //         else{
    //             router.push('/api/auth/SignUp')
    //         }
    // }
    const handleLogout = async()=>{
        const {data,error}= await supabase.auth.signOut()
        if(!error){
            router.push('/api/auth/login')
        }
    }

  return (
    <>
      {!hideNavbar && !hdieDashbord && (<header className='w-full min-h-4/12 flex justify-between bg-white  p-5'>
        <div className='flex items-center'>
             <Image src={Logo} height={100} width={100} alt="Logo"/>

        </div>
        <nav>
            <div className='flex justify-center items-center w-full h-ful'>
                {
                    user?.email ? (
                        <div className='text-black flex '>
                            <p className='p-4'>{user?.name}</p>
                            <Button className='m-4' onClick={handleLogout}><LogOut /></Button>
                        </div>
                    ):(
                        <div>

                         <span className='w-full justify-center items-center'> <Button className='bg-white text-black 
               hover:text-orange-600 hover:bg-transparent  
               '><Link href='/api/auth/login' ><User2  size={32}/> </Link></Button></span>
               <span>
                <Button2  bgColor='bg-orange-600'/>
               </span>
                            </div>
                    )
                }
              
            </div>
        </nav>
      </header>)}
    </>
  )
}

export default NavBar
