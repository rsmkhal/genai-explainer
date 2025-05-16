import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const Introduction = () => {
  return <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Introduction & Motivation
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Understanding the revolutionary technology that's changing how we
              create visual content.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="prose prose-indigo prose-lg text-gray-500">
              <h3>What is text-to-image generative AI?</h3>
              <p>
                Text-to-image generative AI refers to artificial intelligence
                systems that can create visual content based on textual
                descriptions. These models take a text prompt as input and
                generate corresponding images, effectively translating words
                into pictures.
              </p>
              <p>
                In recent years, models like DALL·E, Midjourney, and Stable
                Diffusion have demonstrated remarkable capabilities in
                generating highly detailed, creative, and sometimes
                photorealistic images from text descriptions.
              </p>
              <h3>Why this matters</h3>
              <p>
                For creatives and hobbyists, text-to-image AI represents a
                revolutionary new tool that can:
              </p>
              <ul>
                <li>Lower barriers to visual content creation</li>
                <li>Serve as a powerful brainstorming and ideation tool</li>
                <li>Enable rapid prototyping of visual concepts</li>
                <li>Augment human creativity with machine capabilities</li>
                <li>
                  Make visual expression accessible to those without traditional
                  artistic training
                </li>
              </ul>
              <h3>How this site is organized</h3>
              <p>
                This educational site takes you through a comprehensive journey
                of text-to-image AI:
              </p>
              <ol>
                <li>
                  We begin with how these models learn from massive datasets
                </li>
                <li>
                  Explore the technical process of translating text to visual
                  elements
                </li>
                <li>
                  Compare different model architectures and their capabilities
                </li>
                <li>
                  Provide interactive demonstrations to experience the
                  technology firsthand
                </li>
                <li>Share practical tips for crafting effective prompts</li>
                <li>Discuss important legal and ethical considerations</li>
              </ol>
              <div className="mt-10">
                <Link to="/generative-models" className="inline-flex items-center text-indigo-600 font-medium">
                  Continue to How Generative Models Learn
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Introduction;