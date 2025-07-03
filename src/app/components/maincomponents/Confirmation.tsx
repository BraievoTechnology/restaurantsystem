import { CheckCircleIcon } from "lucide-react";

interface ConfirmationProps {
  orderType: "pickup" | "dining" | null;
  orderDetails: {
    date: string;
    time: string;
    paymentMethod: string;
  };
}

const Confirmation = ({ orderType, orderDetails }: ConfirmationProps) => {
  return (
    <div className="bg-[#131E21] rounded-lg p-6 shadow-lg text-center">
      <div className="flex justify-center mb-6">
        <div className="p-3 rounded-full bg-[#CA9C5E] hover:bg-[#68573A]">
          <CheckCircleIcon className="w-12 h-12 text-white" />
        </div>
      </div>
      <h2 className="mb-4 text-2xl font-semibold">Thank You!</h2>
      <div className="inline-block p-6 mb-6 bg-gray-700 rounded-lg">
        {orderType === "pickup" ? (
          <>
            <p className="mb-2 text-xl font-medium">Your Order Confirmed</p>
            <p className="text-gray-300">
              Your table has been successfully reserved
            </p>
          </>
        ) : (
          <>
            <p className="mb-2 text-xl font-medium">Your Table Reserved</p>
            <p className="text-gray-300">
              Your table has been successfully reserved.
            </p>
          </>
        )}
      </div>
      <div className="text-sm text-gray-400">
        <p>
          You will receive SMS/email updates about your{" "}
          {orderType === "pickup" ? "order" : "reservation"}.
        </p>
        <p className="mt-2">
          {orderType === "pickup"
            ? `Pickup on ${new Date(
                orderDetails.date
              ).toLocaleDateString()} at ${orderDetails.time}`
            : `See you on ${new Date(
                orderDetails.date
              ).toLocaleDateString()} at ${orderDetails.time}`}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
