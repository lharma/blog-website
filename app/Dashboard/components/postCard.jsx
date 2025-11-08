'use client'
import React from 'react'
import { CalendarDays, User, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BlogCard = ({ post, onViewMore }) => {
  console.log('post data',post)
  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-5 space-y-3">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-900 line-clamp-1">
        {post.title}
      </h2>

      {/* card info */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <User className="w-4 h-4 text-orange-500" />
          <span>{post.author || 'Anonymous'}</span>
        </div>

        <div className="flex items-center gap-1">
          <CalendarDays className="w-4 h-4 text-orange-500" />
          <span>
            {new Date(post.created_at).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Content preview */}
      <p className="text-gray-700 line-clamp-3">
        {post.content || 'No content available.'}
      </p>

      {/* Footer actions */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1 text-gray-500">
          <Eye className="w-4 h-4 text-orange-500" />
          <span>{post.views ||0} views</span>
        </div>

        <Button
          onClick={() => onViewMore?.(post)}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-1.5 rounded-md transition-all"
        >
          View More
        </Button>
      </div>
    </div>
  )
}

export default BlogCard
