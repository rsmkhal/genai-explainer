import React from "react";
import StartHereButton from "../components/StartHereButton";

const Home = () => {
  return (
    <div className="bg-white w-full">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Background image with cover fit */}
          <img
            src="https://plus.unsplash.com/premium_photo-1676494236961-6f287c2eabda?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-900 mix-blend-multiply"></div>
        </div>

        {/* Text content */}
        <div className="relative px-4 py-32 sm:px-6 sm:py-40 lg:py-48 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Understanding Text-to-Image AI
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-2xl mx-auto">
              An interactive exploration of how AI transforms text prompts into
              images, from the data it learns from to the ethical considerations
              of its use.
            </p>
            <div className="mt-10">
              <StartHereButton className="text-lg px-8 py-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore the World of Generative AI
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              This interactive site guides you through the technology behind
              text-to-image AI models.
            </p>
          </div>

          {/* Section label for clarity */}
          <h3 className="text-xl font-semibold text-gray-800 mb-6 mt-12 text-center">
            What You'll Learn
          </h3>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                How Generative Models Learn
              </h4>
              <p className="mt-2 text-base text-gray-600">
                Discover how AI models are trained on massive datasets of
                images and captions—and how they generalize from them.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Interactive Demos
              </h4>
              <p className="mt-2 text-base text-gray-600">
                See how small changes to text prompts can dramatically change
                image outputs through live examples.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Ethical Considerations
              </h4>
              <p className="mt-2 text-base text-gray-600">
                Understand the legal, ethical, and environmental impacts of
                generative AI, including bias and copyright concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
