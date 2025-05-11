import { LoadingSpinner, SkipSelectionPage } from "@/components";
import { useSkipContext } from "@/contexts/SkipContext";
import { fetchSkipsByLocation } from "@/lib/api";
import { useEffect, useState } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { skips, setSkips } = useSkipContext();

  useEffect(() => {
    async function loadSkips() {
      try {
        setIsLoading(true);
        const postcode = "NR32";
        const area = "Lowestoft";

        const data = await fetchSkipsByLocation(postcode, area);
        setSkips(data);
      } catch (error) {
        setError("Failed to load skip options. Please try again later.");
        console.error("Error fetching skips:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSkips();
  }, [setSkips]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1C1C] to-[#1C1C1C] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl opacity-20"></div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[80vh] flex-col">
          <LoadingSpinner size="large" />
          <p className="mt-6 text-gray-300 text-lg font-medium">
            Loading skip options...
          </p>
          <p className="text-gray-400 text-sm mt-2">
            This might take a few moments
          </p>
        </div>
      ) : error ? (
        <div className="text-center text-red-400 py-16 flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-[#1C1C1C]/90 border border-red-700 rounded-xl p-8 max-w-md mx-auto backdrop-blur-sm shadow-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-red-500 mx-auto mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h3>
            <p className="text-lg font-medium text-red-300 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:from-red-500 hover:to-red-400 transition-colors font-medium text-lg shadow-lg w-full"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <SkipSelectionPage skips={skips} />
      )}
    </div>
  );
}
