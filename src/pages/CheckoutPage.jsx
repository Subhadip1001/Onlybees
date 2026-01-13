import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Redirect if accessed directly
  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state) return null;

  const {
    eventName,
    venue,
    city,
    date,
    banner,
    ticketType,
    ticketPrice,
    quantity,
    gst,
    bookingFee,
  } = state;

  const subTotal = ticketPrice * quantity;
  const total = subTotal + gst + bookingFee;

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coupon, setCoupon] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Countdown timer (8 minutes)
  const [timeLeft, setTimeLeft] = useState(8 * 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const handleCheckout = () => {
    if (!email || !phone) {
      setError("Email and phone number are required");
      return;
    }
    if (!agree) {
      setError("You must agree to the Terms & Conditions");
      return;
    }
    setError("");
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col pb-28">

      <div className="flex flex-col-reverse lg:flex-row gap-10 px-4 sm:px-6 lg:px-10 py-6 max-w-7xl mx-auto">

        {/* LEFT FORM */}
        <div className="flex-1">
          <h1 className="text-[#00FF38] text-3xl font-bold mb-2">CHECKOUT</h1>

          <p className="text-gray-400 mb-6">
            Time left:{" "}
            <span className="text-[#00FF38]">
              {minutes}:{seconds}
            </span>
          </p>

          <div className="space-y-6">

            <div>
              <label className="block mb-1">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Phone *</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none"
              />
            </div>

            {/* TERMS & CONDITIONS (MANDATORY) */}
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <p>
                By purchasing you agree to our{" "}
                <span className="text-[#00FF38] cursor-pointer">
                  Terms of Use
                </span>
                ,{" "}
                <span className="text-[#00FF38] cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and Ticket Purchase Terms.
              </p>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="w-full lg:w-[360px]">
          <img
            src={banner}
            alt="Event"
            className="rounded-lg mb-4 h-[220px] w-full object-cover"
          />

          <h2 className="text-xl font-bold">{eventName}</h2>
          <p className="text-gray-400">{venue}</p>
          <p className="text-[#00FF38]">{date}</p>
          <p className="text-gray-400 mb-6">{city}</p>

          <h3 className="text-[#00FF38] text-lg font-semibold mb-3">
            Order Summary
          </h3>

          <div className="flex justify-between mb-2">
            <span>{ticketType} × {quantity}</span>
            <span>₹{subTotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>GST</span>
            <span>₹{gst}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Booking Fees</span>
            <span>₹{bookingFee}</span>
          </div>

          <div className="border-t pt-4 flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* COUPON CODE (OPTIONAL) */}
          <div>
            <p className="mb-2 font-semibold">Have a Coupon Code?</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code here"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 bg-gray-800 px-3 py-2 rounded-l outline-none"
              />
              <button className="bg-white text-black px-4 rounded-r">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 px-4 sm:px-10 py-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">Total:</p>
          <p className="text-2xl font-bold">₹{total}</p>
        </div>

        <button
          onClick={handleCheckout}
          disabled={!email || !phone}
          className={`px-6 py-3 rounded-full font-semibold ${
            !email || !phone
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#00FF38] text-black"
          }`}
        >
          Checkout
        </button>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-900 p-8 rounded-lg relative text-center">
            <button
              className="absolute top-3 right-3"
              onClick={() => navigate("/")}
            >
              ✕
            </button>
            <h2 className="text-[#00FF38] text-xl font-bold">
              Ticket Booked Successfully!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
