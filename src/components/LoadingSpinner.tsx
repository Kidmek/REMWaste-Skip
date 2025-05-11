interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function LoadingSpinner({
  size = "medium",
  className = "",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-10 h-10",
    large: "w-16 h-16",
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className="relative">
        <div
          className={`${sizeClasses[size]} border-4 border-gray-700 rounded-full opacity-30 animate-ping absolute`}
        ></div>
        <div
          className={`${sizeClasses[size]} border-4 border-gray-700 border-t-blue-500 border-r-blue-400/50 rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
}
