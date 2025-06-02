import React from "react";

const GenerativeModels = () => {
  return (
    <div className="bg-white w-full">
      <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          How Generative Models Learn
        </h2>

        {/* Section: Dataset Origins */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Dataset Origins
          </h3>
          <p className="text-gray-700 mb-4">
            Generative AI models depend on vast datasets of images paired with
            descriptive captions. These pairs are critical for helping AI learn
            the relationship between language and visual content.
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1 mb-4">
            <li>
              <b>Web-scraped datasets:</b> Billions of image-text pairs gathered
              from public websites and image-sharing platforms (e.g., LAION-5B).
            </li>
            <li>
              <b>Curated datasets:</b> Smaller, human-annotated datasets with
              higher-quality captions and less noise (e.g., MS COCO).
            </li>
          </ul>
          <p className="text-gray-700 mb-2">
            <b>Key concerns with datasets:</b>
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
            <li>
              <b>Quality and relevance:</b> Web-scraped data is abundant but
              often noisy and ambiguous.
            </li>
            <li>
              <b>Biases and stereotypes:</b> Datasets can reinforce existing
              societal biases, resulting in biased outputs Birhane et al.,
              2021).
            </li>
            <li>
              <b>Licensing and copyright:</b> Many images are used without
              explicit creator permission, raising legal questions (Harvard
              Business Review, 2023).
            </li>
          </ul>
        </div>

        {/* Section: Automated Captioning & Tokenization */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Automated Captioning & Tokenization
          </h3>
          <p className="text-gray-700 mb-4">
            When you enter a prompt, generative AI models first break your input
            into smaller units called <b>tokens</b> (which can be words or parts
            of words). This tokenization enables models to process text
            mathematically.
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1 mb-4">
            <li>
              <b>Example Prompt:</b> "A dog on the moon"
            </li>
            <li>
              <b>Tokens:</b> [ "A", "dog", "on", "the", "moon" ]
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            <b>Role of captioning pipelines:</b> Automated systems generate
            captions for images at scale. This enables models to learn from
            large, loosely labeled datasets. However, automatically generated
            captions can be vague or inaccurate (Radford et al., 2019).
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
            <li>Extract visual features from images</li>
            <li>Generate descriptive captions or tags</li>
            <li>Associate these captions with images for training</li>
          </ul>
          <p className="text-gray-700 mt-4">
            These pipelines allow generative models to learn from huge datasets,
            despite some inaccuracies (Vinyals et al., 2015).
          </p>
        </div>

        {/* Section: Model Architectures */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Model Architectures (High-Level)
          </h3>
          <div className="mb-3">
            <b>
              Generative AI uses several approaches to create images from text.
              Here’s a quick comparison:
            </b>
          </div>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2 mb-6">
            <li>
              <b>Diffusion Models:</b> Start with random noise and gradually
              refine it into a clear image (e.g., Stable Diffusion, DALL·E 2).
              <span className="block text-gray-500 text-sm ml-4">
                + Exceptional detail and realism
                <br />– Slower, resource-intensive
              </span>
            </li>
            <li>
              <b>Autoregressive Models:</b> Generate images pixel-by-pixel, each
              one depending on the last (e.g., original DALL·E).
              <span className="block text-gray-500 text-sm ml-4">
                + Precise control
                <br />– Slow for large images
              </span>
            </li>
            <li>
              <b>Encoder-Decoder Models:</b> Convert prompts into numerical
              embeddings and then decode them into images (e.g., Imagen,
              conditional GANs).
              <span className="block text-gray-500 text-sm ml-4">
                + Fast and efficient
                <br />– May lack fine-grained detail
              </span>
            </li>
          </ul>
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full border text-gray-700 text-left text-base">
              <thead>
                <tr>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Trade-off
                  </th>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Quality vs. Speed</td>
                  <td className="border px-4 py-2">
                    Higher quality images usually require more compute and time.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Generalization vs. Specialization
                  </td>
                  <td className="border px-4 py-2">
                    Some models can handle many prompts; others excel at
                    specific styles or domains.
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Resource Requirements</td>
                  <td className="border px-4 py-2">
                    More powerful models need special hardware (GPUs/TPUs),
                    limiting everyday use.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* References */}
        <div className="mb-4">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            References & Further Reading
          </h4>
          <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
            <li>
              LAION-5B:{" "}
              <a
                href="https://laion.ai/blog/laion-5b/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schuhmann et al., 2022
              </a>
            </li>
            <li>
              MS COCO Dataset:{" "}
              <a
                href="https://arxiv.org/abs/1405.0312"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lin et al., 2014
              </a>
            </li>
            <li>
              Bias in Datasets:{" "}
              <a
                href="https://arxiv.org/abs/2106.15590"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Birhane et al., 2021
              </a>
            </li>
            <li>
              Licensing Concerns:{" "}
              <a
                href="https://hbr.org/2023/04/generative-ai-has-an-intellectual-property-problem"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harvard Business Review, 2023
              </a>
            </li>
            <li>
              Tokenization:{" "}
              <a
                href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Radford et al., 2019
              </a>
            </li>
            <li>
              Image Captioning:{" "}
              <a
                href="https://arxiv.org/abs/1411.4555"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vinyals et al., 2015
              </a>
            </li>
            <li>
              Diffusion Models:{" "}
              <a
                href="https://arxiv.org/abs/2112.10752"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rombach et al., 2022
              </a>
              ,{" "}
              <a
                href="https://openai.com/blog/dall-e/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenAI DALL·E 2
              </a>
            </li>
            <li>
              Autoregressive Models:{" "}
              <a
                href="https://arxiv.org/abs/2102.12092"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Original DALL·E paper
              </a>
            </li>
            <li>
              Encoder-Decoder Models:{" "}
              <a
                href="https://imagen.research.google/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Imagen, 2022
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default GenerativeModels;
