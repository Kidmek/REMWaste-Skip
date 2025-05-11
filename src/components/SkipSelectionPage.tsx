import { useSkipFilters } from "../hooks/useSkipFilters";
import SkipCard from "./SkipCard";
import { useCallback } from "react";
import type { Skip } from "../types/skip";
import { useSkipContext } from "../contexts/SkipContext";
import FilterSelect from "./FilterSelect";
import StepProgressIndicator from "./StepProgressIndicator";
import type { Step } from "./StepProgressIndicator";
import BottomNavigationBar from "./BottomNavigationBar";
import {
  PostcodeIcon,
  WasteTypeIcon,
  SkipIcon,
  PermitIcon,
  DateIcon,
  PaymentIcon,
} from "../assets/icons/StepIcons";

interface SkipSelectionPageProps {
  skips: Skip[];
}

export default function SkipSelectionPage({ skips }: SkipSelectionPageProps) {
  const { setSelectedSkipId, selectedSkipId } = useSkipContext();

  const { filter, setFilter, filteredSkips, sortedSkips, calculateTotalPrice } =
    useSkipFilters(skips);

  const handleSelectSkip = useCallback(
    (id: number) => {
      if (id === selectedSkipId) {
        setSelectedSkipId(null);
      } else {
        setSelectedSkipId(id);
      }
    },
    [setSelectedSkipId, selectedSkipId]
  );

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  const accentColor = "#0037C1";

  const steps: Step[] = [
    {
      id: "postcode",
      label: "Postcode",
      icon: <PostcodeIcon />,
      isCompleted: true,
      isActive: false,
      isDisabled: false,
      onClick: () => console.log("Navigate to postcode step"),
    },
    {
      id: "waste-type",
      label: "Waste Type",
      icon: <WasteTypeIcon />,
      isCompleted: true,
      isActive: false,
      isDisabled: false,
      onClick: () => console.log("Navigate to waste type step"),
    },
    {
      id: "skip",
      label: "Select Skip",
      icon: <SkipIcon />,
      isCompleted: false,
      isActive: true,
      isDisabled: false,
    },
    {
      id: "permit",
      label: "Permit Check",
      icon: <PermitIcon />,
      isCompleted: false,
      isActive: false,
      isDisabled: true,
    },
    {
      id: "date",
      label: "Choose Date",
      icon: <DateIcon />,
      isCompleted: false,
      isActive: false,
      isDisabled: true,
    },
    {
      id: "payment",
      label: "Payment",
      icon: <PaymentIcon />,
      isCompleted: false,
      isActive: false,
      isDisabled: true,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <StepProgressIndicator steps={steps} />

      <div className="max-w-7xl mx-auto py-8 pb-40">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold text-center mb-3 text-white">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-300 text-center max-w-xl">
            Select the skip size that best suits your needs
          </p>
        </div>

        <div className="md:hidden mb-6">
          <FilterSelect filter={filter} onChange={setFilter} />
        </div>

        <div className="hidden md:flex justify-center gap-3 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-medium ${
              filter === "all"
                ? `bg-[${accentColor}] text-white shadow-lg shadow-[${accentColor}]/30`
                : `bg-[#1C1C1C] border border-gray-700 text-gray-200 hover:border-[${accentColor}]`
            }`}
          >
            All Skips
          </button>
          <button
            onClick={() => setFilter("road")}
            className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-medium ${
              filter === "road"
                ? `bg-[${accentColor}] text-white shadow-lg shadow-[${accentColor}]/30`
                : `bg-[#1C1C1C] border border-gray-700 text-gray-200 hover:border-[${accentColor}]`
            }`}
          >
            Road Placement
          </button>
          <button
            onClick={() => setFilter("heavy")}
            className={`px-6 py-2.5 rounded-lg transition-all duration-300 font-medium ${
              filter === "heavy"
                ? `bg-[${accentColor}] text-white shadow-lg shadow-[${accentColor}]/30`
                : `bg-[#1C1C1C] border border-gray-700 text-gray-200 hover:border-[${accentColor}]`
            }`}
          >
            Heavy Waste
          </button>
        </div>

        {filteredSkips.length === 0 ? (
          <div className="text-center py-16 bg-[#1C1C1C]/60 rounded-xl border border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xl text-gray-300 font-medium">
              No skips match your current filter criteria
            </p>
            <button
              onClick={() => setFilter("all")}
              className="mt-6 px-6 py-2.5 rounded-lg bg-[#0037C1] text-white hover:bg-[#0037C1]/90 transition-colors font-medium"
            >
              Show All Skips
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sortedSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkipId === skip.id}
                onSelect={handleSelectSkip}
                calculateTotalPrice={calculateTotalPrice}
              />
            ))}
          </div>
        )}
      </div>

      {selectedSkipId && selectedSkip && (
        <BottomNavigationBar
          title={`${selectedSkip.size} Yard Skip`}
          subtitle="Skip Selection"
          price={calculateTotalPrice(selectedSkip)}
          additionalInfo={[
            {
              label: "Hire period",
              value: `${selectedSkip.hire_period_days} days`,
            },
          ]}
          onBack={() => console.log("Go back to waste type selection")}
          onContinue={() => console.log("Continue to permit check")}
          backText="Back"
          continueText="Continue"
        />
      )}
    </main>
  );
}
