'use client'
import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/supabaseClient'
import { toast } from 'sonner'
import { UploadCloud } from 'lucide-react'

export default function UploadAvatar({ user }) {
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState('')

  
  // Generate preview when file is selected
  useEffect(() => {
      const getUser = async()=>{
          const {data:{user},error} = await supabase.auth.getUser()
        }
        if (!user) return <p>Please login to upload an avatar.</p>
    if (!selectedFile) {
      setPreview('')
      return
    }
    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // Clean up
    return () => URL.revokeObjectURL(objectUrl)
    getUser()
  }, [selectedFile,user])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const MAX_SIZE_MB = 2
    if (file.size / 1024 / 1024 > MAX_SIZE_MB) {
      toast.error(`File too large (max ${MAX_SIZE_MB}MB)`)
      return
    }

    setSelectedFile(file)
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Please select an image first.')
      return
    }

    try {
      setUploading(true)

      const fileExt = selectedFile.name.split('.').pop()
      const fileName = `${user.id}.${fileExt}`
      const filePath = `avatars/${fileName}`

      // Upload to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, selectedFile, { upsert: true })
      if (uploadError) throw uploadError

      // Get public URL
      const { data, error: urlError } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)
      if (urlError) throw urlError

      const publicUrl = data.publicUrl

      // Update user profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id)
      if (profileError) throw profileError

      toast.success('Avatar updated successfully!')
      setSelectedFile(null)
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Preview */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-700">
        {preview ? (
          <img src={preview} alt="Avatar preview" className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800">
            <UploadCloud size={40} className="text-gray-400" />
          </div>
        )}
      </div>

      {/* File input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="file-input file-input-bordered w-full max-w-xs"
      />

      {/* Upload button */}
      <button
        onClick={handleUpload}
        disabled={uploading || !selectedFile}
        className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload Avatar'}
      </button>
    </div>
  )
}
