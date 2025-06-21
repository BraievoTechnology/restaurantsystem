"use client";

import { useState } from "react";
import { UsersIcon, TreesIcon, UmbrellaIcon } from "lucide-react";
import FloorPlan from "../../components/maincomponents/FloorPlan";

interface Table {
  id: string;
  label: string;
  capacity: number;
  location: "indoor" | "outdoor";
}

interface TableSelectionProps {
  onNextStep: () => void;
  onBackStep: () => void;
}

const TableSelection = ({ onNextStep, onBackStep }: TableSelectionProps) => {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const tables: Table[] = [
    { id: "A1", label: "Table A1", capacity: 2, location: "indoor" },
    { id: "A2", label: "Table A2", capacity: 4, location: "indoor" },
    { id: "B1", label: "Table B1", capacity: 2, location: "outdoor" },
    { id: "B2", label: "Table B2", capacity: 6, location: "outdoor" },
    { id: "C1", label: "Table C1", capacity: 4, location: "indoor" },
    { id: "C2", label: "Table C2", capacity: 2, location: "indoor" },
    { id: "D1", label: "Table D1", capacity: 8, location: "outdoor" },
    { id: "D2", label: "Table D2", capacity: 4, location: "outdoor" },
  ];

  return (
    <div className="bg-[#131E21] rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-center mb-8">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500" />
        <h2 className="text-2xl font-semibold px-4 text-center text-[#CA9C5E]">
          Select A Table
        </h2>
        <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 md:grid-cols-4">
        {tables.map((table) => (
          <button
            key={table.id}
            onClick={() => setSelectedTable(table.id)}
            className={`relative p-4 rounded-lg transition-all ${
              selectedTable === table.id
                ? "bg-teal-600 ring-2 ring-amber-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            aria-selected={selectedTable === table.id}
          >
            <div className="flex flex-col items-center">
              <UsersIcon
                className={`h-8 w-8 mb-2 ${
                  selectedTable === table.id
                    ? "text-amber-400"
                    : "text-amber-500"
                }`}
              />
              <span className="font-medium text-white">{table.label}</span>
              <span className="text-sm text-gray-300">
                {table.capacity} People
              </span>
              <span className="mt-1 text-xs text-gray-400">
                {table.location === "indoor" ? "Indoor" : "Outdoor"}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mb-8">
        <div className="p-6 bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <TreesIcon className="w-5 h-5 mr-2 text-teal-400" />
              <span className="text-sm text-gray-300">Garden Area</span>
            </div>
            <div className="flex items-center">
              <UmbrellaIcon className="w-5 h-5 mr-2 text-amber-500" />
              <span className="text-sm text-gray-300">Outdoor Seating</span>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden">
            <FloorPlan
              selectedTable={selectedTable}
              onTableSelect={setSelectedTable}
            />
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm text-center text-gray-500">
        If you want more details about table reservations, scroll down to see
        more.
      </p>

      <div className="flex justify-between">
        <button
          onClick={onBackStep}
          className="px-6 py-2 font-medium text-gray-300 transition-all bg-gray-700 rounded-md hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={onNextStep}
          disabled={!selectedTable}
          className={`
            px-6 py-2 font-medium rounded-md transition-all
            ${
              selectedTable
                ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableSelection;
