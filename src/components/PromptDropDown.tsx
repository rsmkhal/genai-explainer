import React, { useState } from 'react';

export type Option = {
  label: string;
  value: string;
};

export interface InteractiveDemoProps {
  /** Template string that includes a {{dropdown}} placeholder, e.g. "image of a woman sitting in a {{dropdown}}" */
  promptTemplate: string;
  /** Array of dropdown options: each has a visible label and a corresponding value */
  options: Option[];
  /** Maps each option.value to the public-folder image URL (e.g. '/images/soft-lighting.png') */
  imageMap: Record<string, string>;
  /** The initial selected value on first render, e.g. 'default-lighting' */
  defaultValue: string;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  promptTemplate,
  options,
  imageMap,
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const parts = promptTemplate.split('{{dropdown}}');
  const beforeDropdown = parts[0] || '';
  const afterDropdown = parts[1] || '';

  // Find the “label” for the current selectedOption
  const selectedLabel =
    options.find((o) => o.value === selectedOption)?.label || selectedOption;

  // Turn the selectedOption value into tokens (split on “-”)
  const tokenList = selectedLabel.trim().split(' ').map((tok) => `"${tok}"`);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 border rounded-lg shadow-sm">
      {/* Prompt sentence with inline dropdown */}
      <p className="text-lg flex items-center">
        {beforeDropdown}
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-base mx-1"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {afterDropdown}
      </p>

      {/* Display the image matching the current selection */}
      <div className="border rounded overflow-hidden">
        <img
          src={imageMap[selectedOption]}
          alt={`Example ${options.find((o) => o.value === selectedOption)?.label}`}
          className="w-full object-cover"
        />
      </div>

      <div className="mt-4 bg-gray-50 p-4 rounded">
        <p className="font-semibold text-xl mb-4">Technical Note:</p>
        <p className="font-semibold mb-2">1.	Split into tokens (tokenization)</p>

        <p className="mb-2">When you pick “<span className="italic">{selectedLabel}</span>,” the model first breaks that phrase into simple pieces like [{tokenList.join(', ')}]. </p>

        <p className="font-semibold mb-2">2.	Group familiar phrases (subword/phrase merging)</p>

        <p className="mb-2">It recognizes that certain tokens belong together—so “<span className="italic">{selectedLabel}</span>” becomes one unit instead of treating {tokenList.join(', ')} separately. </p>

        <p className="font-semibold mb-2">3. Make “sticky-note” reminders (embeddings)</p>

        <p className="mb-2">For each idea—“{selectedLabel},” “child,” “playground,” etc., the model creates a
        numeric embedding (a high-dimensional vector). Think of that embedding as an
        internal sticky note capturing what the idea means based on everything the
        model has learned before.</p>

        <p className="font-semibold mb-2">4. Guide the drawing (diffusion conditioning)</p>

        <p className="mb-2">As the AI starts with a fuzz and refines it into an image, it continually
        refers back to those "sticky notes" (embeddings). At each refining step, it checks with and nudges the image back
        toward matching those “sticky-note” reminders. This ongoing process is how diffusion
        conditioning uses those embeddings to steer the final pixels.</p>


        <p className="mt-2">
          <br />
          <a
            href="/generative-models#tokenization"
            className="text-blue-600 underline"
          >
            Learn more about tokenization →
          </a>
        </p>
      </div>
    </div>
  );
};

export default InteractiveDemo;