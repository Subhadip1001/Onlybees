import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Booking = () => {
return (
    <div className="w-full bg-[#1E1E1E] p-4 sm:p-5 flex flex-col sm:flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 rounded-4xl">
        {/* level and price */}
        <div
            className="font-semibold 
                                        text-center 
                                        sm:text-center 
                                        md:text-left
                                        flex flex-col 
                                        items-center 
                                        md:items-start"
        >
            <p className="text-xs sm:text-sm">STARTING</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">₹799</h1>
        </div>

        {/* button */}
        <div className="w-full sm:w-full md:w-auto">
            <Link to="/booking-tickets" className="w-full md:w-auto bg-[#00FF38] font-bold text-black p-3 sm:p-4 rounded-full inline-block text-center">
                Book Now <FaPlay className="inline ml-2 sm:ml-4 text-xs" />
            </Link>
        </div>
    </div>
);
};

export default Booking;
