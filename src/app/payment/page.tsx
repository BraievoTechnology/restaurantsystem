"use client";

import { useState } from "react";
import Stepper from "../components/maincomponents/Stepper";
import OrderForm from "../components/maincomponents/OrderForm";
import OrderSummary from "../components/maincomponents/OrderSummary";
import PaymentMethod from "../components/maincomponents/PaymentMethod";
import Confirmation from "../components/maincomponents/Confirmation";
import DiningForm from "../components/maincomponents/DiningForm";
import TableSelection from "../components/maincomponents/TableSelection";
import ReservationSummary from "../components/maincomponents/ReservationSummary";

const PaymentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderType, setOrderType] = useState<"pickup" | "dining" | null>(null);
  const [orderDetails, setOrderDetails] = useState({
    date: "",
    time: "",
    paymentMethod: "",
  });

  const handleOrderTypeChange = (type: "pickup" | "dining") => {
    setOrderType(type);
    setCurrentStep(2);
  };

  const handleOrderDetailsChange = (key: string, value: string) => {
    setOrderDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNextStep = () => setCurrentStep((prev) => prev + 1);
  const handleBackStep = () => setCurrentStep((prev) => prev - 1);

  const steps = [
    {
      id: 1,
      label: "Place Your Order",
      completed: currentStep > 1,
    },
    {
      id: 2,
      label: orderType === "pickup" ? "Order Summary" : "Dining Details",
      completed: currentStep > 2,
    },
    {
      id: 3,
      label: orderType === "pickup" ? "Payment" : "Select Table",
      completed: currentStep > 3,
    },
    {
      id: 4,
      label: orderType === "pickup" ? "Confirmation" : "Reservation Summary",
      completed: currentStep > 4,
    },
    ...(orderType === "dining"
      ? [
          {
            id: 5,
            label: "Confirmation",
            completed: currentStep > 5,
          },
        ]
      : []),
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0B1517] text-gray-100">
      <div className="p-6 border-r border-gray-800 md:w-1/4">
        <div className="sticky top-50">
          <h1 className="text-2xl font-bold mb-8 text-[#CA9C5E]">
            Gourmet Table
          </h1>
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
      </div>
      <div className="flex-1 p-6 mt-20 overflow-y-auto md:p-10">
        <div className="max-w-5xl mx-auto">
          {currentStep === 1 && (
            <OrderForm
              orderType={orderType}
              orderDetails={orderDetails}
              onOrderTypeChange={handleOrderTypeChange}
              onOrderDetailsChange={handleOrderDetailsChange}
            />
          )}
          {currentStep === 2 && orderType === "pickup" && (
            <OrderSummary
              orderDetails={orderDetails}
              onNextStep={handleNextStep}
              onBackStep={handleBackStep}
            />
          )}
          {currentStep === 2 && orderType === "dining" && (
            <DiningForm
              onNextStep={handleNextStep}
              onBackStep={handleBackStep}
            />
          )}
          {currentStep === 3 && orderType === "pickup" && (
            <PaymentMethod
              onPaymentMethodChange={(method) =>
                handleOrderDetailsChange("paymentMethod", method)
              }
              onNextStep={handleNextStep}
              onBackStep={handleBackStep}
            />
          )}
          {currentStep === 3 && orderType === "dining" && (
            <TableSelection
              onNextStep={handleNextStep}
              onBackStep={handleBackStep}
            />
          )}
          {currentStep === 4 && orderType === "dining" && (
            <ReservationSummary
              onNextStep={handleNextStep}
              onBackStep={handleBackStep}
            />
          )}
          {((currentStep === 4 && orderType === "pickup") ||
            (currentStep === 5 && orderType === "dining")) && (
            <Confirmation orderType={orderType} orderDetails={orderDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
