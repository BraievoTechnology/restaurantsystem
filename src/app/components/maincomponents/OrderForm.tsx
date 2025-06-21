'use client'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {
  CalendarIcon,
  ClockIcon,
  ShoppingBagIcon,
  UtensilsIcon,
} from 'lucide-react'

interface OrderFormProps {
  orderType: 'pickup' | 'dining' | null
  orderDetails: {
    date: string
    time: string
  }
  onOrderTypeChange: (type: 'pickup' | 'dining') => void
  onOrderDetailsChange: (key: string, value: string) => void
}

const OrderForm = ({
  orderType,
  orderDetails,
  onOrderTypeChange,
  onOrderDetailsChange,
}: OrderFormProps) => {
  const stringToDate = (dateStr: string) => {
    return dateStr ? new Date(dateStr) : null
  }

  const stringToTime = (timeStr: string) => {
    if (!timeStr) return null
    const [hours, minutes] = timeStr.split(':')
    const date = new Date()
    date.setHours(parseInt(hours), parseInt(minutes))
    return date
  }

  const datePickerCustomStyles = {
    className:
      'w-full bg-gray-900 border border-[#CA9C5E]/50 rounded-md px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#CA9C5E] focus:border-transparent text-gray-300',
    wrapperClassName: 'w-full',
    popperClassName: 'react-datepicker-popper',
    calendarClassName: 'bg-gray-800 border-gray-700',
    dayClassName: () => 'text-gray-300',
  }

  return (
    <div className="bg-[#131E21] rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#CA9C5E]">
        Place Your Order
      </h2>
      <div className="space-y-6">
        {/* Date */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-300">Select Date</label>
          <div className="relative">
            <style>
              {`
                .react-datepicker {
                  background-color: #1F2937;
                  border-color: #374151;
                }
                .react-datepicker__header {
                  background-color: #111827;
                  border-color: #374151;
                }
                .react-datepicker__current-month,
                .react-datepicker__day-name,
                .react-datepicker__day {
                  color: #D1D5DB;
                }
                .react-datepicker__day:hover,
                .react-datepicker__day--selected,
                .react-datepicker__day--keyboard-selected {
                  background-color: #CA9C5E;
                  color: white;
                }
                .react-datepicker__time-list-item {
                  background-color: #1F2937;
                  color: #D1D5DB;
                }
                .react-datepicker__time-list-item:hover,
                .react-datepicker__time-list-item--selected {
                  background-color: #CA9C5E;
                  color: white;
                }
              `}
            </style>
            <DatePicker
              selected={stringToDate(orderDetails.date)}
              onChange={(date) =>
                onOrderDetailsChange(
                  'date',
                  date ? date.toISOString().split('T')[0] : ''
                )
              }
              placeholderText="Select date"
              {...datePickerCustomStyles}
            />
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#CA9C5E] pointer-events-none" />
          </div>
        </div>

        {/* Time */}
        <div className="space-y-3">
          <label className="block font-medium text-gray-300">Select Time</label>
          <div className="relative">
            <DatePicker
              selected={stringToTime(orderDetails.time)}
              onChange={(date) =>
                onOrderDetailsChange(
                  'time',
                  date
                    ? `${date.getHours().toString().padStart(2, '0')}:${date
                        .getMinutes()
                        .toString()
                        .padStart(2, '0')}`
                    : ''
                )
              }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Time"
              dateFormat="h:mm aa"
              placeholderText="Select time"
              {...datePickerCustomStyles}
            />
            <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#CA9C5E] pointer-events-none" />
          </div>
        </div>

        {/* Order Type */}
        <div className="pt-4">
          <p className="block mb-3 font-medium text-gray-300">
            Select Order Type
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Pickup */}
            <button
              onClick={() => onOrderTypeChange('pickup')}
              className={`flex items-center justify-center p-4 rounded-md border transition-all ${
                orderType === 'pickup'
                  ? 'border-[#CA9C5E] bg-gray-700'
                  : 'border-gray-600 bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`p-3 rounded-full mb-2 ${
                    orderType === 'pickup' ? 'bg-[#CA9C5E]' : 'bg-gray-700'
                  }`}
                >
                  <ShoppingBagIcon className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Pickup Order</span>
              </div>
            </button>

            {/* Dining */}
            <button
              onClick={() => onOrderTypeChange('dining')}
              className={`flex items-center justify-center p-4 rounded-md border transition-all ${
                orderType === 'dining'
                  ? 'border-[#CA9C5E] bg-gray-700'
                  : 'border-gray-600 bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`p-3 rounded-full mb-2 ${
                    orderType === 'dining' ? 'bg-[#CA9C5E]' : 'bg-gray-700'
                  }`}
                >
                  <UtensilsIcon className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium">Dining</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderForm
