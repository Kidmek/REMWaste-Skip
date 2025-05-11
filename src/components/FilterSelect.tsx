import type { ChangeEvent } from "react";

type FilterType = "all" | "road" | "heavy";

interface FilterSelectProps {
  filter: FilterType;
  onChange: (filter: FilterType) => void;
  className?: string;
}

export default function FilterSelect({
  filter,
  onChange,
  className = "",
}: FilterSelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as FilterType);
  };

  return (
    <div className={`relative ${className}`}>
      <label htmlFor="filter-select" className="sr-only">
        Filter skips by
      </label>
      <select
        id="filter-select"
        value={filter}
        onChange={handleChange}
        className={`block w-full rounded-lg border border-gray-700 bg-[#1C1C1C] py-3 pl-4 pr-10 text-white focus:border-[#0037C1] focus:outline-none focus:ring-1 focus:ring-[#0037C1] shadow-lg appearance-none transition-all duration-300 hover:border-[#0037C1] cursor-pointer font-medium text-sm`}
      >
        <option value="all">All Skip Sizes</option>
        <option value="road">Road Placement Only</option>
        <option value="heavy">Heavy Waste Compatible</option>
      </select>
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#0037C1]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
