'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { date } from 'zod'
import { addUserProfile } from '@/components/action/UploadUser'

const User = () => {
    const [userInfo,setUserInfor]= useState({
        full_name:'',
        avatar_url:'',
        user_location:'',
        bio:'',
        DOB:'',
        jobTile:''
})

 const handleSubmit = async(e)=>{
    // e.preventDefualt()
    // const res = fetch('api/userController',{
    //     method:'POST',
    //     headers:
    // })
    
 }
 
const handleChange =(e)=>{
    const{name,value}=e.target
    setUserInfor({
    
        ...userInfo,
        [name]:value
    })
}
  return (
    <div className="max-w-8/12 mx-auto mt-10 p-6 bg-white dark:bg-neutral-900 shadow-md rounded-2xl">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
        Update Profile
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="full_name"
            value={userInfo.full_name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
    
        {/* User Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Location
          </label>
          <input
            type="text"
            name="user_location"
            placeholder="City, Country"
            value={userInfo.user_location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Bio
          </label>
          <textarea
            name="bio"
            placeholder="Tell us a little about yourself..."
            rows="3"
            value={userInfo.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="DOB"
            value={userInfo.DOB}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Software Engineer"
            value={userInfo.jobTile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-1 mt-4  text-white font-medium rounded-lg hover:bg-orange-600 transition"
        >
          Save Changes
        </Button>
      </form>
    </div>
  )}

export default User