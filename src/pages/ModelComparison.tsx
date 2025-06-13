// src/pages/ModelComparison.tsx
import React from "react";
import MockGenerator from "../components/MockGenerator";

const ModelComparison: React.FC = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 space-y-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Interactive Demo: Model Comparison
        </h2>
        <div className="prose prose-indigo prose-lg max-w-none text-gray-500">
          <p>
            Select a prompt from the dropdown and click “Generate” to see how four
            different models each render the same prompt.
          </p>
        </div>

        {/* Render your single mock generator here */}
        <MockGenerator />
      </div>
    </div>
  );
};

export default ModelComparison;