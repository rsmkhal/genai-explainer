// src/pages/PromptDemo.tsx
import React, { useState } from 'react';
import InteractiveDemo, { Option } from '../components/PromptDropDown';

const WOMEN_OPTIONS: Option[] = [
  { label: 'in soft lighting',      value: 'soft-lighting'      },
  { label: 'in hard lighting',      value: 'hard-lighting'      },
  { label: 'in rim lighting',       value: 'rim-lighting'       },
  { label: 'in cinematic lighting', value: 'cinematic-lighting' },
  { label: 'in natural lighting',   value: 'natural-lighting'   },
  { label: 'in candle lighting',    value: 'candle-lighting'    },
  { label: 'in top lighting',       value: 'top-lighting'       },
  { label: 'in under lighting',     value: 'under-lighting'     },
  { label: 'in studio lighting',    value: 'studio-lighting'    },
];

const WOMEN_IMAGE_MAP: Record<string, string> = {
  'default-lighting':   '/genai-explainer/images/women/default-lighting.png',
  'soft-lighting':      '/genai-explainer/images/women/soft-lighting.png',
  'hard-lighting':      '/genai-explainer/images/women/hard-lighting.png',
  'rim-lighting':       '/genai-explainer/images/women/rim-lighting.png',
  'cinematic-lighting': '/genai-explainer/images/women/cinematic-lighting.png',
  'natural-lighting':   '/genai-explainer/images/women/natural-lighting.png',
  'candle-lighting':    '/genai-explainer/images/women/candle-lighting.png',
  'top-lighting':       '/genai-explainer/images/women/top-lighting.png',
  'under-lighting':     '/genai-explainer/images/women/under-lighting.png',
  'studio-lighting':    '/genai-explainer/images/women/studio-lighting.png',
};

const CHILD_OPTIONS: Option[] = [
  { label: 'birds eye view', value: 'birds-eye-view' },
  { label: 'low angle',       value: 'low-angle' },
  { label: 'wide angle',      value: 'wide-angle' },
  { label: 'close up',        value: 'close-up' },
  { label: 'medium shot',     value: 'medium-shot' },
  { label: 'wide shot',       value: 'wide-shot' },
];

const CHILD_IMAGE_MAP: Record<string, string> = {
  'birds-eye-view': '/genai-explainer/images/child/birds-eye-view.png',
  'low-angle':       '/genai-explainer/images/child/low-angle.png',
  'wide-angle':      '/genai-explainer/images/child/wide-angle.png',
  'close-up':        '/genai-explainer/images/child/close-up.png',
  'medium-shot':     '/genai-explainer/images/child/medium-shot.png',
  'wide-shot':       '/genai-explainer/images/child/wide-shot.png',
};

const CHILDSTYLE_OPTIONS: Option[] = [
  { label: '3D render style',       value: '3drender-style' },
  { label: 'anime style',           value: 'anime-style' },
  { label: 'cartoon style',         value: 'cartoon-style' },
  { label: 'digital painting style', value: 'digitalpainting-style' },
  { label: 'flat vector style',     value: 'flatvector-style' },
  { label: 'oil painting style',    value: 'oilpainting-style' },
  { label: 'photorealistic style',  value: 'photorealistic-style' },
  { label: 'watercolor style',      value: 'watercolor-style' },
];

const CHILDSTYLE_IMAGE_MAP: Record<string, string> = {
  '3drender-style':         '/genai-explainer/images/childstyle/3drender-style.png',
  'anime-style':            '/genai-explainer/images/childstyle/anime-style.png',
  'cartoon-style':          '/genai-explainer/images/childstyle/cartoon-style.png',
  'digitalpainting-style':  '/genai-explainer/images/childstyle/digitalpainting-style.png',
  'flatvector-style':       '/genai-explainer/images/childstyle/flatvector-style.png',
  'oilpainting-style':      '/genai-explainer/images/childstyle/oilpainting-style.png',
  'photorealistic-style':   '/genai-explainer/images/childstyle/photorealistic-style.png',
  'watercolor-style':       '/genai-explainer/images/childstyle/watercolor-style.png',
  'default-style':          '/genai-explainer/images/childstyle/default-style.png',
};


const PromptDemo: React.FC = () => {

  return (
    <div className="max-w-3xl mx-auto space-y-8 p-6">
      <div className="prose mb-8">
        <h2 className="text-2xl font-semibold">Interactive Prompt Demonstration</h2>
        <p>
          These interactive demos help you understand how changing specific elements of a text prompt,
          such as lighting, camera angle, or artistic style, can dramatically alter the AI-generated image.
          Simply use the dropdown menus to tweak a prompt and immediately see the corresponding image update.
          This is a hands-on way to learn how descriptive keywords influence output quality and style,
          and to discover which combinations yield the best results.
        </p>
      </div>

      <div className="prose">
        <h3 className="text-xl font-medium">Artistic Style Demo</h3>
        <p>
          In this demo, you can apply different artistic styles to the same “child playing in a playground” scene.
          Choose from options like <em>anime style</em>, <em>photorealistic style</em>, or <em>watercolor style</em>,
          and see how the AI interprets each style keyword within the prompt. This helps you gauge how specifying
          an art style directly influences the final rendering.
        </p>
      </div>
      <InteractiveDemo
        promptTemplate="{{dropdown}} image of child playing in a playground"
        options={CHILDSTYLE_OPTIONS}
        imageMap={CHILDSTYLE_IMAGE_MAP}
        defaultValue="3drender-style"
      />

      <div className="prose">
        <h3 className="text-xl font-medium">Camera Angle Demo</h3>
        <p>
          In this demo, you can experiment with camera angles on a scene of a child playing in a playground.
          Use the dropdown to switch between perspectives like <em>birds-eye view</em>, <em>low-angle</em>,
          and <em>wide shot</em>. Observe how each viewpoint affects composition, scale, and the overall feeling
          of motion in the scene.
        </p>
      </div>
      <InteractiveDemo
        promptTemplate="{{dropdown}} image of child playing in a playground"
        options={CHILD_OPTIONS}
        imageMap={CHILD_IMAGE_MAP}
        defaultValue="birds-eye-view"
      />

      
      <div className="prose">
        <h3 className="text-xl font-medium">Lighting Adjustment Demo</h3>
        <p>
          In this demo, you can adjust various lighting conditions applied to an image of a woman sitting in a chair.
          Try selecting options like <em>soft lighting</em>, <em>hard lighting</em>, or <em>rim lighting</em> to see how
          different light sources and intensities change the mood, contrast, and detail of the final image.
        </p>
      </div>
      <InteractiveDemo
        promptTemplate="image of a woman sitting in a chair {{dropdown}}."
        options={WOMEN_OPTIONS}
        imageMap={WOMEN_IMAGE_MAP}
        defaultValue="soft-lighting"
      />

      

      
    </div>
  );
};

export default PromptDemo;