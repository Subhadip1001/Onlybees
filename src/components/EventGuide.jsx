import React from 'react'
import { FaLanguage, FaClock, FaTicketAlt } from "react-icons/fa"

const EventGuide = () => {
  return (
    <div className='w-full bg-[#1E1E1E] 
                    flex flex-col 
                    gap-6 
                    rounded-2xl 
                    px-4 py-6 
                    items-center 
                    text-center
                    sm:flex-row 
                    sm:justify-evenly 
                    sm:text-left'>

      {/* Language */}
      <div className='flex items-center gap-3'>
        <FaLanguage className='text-xl text-[#00FF38]'/>
        <div>
          <p className='text-xs text-[#95A1AF]'>Language</p>
          <h3 className='font-semibold'>English</h3>
        </div>
      </div>

      {/* Duration */}
      <div className='flex items-center gap-3'>
        <FaClock className='text-xl text-[#00FF38]'/>
        <div>
          <p className='text-xs text-[#95A1AF]'>Duration</p>
          <h3 className='font-semibold'>TBI</h3>
        </div>
      </div>

      {/* Entry */}
      <div className='flex items-center gap-3'>
        <FaTicketAlt className='text-xl text-[#00FF38]'/>
        <div>
          <p className='text-xs text-[#95A1AF]'>Entry Allowed</p>
          <h3 className='font-semibold'>14 yrs & above</h3>
        </div>
      </div>

    </div>
  )
}

export default EventGuide
