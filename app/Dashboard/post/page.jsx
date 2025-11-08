'use client'
import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'
import BlogCard from '../components/postCard' // ✅ import your card

import { Loader2 ,FileArchive} from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [posts, setPosts] = useState([])
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  const fetchPosts = async () => {
    try {

      setLoading(true)
      const { data: userData, error: userError } = await supabase.auth.getUser()

      if (userError) {
        console.error('Auth Error:', userError.message)
        toast.error(userError.message)
        setPosts([])
        setLoading(false)
        return
      }
      

      const user = userData?.user
      if (!user) {
        toast.warning('You must be logged in to view posts.')
        setLoading(false)
        return
      }

      const { data: postsData, error: postsError } = await supabase
        .from('post')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })

      if (postsError) {
        console.error('Post Fetch Error:', postsError.message)
        toast.error(postsError.message)
      } else {
        setPosts((postsData || []).filter(Boolean))
      }

      setLoading(false)
    } catch (err) {
      toast.error(`this happened during your data fetch: ${err?.message || err}`)
    }
  }

  fetchPosts()
}, [])
  const handleViewMore = (post) => {
    toast.info(`Viewing ${post.title || 'untile'}`)
    router.push(`/Dashboard/post/${post.id}`)
  }


  return (
    <div className="min-h-screen w-full p-6">
      <div className=" md:w-[80%] mx-auto flex justify-center">
        {/* Loading state */}
        {loading ? (
          <div className="flex justify-center py-10 text-gray-400 flex-wrap">
            <Loader2 className="animate-spin w-6 h-6 mr-2" />
            Loading posts...
          </div>
        ) : posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (

                
                <BlogCard key={post.id} post={post} onViewMore={handleViewMore} />
                
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-10">
           <FileArchive /> No posts available yet. 
          </div>
        )}

      </div>
    </div>
  )
}
