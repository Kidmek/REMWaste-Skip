import { memo } from "react";
import type { Skip } from "../types/skip";

interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (id: number) => void;
  calculateTotalPrice: (skip: Skip) => number;
}

function SkipCard({
  skip,
  isSelected,
  onSelect,
  calculateTotalPrice,
}: SkipCardProps) {
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;

  return (
    <div
      onClick={() => !isDisabled && onSelect(skip.id)}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isSelected
          ? `border-[#0037C1] ring-2 ring-[#0037C1] ring-opacity-50`
          : isDisabled
            ? "border-gray-700 opacity-70"
            : `border-gray-700 hover:border-[#0037C1]`
      } bg-[#1C1C1C] text-white ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer hover:shadow-xl"
      }`}
    >
      <div className="relative">
        <div className="relative h-44 overflow-hidden">
          <img
            src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
            alt={`${skip.size} Yard Skip`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C1C1C]/90"></div>

          <div className="absolute top-3 right-3 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {skip.size} Yards
          </div>

          {isSelected && (
            <div className="absolute top-3 left-3">
              <div className="h-6 w-6 rounded-full bg-[#0037C1] flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#1C1C1C] py-5 px-5">
          <h3 className="text-xl font-bold mb-1 text-white">
            {skip.size} Yard Skip
          </h3>
          <p className="text-gray-400 text-sm">
            {skip.hire_period_days} day hire
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {skip.allowed_on_road && (
              <div className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Can be placed on road</span>
              </div>
            )}

            {skip.allows_heavy_waste && (
              <div className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Suitable for heavy waste</span>
              </div>
            )}

            {!skip.allowed_on_road && (
              <div className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Cannot be placed on road</span>
              </div>
            )}

            {!skip.allows_heavy_waste && (
              <div className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-rose-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Not for heavy waste</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 bg-[#1C1C1C] border-t border-gray-700">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-gray-400 text-sm">Price (inc. VAT)</p>
            <p className="text-2xl font-bold">
              £{Math.round(calculateTotalPrice(skip))}
            </p>
          </div>

          {isDisabled ? (
            <div className="px-4 py-2 border border-gray-600 rounded-lg text-gray-400 bg-[#1C1C1C]/50 text-sm font-medium">
              Out of Stock
            </div>
          ) : (
            <button
              className={
                isSelected
                  ? "py-2 px-4 rounded-md bg-[#0037C1] hover:bg-[#0037C1]/90 text-white font-medium text-sm transition-colors duration-200"
                  : "py-2 px-4 rounded-md border border-white text-white hover:bg-[#0037C1]/10 font-medium text-sm transition-colors duration-200"
              }
              onClick={(e) => {
                e.stopPropagation();
                onSelect(skip.id);
              }}
            >
              {isSelected ? "Selected" : "Select"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(SkipCard);
