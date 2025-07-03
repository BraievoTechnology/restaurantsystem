"use client";

import { useState } from "react";
import { CreditCardIcon, BanknoteIcon } from "lucide-react";

interface PaymentMethodProps {
  onPaymentMethodChange: (method: string) => void;
  onNextStep: () => void;
  onBackStep: () => void;
}

const PaymentMethod = ({
  onPaymentMethodChange,
  onNextStep,
  onBackStep,
}: PaymentMethodProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onPaymentMethodChange(method);
  };

  return (
    <div className="bg-[#131E21] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#CA9C5E]">
        Payment Method
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <button
            onClick={() => handleMethodSelect("cash")}
            className={`flex flex-col items-start p-4 rounded-md border transition-all
              ${
                selectedMethod === "cash"
                  ? "border-[#CA9C5E] bg-gray-700"
                  : "border-gray-600 bg-gray-700 hover:bg-gray-600"
              }`}
          >
            <div className="flex items-center">
              <BanknoteIcon className="w-6 h-6 mr-3 text-gray-300" />
              <span className="font-medium">Cash</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              You can pay in person at the restaurant when you arrive. No online
              payment is required in advance.
            </p>
          </button>

          <button
            onClick={() => handleMethodSelect("card")}
            className={`flex flex-col items-start p-4 rounded-md border transition-all
              ${
                selectedMethod === "card"
                  ? "border-[#CA9C5E] bg-gray-700"
                  : "border-gray-600 bg-gray-700 hover:bg-gray-600"
              }`}
          >
            <div className="flex items-center">
              <CreditCardIcon className="w-6 h-6 mr-3 text-gray-300" />
              <span className="font-medium">Credit/Debit Card</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Pay securely online using your credit or debit card before
              arriving at the restaurant.
            </p>
          </button>
        </div>

        <div className="p-4 mt-6 bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-medium text-white">Total Amount</span>
            <span className="text-lg font-medium text-white">$12.00</span>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onBackStep}
            className="px-6 py-2 font-medium text-gray-300 transition-all bg-gray-700 rounded-md hover:bg-gray-600"
          >
            Back
          </button>
          <button
            onClick={onNextStep}
            disabled={!selectedMethod}
            className={`px-6 py-2 font-medium rounded-md transition-all ${
              selectedMethod
                ? "bg-[#CA9C5E] hover:bg-[#68573A] text-white"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
