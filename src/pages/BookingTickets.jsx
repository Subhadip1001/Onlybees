import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ticket from "../components/Ticket";
import ticketData from "../data/ticketAvailability.json";

const BookingTickets = () => {
  const navigate = useNavigate();

  const [sections, setSections] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setSections(ticketData.sections);
  }, []);

  const handleTicketChange = (section, newCount) => {
    if (newCount === 0) {
      setSelectedTicket(null);
      setCount(0);
      return;
    }

    setSelectedTicket(section);
    setCount(newCount);
  };

  const totalAmount = selectedTicket
    ? selectedTicket.price * count
    : 0;

  // ✅ PROCEED TO CHECKOUT WITH DATA
  const handleProceed = () => {
    if (!selectedTicket || count === 0) return;

    navigate("/checkout", {
      state: {
        // Event details
        eventName: "Mohombi Live in Shillong",
        venue: "Lairiti, Mawdiangdiang",
        city: "Shillong",
        date: "Sat, Oct 25, 2025",
        banner: "/mohombi_flyer.webp",

        // Ticket details
        ticketType: selectedTicket.name,
        ticketPrice: selectedTicket.price,
        quantity: count,

        // Charges
        gst: selectedTicket.price * count * 0.18,
        bookingFee: 73,
      },
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pb-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-[#00FF38] mt-10 mb-8">
          Tickets
        </h1>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Tickets */}
          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <Ticket
                key={section._id}
                name={section.name}
                price={`₹${section.price}`}
                info={section.info.split("\n")}
                disabled={section.availableQuantity <= 0}
                isActive={selectedTicket?._id === section._id}
                onChange={(c) => handleTicketChange(section, c)}
              />
            ))}
          </div>

          {/* Venue Layout */}
          <div className="flex justify-center items-start order-first lg:order-last">
            <img
              src="/Stage.webp"
              alt="Venue Layout"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* FIXED BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1E1E1E] border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Total</p>
            <h2 className="text-2xl font-bold">₹{totalAmount}</h2>
          </div>

          <button
            onClick={handleProceed}
            disabled={!totalAmount}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              totalAmount
                ? "bg-[#00FF38] text-black"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingTickets;
