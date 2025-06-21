"use client";

import {
  CalendarIcon,
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  DollarSignIcon,
} from "lucide-react";

interface ReservationSummaryProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

const ReservationSummary = ({
  onNextStep,
  onBackStep,
}: ReservationSummaryProps) => {
  return (
    <div className="bg-[#131E21] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#CA9C5E]">
        Reservation Summary
      </h2>
      <div className="space-y-6">
        {/* Customer Details */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-[#CA9C5E] mb-3">
            Customer Information
          </h3>
          <div className="space-y-2">
            <p className="text-gray-300">John Doe</p>
            <p className="text-gray-300">+1 234 567 8900</p>
          </div>
        </div>

        {/* Reservation Details */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-[#CA9C5E] mb-3">
            Reservation Details
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-teal-500" />
              <span className="text-gray-300">Friday, December 15, 2023</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-5 h-5 mr-2 text-teal-500" />
              <span className="text-gray-300">7:30 PM</span>
            </div>
            <div className="flex items-center">
              <UsersIcon className="w-5 h-5 mr-2 text-teal-500" />
              <span className="text-gray-300">4 Guests</span>
            </div>
          </div>
        </div>

        {/* Table Details */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-[#CA9C5E] mb-3">
            Table Details
          </h3>
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-2 text-teal-500" />
            <div>
              <p className="text-gray-300">Table A2</p>
              <p className="text-sm text-gray-400">Indoor Seating</p>
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-[#CA9C5E] mb-3">
            Special Requests
          </h3>
          <p className="text-gray-300">Window seat preferred</p>
        </div>

        {/* Reservation Fee */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-lg font-medium text-[#CA9C5E] mb-3">
            Reservation Fee
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSignIcon className="w-5 h-5 mr-2 text-teal-500" />
                <span className="text-gray-300">Base Reservation Fee</span>
              </div>
              <span className="text-gray-300">$20.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 ml-7">Service Charge (10%)</span>
              <span className="text-gray-300">$2.00</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-600">
              <span className="font-medium text-teal-400">Total Amount</span>
              <span className="font-medium text-teal-400">$22.00</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button
            onClick={onBackStep}
            className="px-6 py-2 font-medium text-gray-300 transition-all bg-gray-700 rounded-md hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={onNextStep}
            className="px-6 py-2 font-medium text-white transition-all rounded-md bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationSummary;
