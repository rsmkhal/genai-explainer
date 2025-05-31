import React from 'react';

const HowToUse = () => {
  return (
    <div className="bg-white w-full">
      <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          How to Use This Site
        </h2>

        {/* Section: Navigation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Navigating the Content
          </h3>
          <p className="text-gray-700 mb-4">
            Use the navigation bar at the top of the page to access major sections of the site. Each section covers a distinct topic in the text-to-image AI pipeline:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
            <li><strong>Introduction:</strong> Overview of text-to-image AI and its significance</li>
            <li><strong>Generative Models:</strong> How models are trained and what data they rely on</li>
            <li><strong>Captioning:</strong> How text labels are paired with training images</li>
            <li><strong>Model Architectures:</strong> How diffusion and transformer models are structured and optimized</li>
            <li><strong>Prompt Demo:</strong> Interactive space to experiment with prompt design</li>
            <li><strong>Model Comparison:</strong> Visual differences between model outputs</li>
            <li><strong>Prompt Engineering:</strong> How to improve output with prompt design techniques</li>
            <li><strong>Legal & Ethical:</strong> Discussion of consent, copyright, and algorithmic bias</li>
          </ul>
        </div>

        {/* Section: Interactivity */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Interactive Features
          </h3>
          <p className="text-gray-700 mb-4">
            Many pages include embedded, interactive elements to help reinforce your understanding. Follow the instructions
            specified alongside each activity.
          </p>
        </div>

        {/* Section: Starting Point */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Recommended Starting Point
          </h3>
          <p className="text-gray-700">
            New to the topic? Click the <strong>Start Here</strong> button on the homepage to begin with the Introduction section. If you're already familiar, use the navigation bar to explore any topic directly.
          </p>
        </div>

        {/* Section: References */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            References & Further Reading
          </h3>
          <p className="text-gray-700">
            The <strong>References</strong> section provides links to the research papers, official docs, and articles cited throughout the site.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowToUse;
