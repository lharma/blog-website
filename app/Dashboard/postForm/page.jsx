'use client'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function PostForm({ onPostCreated }) {
  const [formData, setFormData] = useState({ title: '', content: '' })
  const [loading, setLoading] = useState(false)
const router = useRouter()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // ✅ Get the current user
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError || !userData?.user) {
      toast.error('Please log in to create a post.')
      setLoading(false)
      return
    }

    // ✅ Insert post
    const { error } = await supabase.from('post').insert({
      title: formData.title,
      content: formData.content,
      user_id: userData.user.id,
    })

    if (error) {
      toast.error(`Error: ${error.message}`)
    } else {
      toast.success('Post created successfully 🎉')
      setFormData({ title: '', content: '' })
      onPostCreated?.() // optional callback to refresh posts
    }

    setLoading(false)
    router.push('/Dashboard/post/[slug]')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-5 border border-gray-300 rounded-xl bg-white shadow-sm space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-800">Create a New Post</h2>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter post title..."
          required
          className="w-full p-2 border rounded-md focus:ring focus:ring-orange-200 focus:border-orange-400 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Content</label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Write your post content..."
          required
          className="w-full p-2 border rounded-md h-32 focus:ring focus:ring-orange-200 focus:border-orange-400 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center justify-center gap-2 w-full py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition disabled:opacity-70"
      >
        {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Publish Post'}
      </button>
    </form>
  )
}
