// src/components/MockGenerator.tsx
import React, { useState } from 'react';

// Prewritten prompts for selection
const PREWRITTEN_PROMPTS = [
  'A dreamy watercolor forest at dawn with glowing fairy lanterns',
  'A futuristic cyberpunk street market at night, rain-soaked, reflective neon puddles',
  'Scientific illustration of the human heart in cutaway, labeled parts, vintage engraving style',
  'A wide-angle shot of a bustling farmers market at dawn, natural window light, candid human interactions',
  'Product shot of a sleek wireless headphone on a marble table, dramatic backlighting, reflective highlight',
  'Podcast cover art: modern microphone on vinyl record background, bold contrast, headline text space',
  'Branded infographic (flat style): three-step workflow for onboarding process, company color palette',
];

// Map each prompt to two images: [DALL-E, Stable Diffusion]
const PROMPT_IMAGE_MAP: Record<string, string[]> = {
  'A dreamy watercolor forest at dawn with glowing fairy lanterns': [
    '/genai-explainer/images/modelGPT/dreamy.png',
    '/genai-explainer/images/modelDIFF/dreamy1.png',
  ],
  'A futuristic cyberpunk street market at night, rain-soaked, reflective neon puddles': [
    '/genai-explainer/images/modelGPT/future.png',
    '/genai-explainer/images/modelDIFF/future1.png',
  ],
  'Scientific illustration of the human heart in cutaway, labeled parts, vintage engraving style': [
    '/genai-explainer/images/modelGPT/science.png',
    '/genai-explainer/images/modelDIFF/science1.png',
  ],
  'A wide-angle shot of a bustling farmers market at dawn, natural window light, candid human interactions': [
    '/genai-explainer/images/modelGPT/farmer.png',
    '/genai-explainer/images/modelDIFF/farmer1.png',
  ],
  'Product shot of a sleek wireless headphone on a marble table, dramatic backlighting, reflective highlight': [
    '/genai-explainer/images/modelGPT/product.png',
    '/genai-explainer/images/modelDIFF/product1.png',
  ],
  'Podcast cover art: modern microphone on vinyl record background, bold contrast, headline text space': [
    '/genai-explainer/images/modelGPT/podcast.png',
    '/genai-explainer/images/modelDIFF/podcast1.png',
  ],
  'Branded infographic (flat style): three-step workflow for onboarding process, company color palette': [
    '/genai-explainer/images/modelGPT/onboard.png',
    '/genai-explainer/images/modelDIFF/onboard1.png',
  ],
};

// Names for the two models
const MODEL_NAMES = ['DALL-E', 'Stable Diffusion'];

const MockGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState<string>(PREWRITTEN_PROMPTS[0]);
  const [images, setImages] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = () => {
    setLoading(true);
    setImages(null);
    setTimeout(() => {
      const realImages = PROMPT_IMAGE_MAP[prompt] || [];
      setImages(realImages);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      {/* Prompt selector */}
      <div className="flex items-center space-x-2">
        <select
          className="flex-1 border rounded px-3 py-2"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        >
          {PREWRITTEN_PROMPTS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? 'Generating…' : 'Generate'}
        </button>
      </div>

      {/* Results grid for two models */}
      {images && (
        <div className="grid grid-cols-2 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="space-y-1 text-center">
              <h4 className="font-medium text-sm">{MODEL_NAMES[idx]}</h4>
              <img
                src={src}
                alt={`${MODEL_NAMES[idx]} output`}
                className="w-full rounded"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MockGenerator;
