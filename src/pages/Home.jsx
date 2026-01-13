import React from 'react'
import { MdLocationOn } from "react-icons/md";
import Namebar from '../components/Namebar.jsx'
import Booking from '../components/Booking.jsx'
import EventGuide from '../components/EventGuide.jsx'
import EventTabs from '../components/EventTabs.jsx'
import banner from '../../public/mohombi_flyer.webp'
import Artist from '../components/Artist.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Namebar />

        {/* Main section */}
        <div className="
          flex 
          flex-col-reverse 
          lg:flex-row 
          justify-center 
          items-center 
          mt-24 
          gap-8 
          px-4
          w-full
          max-w-7xl
        ">

          {/* LEFT SIDE */}
          <div className="flex flex-col w-full lg:w-1/2">
            
            {/* Details */}
            <div className="
              flex 
              flex-col 
              items-start 
              lg:items-end 
              text-left 
              lg:text-right
            ">
              <div className="flex items-center gap-2">
                <MdLocationOn />
                <span>Lariti, Mawdiangdiang</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                Mohombi Live in Shillong
              </h1>

              <p className="text-[#00FF38] font-semibold text-lg sm:text-xl mt-2">
                Sat, Oct 25, 2025, 3:00 PM
              </p>

              <span className="font-thin text-xs text-[#00FF38]">
                GMT +5:30
              </span>

              <p>Shillong</p>
            </div>

            {/* Event Tabs */}
            <div className="mt-8 w-full lg:w-[600px]">
              <EventTabs />
            </div>
          </div>

          {/* RIGHT SIDE (shows first on mobile) */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <img
              src={banner}
              alt="Mohombi Live in Shillong"
              className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-lg"
            />
            <Booking />
          </div>

        </div>

        {/* Event Guide */}
        <div className="w-full max-w-5xl mt-10 px-4">
          <h1 className="text-2xl font-bold mb-2">Event Guide</h1>
          <EventGuide />
        </div>

        {/* Artist */}
        <div className="w-full max-w-5xl px-4 mt-8">
          <Artist />
        </div>
      </div>

      <Footer className="mt-10" />
    </>
  )
}

export default Home
