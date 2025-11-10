'use client'

import React, { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/supabaseClient'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'

export default function PostDetailPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return
      try {
        const { data, error } = await supabase
          .from('post')
          .select('*')
          .eq('id', id)
          .single()

        if (error) {
          console.error('Supabase error:', error.message)
          toast.error(`Failed to fetch post: ${error.message}`)
          return
        }

        setPost(data)
      } catch (err) {
        console.error('Unexpected error:', err)
        toast.error('Something went wrong while fetching the post.')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  console.log('post', id)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full text-gray-500">
        Loading post details...
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Post not found.
      </div>
    )
  }
  return (
    <div className="w-full  min-h-screen flex flex-col justify-center items-center bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <p className="text-sm text-gray-400">
        Author: {post.author || 'Anonymous'}
      </p>
      <p className="text-sm text-gray-400">
        Created: {new Date(post.created_at).toLocaleDateString()}
      </p>
    </div>
  )
}
