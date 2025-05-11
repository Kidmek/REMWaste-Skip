import { Fragment, type ReactNode } from "react";

export interface Step {
  id: string;
  label: string;
  icon: ReactNode;
  isCompleted: boolean;
  isActive: boolean;
  isDisabled: boolean;
  onClick?: () => void;
}

interface StepProgressIndicatorProps {
  steps: Step[];
}

export default function StepProgressIndicator({
  steps,
}: StepProgressIndicatorProps) {
  return (
    <div className="flex justify-center overflow-x-auto pb-5">
      <div className="flex items-center space-x-4 rounded-full shadow-xl">
        {steps.map((step, index) => (
          <Fragment key={step.id}>
            {index > 0 && (
              <div
                className={`w-12 md:w-16 h-0.5 ${
                  step.isCompleted || step.isActive
                    ? `bg-[#0037C1]`
                    : "bg-gray-600"
                }`}
              />
            )}

            <button
              onClick={step.onClick}
              disabled={step.isDisabled}
              className={`flex items-center whitespace-nowrap transition-colors ${
                step.isDisabled
                  ? "text-white/40 cursor-not-allowed opacity-50"
                  : step.isActive
                  ? `text-[#0037C1] cursor-pointer hover:text-[#0037C1]/80`
                  : step.isCompleted
                  ? `text-[#0037C1] cursor-pointer hover:text-[#0037C1]/80`
                  : "text-white cursor-pointer hover:text-gray-300"
              }`}
            >
              {step.icon}
              <span className="ml-2 text-white font-medium">{step.label}</span>
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
