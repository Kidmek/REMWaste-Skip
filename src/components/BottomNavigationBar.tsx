interface BottomNavigationBarProps {
  title?: string;
  subtitle?: string;
  price?: number;
  additionalInfo?: {
    label: string;
    value: string | number;
  }[];
  onBack?: () => void;
  onContinue?: () => void;
  continueBtnDisabled?: boolean;
  continueText?: string;
  backText?: string;
  className?: string;
}

export default function BottomNavigationBar({
  title,
  subtitle,
  price,
  additionalInfo = [],
  onBack,
  onContinue,
  continueBtnDisabled = false,
  continueText = "Continue",
  backText = "Back",
  className = "",
}: BottomNavigationBarProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-gray-700 p-5 animate-slideUp z-50 shadow-2xl ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            {(title || subtitle) && (
              <div>
                {title && (
                  <h3 className="font-semibold text-lg text-white">{title}</h3>
                )}
                {subtitle && (
                  <p className="text-xs text-gray-300">{subtitle}</p>
                )}
              </div>
            )}
            {price !== undefined && (
              <div className="text-right">
                <span className="text-2xl font-bold text-[#0037C1] block">
                  £{Math.round(price)}
                </span>
                <span className="text-xs text-gray-300">Includes VAT</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {onBack && (
              <button
                onClick={onBack}
                className="py-3 px-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 w-full font-medium transition-colors"
              >
                {backText}
              </button>
            )}
            {onContinue && (
              <button
                onClick={onContinue}
                disabled={continueBtnDisabled}
                className={`py-3 px-4 bg-[#0037C1] text-white rounded-lg ${
                  !continueBtnDisabled ? "hover:bg-[#0037C1]/90" : "opacity-70"
                } w-full font-medium transition-colors shadow-lg flex items-center justify-center gap-2`}
              >
                <span>{continueText}</span>
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
                  className="w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-8">
            {title && (
              <div className="flex flex-col">
                <p className="text-xs text-gray-400 mb-1">
                  Selected {subtitle ? subtitle.toLowerCase() : "option"}
                </p>
                <p className="text-lg font-semibold text-white">{title}</p>
              </div>
            )}

            {additionalInfo.map((info, index) => (
              <div key={index} className="flex flex-col">
                <p className="text-xs text-gray-400 mb-1">{info.label}</p>
                <p className="text-lg font-semibold text-white">{info.value}</p>
              </div>
            ))}

            {price !== undefined && (
              <div className="flex flex-col">
                <p className="text-xs text-gray-400 mb-1">Total price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#0037C1]">
                    £{Math.round(price)}
                  </span>
                  <span className="text-xs text-gray-300">Inc. VAT</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="py-3 px-8 bg-gray-700 text-white rounded-lg hover:bg-gray-600 font-medium transition-colors"
              >
                {backText}
              </button>
            )}
            {onContinue && (
              <button
                onClick={onContinue}
                disabled={continueBtnDisabled}
                className={`py-3 px-8 bg-[#0037C1] text-white rounded-lg ${
                  !continueBtnDisabled ? "hover:bg-[#0037C1]/90" : "opacity-70"
                } font-medium transition-colors shadow-lg flex items-center gap-2`}
              >
                {continueText}
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
                  className="w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
