"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  UsersIcon,
  PlusIcon,
  MinusIcon,
  CalendarIcon,
  ClockIcon,
  UserIcon,
  PhoneIcon,
  CheckIcon,
} from "lucide-react";

interface DiningFormProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

const DiningForm = ({ onNextStep, onBackStep }: DiningFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    date: null as Date | null,
    time: null as Date | null,
    phone: "",
    guests: 2,
    specialRequests: "",
  });

  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const [verified, setVerified] = useState(false);

  const handleVerifyPhone = () => setShowOTP(true);
  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setVerified(true);
      setShowOTP(false);
    }
  };

  const handleGuestCount = (increment: boolean) => {
    setFormData((prev) => ({
      ...prev,
      guests: increment
        ? Math.min(prev.guests + 1, 10)
        : Math.max(prev.guests - 1, 1),
    }));
  };

  const datePickerCustomStyles = {
    className:
      "w-full bg-gray-900 border border-[#CA9C5E] rounded-md px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#CA9C5E] focus:border-transparent text-gray-300",
    wrapperClassName: "w-full",
    popperClassName: "react-datepicker-popper",
    calendarClassName: "bg-gray-800 border-gray-700",
    dayClassName: () => "text-gray-300",
  };

  return (
    <div className="bg-[#131E21] rounded-lg p-6">
      <h2 className="text-3xl font-semibold mb-8 text-[#CA9C5E]">
        Dining Details
      </h2>
      <div className="space-y-6">
        {/* Full Name */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-300">
            Customer's Full Name
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
              className="w-full bg-gray-900 border border-[#CA9C5E] rounded-md px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#CA9C5E] focus:border-transparent text-gray-300"
              placeholder="Enter your full name"
            />
            <UserIcon className="absolute left-3 top-3.5 h-5 w-5 text-[#CA9C5E]" />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <label className="block font-medium text-gray-300">Date</label>
            <div className="relative">
              <style>
                {`
                  .react-datepicker { background-color: #1F2937; border-color: #374151; }
                  .react-datepicker__header { background-color: #111827; border-color: #374151; }
                  .react-datepicker__current-month,
                  .react-datepicker__day-name,
                  .react-datepicker__day { color: #D1D5DB; }
                  .react-datepicker__day:hover,
                  .react-datepicker__day--selected,
                  .react-datepicker__day--keyboard-selected { background-color: #CA9C5E; color: white; }
                  .react-datepicker__time-list-item { background-color: #1F2937; color: #D1D5DB; }
                  .react-datepicker__time-list-item:hover,
                  .react-datepicker__time-list-item--selected { background-color: #CA9C5E; color: white; }
                `}
              </style>
              <DatePicker
                selected={formData.date}
                onChange={(date) =>
                  setFormData((prev) => ({
                    ...prev,
                    date,
                  }))
                }
                placeholderText="Select date"
                {...datePickerCustomStyles}
              />
              <CalendarIcon className="absolute left-3 top-3.5 h-5 w-5 text-[#CA9C5E] pointer-events-none" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block font-medium text-gray-300">Time</label>
            <div className="relative">
              <DatePicker
                selected={formData.time}
                onChange={(time) =>
                  setFormData((prev) => ({
                    ...prev,
                    time,
                  }))
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select time"
                {...datePickerCustomStyles}
              />
              <ClockIcon className="absolute left-3 top-3.5 h-5 w-5 text-[#CA9C5E] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Contact Number */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-300">
            Contact Number
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                className="w-full bg-gray-900 border border-[#CA9C5E] rounded-md px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#CA9C5E] focus:border-transparent text-gray-300"
                placeholder="Enter your phone number"
                disabled={verified}
              />
              <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-[#CA9C5E]" />
              {verified && (
                <CheckIcon className="absolute right-3 top-3.5 h-5 w-5 text-green-500" />
              )}
            </div>
            {!verified && (
              <button
                onClick={handleVerifyPhone}
                className="px-4 py-2 font-medium text-black transition-colors rounded-md bg-[#CA9C5E] hover:bg-[#68573A]"
                disabled={!formData.phone}
              >
                Verify
              </button>
            )}
          </div>
          {showOTP && (
            <div className="mt-3">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                className="w-full bg-gray-900 border border-[#CA9C5E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CA9C5E] focus:border-transparent text-gray-300"
                placeholder="Enter 6-digit OTP"
                maxLength={6}
              />
              <button
                onClick={handleVerifyOTP}
                className="w-full px-4 py-2 mt-2 font-medium text-black transition-colors rounded-md bg-[#CA9C5E] hover:bg-[#68573A]"
                disabled={otp.length !== 6}
              >
                Verify OTP
              </button>
            </div>
          )}
        </div>

        {/* Number of Guests */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-300">
            Number of Guests
          </label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleGuestCount(false)}
              className="p-2 text-gray-300 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
              disabled={formData.guests <= 1}
            >
              <MinusIcon className="w-5 h-5" />
            </button>
            <span className="text-xl font-medium text-gray-300 min-w-[2ch] text-center">
              {formData.guests}
            </span>
            <button
              onClick={() => handleGuestCount(true)}
              className="p-2 text-gray-300 transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
              disabled={formData.guests >= 10}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-300">
            Special Requests
          </label>
          <textarea
            value={formData.specialRequests}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                specialRequests: e.target.value,
              }))
            }
            className="w-full bg-gray-900 border border-[#CA9C5E] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#CA9C5E] focus:border-transparent text-gray-300"
            placeholder="Any special requests or dietary requirements?"
            rows={4}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button
            onClick={onBackStep}
            className="px-6 py-2 font-medium text-gray-300 transition-all bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Back
          </button>
          <button
            onClick={onNextStep}
            disabled={
              !verified ||
              !formData.fullName ||
              !formData.date ||
              !formData.time
            }
            className={`px-6 py-2 font-medium rounded-md transition-all ${
              verified && formData.fullName && formData.date && formData.time
                ? "bg-[#CA9C5E] hover:bg-[#68573A] text-black"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiningForm;
