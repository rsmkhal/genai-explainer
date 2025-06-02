import React from "react";
const PromptDemo = () => {
  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Interactive Demo: Prompt ↔ Image
        </h2>
        <div className="prose prose-indigo prose-lg max-w-none text-gray-500 mb-8">
          <p>
            This page will feature an interactive demo with a slider to tweak a
            prompt's adjectives and show side-by-side images.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-center text-gray-500">
            Interactive demo will be implemented here
          </p>
        </div>
      </div>
    </div>
  );
};
export default PromptDemo;
