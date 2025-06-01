import React from 'react';
import PipelineDragAndDrop from '../components/PipelineDragAndDrop'; // Adjust the path if needed

const Introduction = () => {
  return (
    <div className="bg-white w-full">
      <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Introduction & Motivation
        </h2>

        {/* Section: What is Text-to-Image Generative AI? */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            What is Text-to-Image Generative AI?
          </h3>
          <p className="text-gray-700 mb-4">
            Text-to-image generative AI is a subset of generative artificial intelligence, specifically designed to produce images directly from textual descriptions. Unlike traditional machine learning models—which primarily classify data or make predictions—generative models create entirely new data, resembling the training examples but not directly copied from them (AWS, 2024).
          </p>

          <p className="text-gray-700 mb-4">
            Traditional machine learning models are discriminative, meaning they identify relationships between input features and labels. For instance, they recognize patterns in images—such as pixel arrangements, lines, colors, and shapes—to categorize or label them. Generative models, however, reverse this relationship. They aim to generate new features based on a given label or description. Mathematically, this involves modeling the probability distribution of both inputs and outputs simultaneously, allowing these models to synthesize new and original examples (AWS, 2024).
          </p>

          <p className="text-gray-700 mb-4">
            For example, a generative model analyzing animal images would learn variations in features like ear shape, eye placement, tail characteristics, and fur patterns. After capturing these relationships, the model can generate novel animal images, even though these specific images were not present in its training data.
          </p>
        </div>

        {/* Section: Example - DALL-E */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Example: DALL-E
          </h3>
          <p className="text-gray-700 mb-4">
            DALL-E is a prominent text-to-image generative AI model developed by OpenAI. It enables both artists and non-artists to create diverse, high-quality visuals from text prompts. DALL-E is trained on extensive datasets consisting of paired images and descriptive text, empowering it to emulate various artistic styles and create novel images.
          </p>

          <p className="text-gray-700 mb-4">
            At its core, DALL-E utilizes a transformer language model, similar to those found in GPT models. The input—text prompts or image descriptions—is converted into smaller units called tokens. DALL-E compares these tokens with patterns learned during its training, interpreting the intent of the user's prompt to generate new, original images quickly and effectively (OpenAI, 2024).
          </p>

          {/* Interactive Pipeline Explanation */}
          <p className="text-gray-700 mb-4">
            Explore our interactive Drag-and-Drop Pipeline Builder to visualize the process:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
            <li><strong>Prompt → Tokenization → Embedding → Image</strong></li>
            <li>Click on each step for brief explanations and related resources.</li>
          </ul>
          <PipelineDragAndDrop />
        </div>

        {/* Section: Why Should You Care? */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Why Should You Care?
          </h3>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
            <li>Lower barriers to visual content creation.</li>
            <li>Powerful tool for brainstorming and ideation.</li>
            <li>Rapid prototyping of visual concepts.</li>
            <li>Augmenting human creativity with machine capabilities.</li>
            <li>Accessible visual expression regardless of traditional artistic skills.</li>
          </ul>
        </div>

        {/* Section: How to Use This Site */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            How to Use This Site
          </h3>
          <p className="text-gray-700 mb-4">
            Navigate using the top bar to explore various topics:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
            <li>Adjust complexity levels through provided options.</li>
            <li>Interactive elements help reinforce key concepts.</li>
            <li>External links offer additional resources for further exploration.</li>
          </ul>
          <p className="text-gray-700 mt-4 italic">
            Disclaimer: This site provides an educational overview. Users should refer to original research and documentation for detailed and specific implementations.
          </p>
        </div>

        {/* References */}
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            References
          </h4>
          <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
            <li>AWS. (2024). What is Generative AI? Retrieved from <a href="https://aws.amazon.com/what-is/generative-ai/" className="text-blue-600 underline">AWS Generative AI</a>.</li>
            <li>OpenAI. (2024). DALL-E. Retrieved from <a href="https://openai.com/dall-e" className="text-blue-600 underline">OpenAI DALL-E</a>.</li>
          </ul>
        </div>

      </section>
    </div>
  );
};

export default Introduction;