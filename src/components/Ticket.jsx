import React, { useState, useEffect } from "react";

const Ticket = ({
  name,
  price,
  info = [],
  disabled = false,
  isActive = false,
  onChange,
}) => {
  const [count, setCount] = useState(0);

  // Reset count when ticket is not active
  useEffect(() => {
    if (!isActive) setCount(0);
  }, [isActive]);

  const increase = () => {
    if (disabled) return;
    const newCount = count + 1;
    setCount(newCount);
    onChange(newCount);
  };

  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div
      className={`w-full bg-[#1E1E1E] rounded-2xl p-6 flex flex-col gap-4 border ${
        isActive ? "border-[#00FF38]" : "border-transparent"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Ticket Info */}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-end gap-2 mt-3">
            <h1 className="text-3xl font-bold text-[#00FF38]">
              {price}
            </h1>
            <p className="text-sm text-gray-400">Excl. taxes</p>
          </div>
        </div>

        {/* Counter */}
        <div className="border border-[#00FF38] rounded-xl px-4 py-2 flex items-center gap-4">
          {count > 0 && (
            <button
              onClick={decrease}
              className="text-[#00FF38] text-xl font-bold"
            >
              −
            </button>
          )}

          {count > 0 && (
            <span className="text-[#00FF38] font-semibold">
              {count}
            </span>
          )}

          <button
            onClick={increase}
            className="text-[#00FF38] text-xl font-bold"
          >
            +
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Features */}
      <ul className="text-sm text-gray-300 space-y-1">
        {info.map((item, idx) => (
          <li key={idx}>- {item.replace("-", "").trim()}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ticket;
