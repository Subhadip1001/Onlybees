import React, { useState } from "react";

const tabs = ["About", "Venue Layout", "Terms and Conditions", "FAQ"];

const EventTabs = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="w-full h-[450px] flex flex-col">
      {/* ===== Fixed Tabs Header ===== */}
      <div className="flex justify-around border-b border-gray-700 text-sm md:text-base sticky top-0 bg-black z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 relative font-medium transition-colors cursor-pointer
              ${activeTab === tab ? "text-white" : "text-gray-400"}
            `}
          >
            {tab}

            {activeTab === tab && (
              <span className="absolute left-0 -bottom-[1px] h-[2px] w-full bg-[#00FF38]" />
            )}
          </button>
        ))}
      </div>

      {/* ===== Scrollable Content (No Scrollbar) ===== */}
      <div
        className="flex-1 mt-4 bg-[#1E1E1E] rounded-2xl p-6 text-gray-200
                   overflow-y-auto scrollbar-hide leading-relaxed"
      >
        {activeTab === "About" && (
          <div className="space-y-4">
            <p>
              Get ready for a high-energy night with global pop & Afro-Latin
              star Mohombi—the Congolese-Swedish hitmaker behind chart-toppers
              like
              <span className="font-semibold">
                {" "}
                “Bumpy Ride”, “Coconut Tree”
              </span>{" "}
              and
              <span className="font-semibold"> “mi amor”</span>.
            </p>

            <p>
              Expect a power-packed set blending pop, dancehall, reggaeton, and
              Afrobeats with a full live band and dancers.
            </p>

            <p className="font-semibold">Highlights:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>International hits and exclusive live edits</li>
              <li>State-of-the-art sound & lighting</li>
              <li>Limited VIP zones with premium viewing</li>
            </ul>

            <p>
              Come early, clear security fast, and secure your spot up front.
              This is one for the books!
            </p>
          </div>
        )}

        {activeTab === "Venue Layout" && (
          <div className="h-full overflow-y-auto scrollbar-hide flex justify-center">

    <div className="p-0">
      <img
        src="/Stage.webp"
        alt="Venue Layout"
        className="h-[350px] object-contain"
      />
    </div>

  </div>
        )}

        {activeTab === "Terms and Conditions" && (
          <div className="space-y-6 text-sm leading-relaxed text-gray-200">
            <div>
              <h3 className="font-semibold text-base mb-2">
                1. Ticket Validity
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Each ticket admits one person only.</li>
                <li>
                  Entry is valid only on the date and time mentioned on the
                  ticket.
                </li>
                <li>
                  Tickets are non-transferable and non-refundable, unless the
                  event is cancelled.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                2. Entry & ID Requirements
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  Attendees must carry a valid government-issued photo ID
                  (Aadhar, Passport, Driving License, etc.).
                </li>
                <li>The name on the ticket must match the ID for entry.</li>
                <li>
                  Entry is allowed only to ticket holders above the age of 14+.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                3. Event Guidelines
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  Entry will not be allowed post 9 PM, regardless of ticket
                  purchase.
                </li>
                <li>No re-entry will be allowed once you exit the venue.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                4. Prohibited Items
              </h3>
              <p className="text-gray-300 mb-1">
                The following items are strictly prohibited:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Weapons and illegal substances</li>
                <li>Outside food or beverages</li>
                <li>Professional cameras and recording devices</li>
                <li>Laser pointers and fireworks</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                5. Security Check
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  Security checks, including frisking, remain a condition of
                  entry.
                </li>
                <li>
                  Organizers reserve the right to refuse admission to anyone
                  found in possession of prohibited items.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                6. Ticket Purchase & Validity
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Tickets should be purchased only from ONLYBEES.</li>
                <li>Fake or duplicated tickets will be considered invalid.</li>
                <li>Lost, stolen, or damaged tickets will not be reissued.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                7. Code of Conduct
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  Any form of abuse, harassment, or disruptive behavior will
                  lead to immediate removal from the venue without refund.
                </li>
                <li>
                  Respect fellow attendees and staff. Help maintain a safe and
                  inclusive environment.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                8. Photography & Recordings
              </h3>
              <p className="text-gray-300">
                The event may be recorded and photographed. By attending, you
                give consent to the use of your image or likeness for
                promotional purposes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                9. Cancellation & Refunds
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  In case of event cancellation due to unforeseen circumstances
                  (weather, government restrictions, etc.), a refund policy will
                  be initiated at the organizer’s discretion.
                </li>
                <li>
                  No refunds will be issued for no-shows or late arrivals.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                10. Health & Safety
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  Please follow all health and safety protocols laid down by the
                  venue or government authorities.
                </li>
                <li>
                  Entry may be restricted if you display symptoms of illness or
                  fail to comply with safety checks.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                11. Limitation of Liability
              </h3>
              <p className="text-gray-300">
                The organizers are not responsible for any loss, injury, or
                damage sustained at the event, including lost or stolen personal
                belongings.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">12. Contact</h3>
              <p className="text-gray-300">For ticket support or queries:</p>
              <p className="mt-1 text-gray-300">
                📞 <span className="font-medium">8787740538</span>
                <br />
                📧 <span className="font-medium">info@onlybees.in</span>
              </p>
            </div>
          </div>
        )}

        {activeTab === "FAQ" && (
          <div className="space-y-6 text-sm leading-relaxed text-gray-200">
            <div>
              <p className="font-semibold">
                Q: Can I get a refund if I can't attend?
              </p>
              <p className="mt-1 text-gray-300">
                A: All ticket sales are final and non-refundable, unless the
                event is cancelled by the organisers. No refunds for no-shows or
                change of plans.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: Can I transfer my ticket to someone else?
              </p>
              <p className="mt-1 text-gray-300">
                A: Tickets are non-transferable. Entry will be granted only to
                the original ticket holder with a matching valid photo ID.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: What ID do I need to bring?</p>
              <p className="mt-1 text-gray-300">
                A: Please bring a valid government-issued photo ID (Aadhaar,
                PAN, Driving Licence or Passport). The name on the ID must match
                your ticket.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: Is there an age limit for the event?
              </p>
              <p className="mt-1 text-gray-300">
                A: Yes. The concert is for attendees aged 14 years and above. ID
                verification at the gate is mandatory.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: What time should I arrive?</p>
              <p className="mt-1 text-gray-300">
                A: Gates open one hour before show time. Arrive early to
                complete security checks and enjoy the performance from the
                start.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: Is re-entry allowed?</p>
              <p className="mt-1 text-gray-300">
                A: No. Once you exit the venue, re-entry is strictly prohibited.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: Will there be food and drinks at the venue?
              </p>
              <p className="mt-1 text-gray-300">
                A: Yes. Food and beverages will be available for purchase
                inside. Outside food or drinks are not allowed.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: What items are prohibited?</p>
              <p className="mt-1 text-gray-300">
                A: Weapons or sharp objects, alcohol or drugs, professional
                cameras or recording equipment, outside food & beverages, and
                large bags/backpacks are not permitted.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: Can I bring a camera?</p>
              <p className="mt-1 text-gray-300">
                A: Phone photography is allowed. Professional cameras, DSLRs and
                recording equipment are strictly prohibited.
              </p>
            </div>

            <div>
              <p className="font-semibold">Q: Will the event be recorded?</p>
              <p className="mt-1 text-gray-300">
                A: Yes. The show may be filmed and photographed for promotional
                use. By attending, you consent to appear in any such material.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: What happens if the event is cancelled or postponed?
              </p>
              <p className="mt-1 text-gray-300">
                A: If the concert is cancelled, ticket buyers will be informed
                via email or SMS and refunds processed. If postponed, your
                existing ticket remains valid for the new date.
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Q: Whom do I contact for help with my ticket?
              </p>
              <p className="mt-1 text-gray-300">
                A: For ticket issues or event information, please call{" "}
                <span className="font-medium">8787740538</span> or email{" "}
                <span className="font-medium">info@onlybees.in</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTabs;
