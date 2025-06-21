"use client";

import { CalendarIcon, ClockIcon } from "lucide-react";

interface OrderSummaryProps {
  orderDetails: {
    date: string;
    time: string;
  };
  onNextStep: () => void;
  onBackStep: () => void;
}

const OrderSummary = ({
  orderDetails,
  onNextStep,
  onBackStep,
}: OrderSummaryProps) => {
  return (
    <div className="bg-[#131E21] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#CA9C5E]">
        Order Summary
      </h2>
      <div className="space-y-6">
        {/* Date & Time Display */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center mb-4">
            <CalendarIcon className="w-5 h-5 mr-2 text-teal-500" />
            <span className="font-medium text-gray-300">Date:</span>
            <span className="ml-2 text-white">
              {orderDetails.date
                ? new Date(orderDetails.date).toLocaleDateString()
                : "Not selected"}
            </span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-teal-500" />
            <span className="font-medium text-gray-300">Time:</span>
            <span className="ml-2 text-white">
              {orderDetails.time || "Not selected"}
            </span>
          </div>
        </div>

        {/* Pricing Summary */}
        <div className="p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Subtotal</span>
            <span className="text-white">$10.00</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-gray-300">Tax</span>
            <span className="text-white">$2.00</span>
          </div>
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-600">
            <span className="font-medium text-white">Total</span>
            <span className="font-medium text-white">$12.00</span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
