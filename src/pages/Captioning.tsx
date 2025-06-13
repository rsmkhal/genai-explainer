// src/pages/Captioning.tsx
import React, { useEffect } from "react";

const CaptioningTokenization: React.FC = () => {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white w-full">
      <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Automated Captioning, Tokenization, & Embeddings
        </h2>

        {/* 1. From Prompt to Tokens */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How a Prompt Becomes Numbers
          </h3>
          <p className="text-gray-700 mb-4">
            A text-to-image model cannot operate directly on characters. Instead
            it converts each prompt into a sequence of integer IDs through{' '}
            <strong>tokenization</strong>—the same first step used by large
            language models.
          </p>

          {/* Tokenization example */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Example</h4>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm mb-4">
            Prompt&nbsp;→&nbsp;"Portrait of a cyberpunk corgi in neon Tokyo"
            <br />
            Tokens&nbsp;→&nbsp;["Portrait", "of", "a", "cyber", "punk", "corgi",
            "in", "neon", "Tokyo"]
          </div>
          <p className="text-gray-700 mb-4">
            Each token is looked up in a vocabulary table and replaced by its
            integer index. The result is an array such as:
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm mb-6">
            [4312, 57, 7, 11894, 2986, 14027, 15, 9821, 6230]
          </div>
        </article>

        {/* 2. Embedding Layer */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Embeddings: Adding Meaning to IDs
          </h3>
          <p className="text-gray-700 mb-4">
            Raw IDs are arbitrary; the model still needs semantic structure. An{' '}
            <strong>embedding layer</strong> transforms each ID into a dense
            vector (typically 512–768 dimensions). During training, these
            vectors are adjusted so that semantically related words occupy
            nearby positions in the high-dimensional space.
          </p>
          <p className="text-gray-700 mb-4">
            In practice, embeddings capture nuances like style ("baroque" vs.
            "minimalist"), mood ("somber", "playful"), or even specific artists’
            names. Downstream diffusion or decoder modules then condition on
            these vectors when generating images
            (Rombach&nbsp;et&nbsp;al., 2022).
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-green-700">Advantages: </span>
            Compact representation—thousands of possible tokens map to a
            manageable vector size.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-red-600">Drawbacks: </span>
            Learned associations inherit biases from the training text corpus;
            e.g., word "doctor" may sit closer to male pronouns.
          </p>
        </article>

        {/* 3. Automated Captioning Pipelines */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Models Need Machine-Generated Captions
          </h3>
          <p className="text-gray-700 mb-4">
            For billions of web images no high-quality human caption exists.
            Automated captioning pipelines bridge that gap, pairing visuals with
            text so the model can learn multimodal correspondences at scale.
          </p>

          {/* How captioning works */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            Typical Pipeline
          </h4>
          <ol className="list-decimal list-inside ml-6 text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Vision backbone</strong> (often a CLIP or ResNet variant)
              extracts global and regional features.
            </li>
            <li>
              <strong>Language decoder</strong>—an LSTM, Transformer, or
              GPT-like head—generates a sentence conditioned on those features
              (Vinyals&nbsp;et&nbsp;al., 2015; Li&nbsp;et&nbsp;al., 2023).
            </li>
          </ol>
          <p className="text-gray-700 mb-4">
            Caption quality varies; many pipelines supplement machine output
            with confidence scores or fallback heuristics (e.g., file name as
            last resort).
          </p>

          {/* Error/bias table */}
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border text-gray-700 text-left text-sm">
              <thead>
                <tr>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Issue
                  </th>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Impact on Training
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    Generic captions ("Picture of a person")
                  </td>
                  <td className="border px-4 py-2">
                    Weak language–vision signal → bland outputs
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Hallucinated objects</td>
                  <td className="border px-4 py-2">
                    Model learns incorrect associations
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Cultural or gender bias</td>
                  <td className="border px-4 py-2">
                    Reinforcement of stereotypes in generated images
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* References */}
          <article>
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              References
            </h4>
            <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
              <li>
                Radford, A., et al. (2019).{' '}
                <i>Language Models are Unsupervised Multitask Learners.</i>{' '}
                <a
                  href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenAI
                </a>
              </li>
              <li>
                Rombach, R., et al. (2022).{' '}
                <i>
                  High-Resolution Image Synthesis with Latent Diffusion Models.
                </i>{' '}
                <a
                  href="https://arxiv.org/abs/2112.10752"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arXiv:2112.10752
                </a>
              </li>
              <li>
                Vinyals, O., et al. (2015).{' '}
                <i>Show and Tell: A Neural Image Caption Generator.</i>{' '}
                <a
                  href="https://arxiv.org/abs/1411.4555"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CVPR
                </a>
              </li>
              <li>
                Li, X., et al. (2023).{' '}
                <i>BLIP-2: Bootstrapping Language–Image Pre-training.</i>{' '}
                <a
                  href="https://arxiv.org/abs/2301.12597"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arXiv:2301.12597
                </a>
              </li>
            </ul>
          </article>
        </article>
      </section>
    </div>
  );
};

export default CaptioningTokenization;
