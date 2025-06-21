"use client";

import { CheckIcon } from "lucide-react";

interface Step {
  id: number;
  label: string;
  completed: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper = ({ steps, currentStep }: StepperProps) => {
  // Returns a description string for each step label
  const getStepDescription = (label: string) => {
    switch (label) {
      case "Place Your Order":
        return "Select your order type and timing";
      case "Order Summary":
        return "Review your order details";
      case "Dining Details":
        return "Specify your dining preferences";
      case "Select Table":
        return "Choose your preferred table";
      case "Payment":
        return "Choose your payment method";
      case "Reservation Details":
        return "Confirm your reservation";
      case "Confirmation":
        return "Complete your order";
      default:
        return "Step details here";
    }
  };

  return (
    <ol className="relative space-y-8 border-gray-700 border-s">
      {steps.map((step) => (
        <li key={step.id} className="ms-6">
          <span
            className={`
              absolute flex items-center justify-center w-8 h-8 rounded-full -start-4
              ring-4 ring-gray-900
              ${
                step.completed
                  ? "bg-[#CA9C5E]"
                  : step.id === currentStep
                  ? "bg-[#CA9C5E]"
                  : "bg-gray-700"
              }
            `}
          >
            {step.completed ? (
              <CheckIcon className="w-5 h-5 text-white" />
            ) : (
              <span
                className={`text-sm ${
                  step.id === currentStep ? "text-white" : "text-gray-400"
                }`}
              >
                {step.id}
              </span>
            )}
          </span>
          <div className="mt-0.5">
            <h3
              className={`
                font-medium leading-tight
                ${
                  step.id === currentStep
                    ? "text-white"
                    : step.completed
                    ? "text-[#CA9C5E]"
                    : "text-gray-400"
                }
              `}
            >
              {step.label}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {getStepDescription(step.label)}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Stepper;
