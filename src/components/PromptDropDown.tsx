import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export type Option = {
  label: string;
  value: string;
};

export interface InteractiveDemoProps {
  /** Template string that includes a {{dropdown}} placeholder */
  promptTemplate: string;
  /** Dropdown options */
  options: Option[];
  /** Maps option values to image URLs */
  imageMap: Record<string, string>;
  /** Initial selected value */
  defaultValue: string;
  /** Show or hide the technical note */
  showTechnicalNote?: boolean;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  promptTemplate,
  options,
  imageMap,
  defaultValue,
  showTechnicalNote = true,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const parts = promptTemplate.split('{{dropdown}}');
  const beforeDropdown = parts[0] || '';
  const afterDropdown = parts[1] || '';

  const selectedLabel =
    options.find((o) => o.value === selectedOption)?.label || selectedOption;
  const tokenList = selectedLabel.trim().split(' ').map((tok) => `"${tok}"`);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 border rounded-lg shadow-sm">
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

      <div className="border rounded overflow-hidden">
        <img
          src={imageMap[selectedOption]}
          alt={`Example ${selectedLabel}`}
          className="w-full object-cover"
        />
      </div>

      {showTechnicalNote && (
        <div className="mt-4 bg-gray-50 p-4 rounded space-y-4">
          <p className="font-semibold text-xl mb-4">Technical Note:</p>

          <div>
            <p className="font-semibold mb-1">1. Split into tokens (tokenization)</p>
            <p className="ml-4 mb-2">
              When you pick “<span className="italic">{selectedLabel}</span>,” the model
              breaks that phrase into simple pieces like [{tokenList.join(', ')}].
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">
              2. Group familiar phrases (subword/phrase merging)
            </p>
            <p className="ml-4 mb-2">
              It recognizes that tokens belong together—so “<span className="italic">{selectedLabel}</span>”
              becomes one unit instead of treating {tokenList.join(', ')} separately.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">
              3. Make “sticky-note” reminders (embeddings)
            </p>
            <p className="ml-4 mb-2">
              For each idea—“<span className="italic">{selectedLabel}</span>,” child, playground—
              the model creates a numeric embedding (a vector). Think of it as a sticky note
              capturing what the idea means based on prior learning.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-1">4. Guide the image creation</p>
            <p className="ml-4 mb-2">
              Depending on the architecture, embeddings steer generation in one of three ways:
            </p>

            <div className="bg-white border p-3 rounded mb-2">
              <p className="font-semibold">A) Diffusion model (diffusion conditioning)</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Starts from random “fuzz” (noise) and refines it into an image.</li>
                <li>
                  At each denoising step, the U-Net checks embeddings via cross-attention,
                  asking “Is this still matching ‘{selectedLabel}’, child, playground?”
                </li>
                <li>Nudges the image toward those reminders so the final picture reflects your prompt.</li>
              </ul>
            </div>

            <div className="bg-white border p-3 rounded mb-2">
              <p className="font-semibold">B) Autoregressive model (sequential prediction)</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Treats the image as a sequence of visual tokens (pixels or patches).</li>
                <li>Generates one token at a time, referencing previous tokens & embeddings.</li>
                <li>
                  Each new token is placed only if it fits the prompt context: “Does this next piece
                  fit ‘{selectedLabel}’ with a child in a playground?”
                </li>
              </ul>
            </div>

            <div className="bg-white border p-3 rounded">
              <p className="font-semibold">C) Encoder–decoder model (latent decoding)</p>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Encodes your prompt into a summary vector via a text encoder.</li>
                <li>
                  A decoder network takes that summary and initial noise/canvas to produce the image.
                </li>
                <li>
                  Throughout decoding, it consults the summary embedding to guide pixel generation,
                  ensuring the output matches the prompt.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-2">
            <Link to="/captioning" className="text-blue-600 underline">
              Learn more about tokenization & embeddings →
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;
