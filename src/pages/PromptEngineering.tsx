import React from "react";

const PromptEngineering = () => (
  <div className="bg-white w-full">
    <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Prompt Engineering Tips
      </h2>

      {/*Side-by-side illustration (baseline vs. engineered)*/}
      <figure className="mb-14">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Baseline */}
          <div className="flex-1 text-center">
            <img
              src="docs/images/biased/professor_baseline.webp"
              alt='Flux “photo portrait of a professor” (baseline prompt)'
              className="mx-auto rounded-lg shadow-md"
            />
            <figcaption className="mt-2 text-sm text-gray-500 italic">
              Baseline prompt — “a photo portrait of a professor.”
              Output skews toward a single demographic.
            </figcaption>
          </div>

          {/* Engineered */}
          <div className="flex-1 text-center">
            <img
              src="docs/images/biased/professor_engineered.webp"
              alt='Flux output after prompt engineering for diversity'
              className="mx-auto rounded-lg shadow-md"
            />
            <figcaption className="mt-2 text-sm text-gray-500 italic">
              Output after using a combination of prompt engineering tactics. Notice broader
              representation.
            </figcaption>
          </div>
        </div>
      </figure>

      {/* Overview */}
      <article className="mb-14">
        <p className="text-gray-700 mb-4">
          Crafting an effective text prompt is the simplest way to steer a
          text-to-image system without touching code. Good prompts reduce
          trial-and-error, surface biases early, and cut inference costs by
          avoiding unnecessary re-generations (OpenAI, 2024).
        </p>
      </article>

      {/* Core Guidelines */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Core Guidelines
        </h3>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">1. Be specific &mdash;</span> name the
          main subject, context, and style. “Dog” is vague; “Shiba Inu wearing a
          red scarf, studio lighting” is clearer (Stable Diffusion Documentation,
          2022).
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">2. Use logical order &mdash;</span>{" "}
          list concepts from large-scale to fine detail (scene → subject →
          lighting → lens) so the model weights terms predictably (Stable
          Diffusion Documentation, 2022).
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">3. Include style cues &mdash;</span>{" "}
          art movement, camera type, film stock, or color palette (“oil
          painting, Baroque style, warm tones”) help anchor aesthetics (Stable
          Diffusion Documentation, 2022).
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">4. Isolate composition words &mdash;</span>{" "}
          if spatial layout matters, spell it out: “A cat <em>on the left</em>,
          a dog <em>on the right</em>, white background” (Stable Diffusion
          Documentation, 2022).
        </p>
      </article>

      {/* Negative Prompts */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Negative Prompts
        </h3>
        <p className="text-gray-700 mb-4">
          Diffusion UIs such as Stable Diffusion WebUI include a separate{" "}
          <b>Negative Prompt</b> box. Put <em>undesired</em> elements there
          (“blurry, extra limbs, watermark, text”) so the sampler steers away
          from them (Stable Diffusion Documentation, 2022). Avoid stuffing
          negatives in the main prompt&mdash;they compete with your positive
          tokens.
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold text-green-700">Good practice:</span>{" "}
          Main Prompt&nbsp;&nbsp;— “Portrait photo of an astronaut riding a
          horse, 35&nbsp;mm film, dusk”<br />
          Negative Prompt&nbsp;&nbsp;— “low quality, blurry, text, watermark,
          distorted proportions”
        </p>

        <p className="text-gray-700">
          <span className="font-semibold text-red-600">Common mistake:</span>{" "}
          listing negatives inside the main prompt (“…without blur, no text”)
          which can confuse weighting and still let artifacts slip through
          (Stable Diffusion Documentation, 2022).
        </p>
      </article>

      {/* Before / After Examples */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Before & After Examples
        </h3>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700">
            <b>Before&nbsp;(vague):</b> “Landscape with mountains.”
          </p>
          <p className="text-gray-700 mt-2">
            <b>After&nbsp;(clear):</b> “Wide-angle sunrise shot of the Swiss
            Alps, low-lying mist in the valley, golden hour lighting, Fujifilm
            Velvia&nbsp;50.”
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-gray-700">
            <b>Before&nbsp;(cluttered):</b> “A modern living room, cozy feeling,
            maybe Scandinavian, slightly minimalist, some plants, bright
            windows.”
          </p>
          <p className="text-gray-700 mt-2">
            <b>After&nbsp;(structured):</b> “Scandinavian-style living room with
            light oak floors, white walls, a single olive-green sofa, two potted
            monsteras by the window, soft morning light, high-key photography.”
          </p>
        </div>
      </article>

      {/* Advanced Techniques */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Advanced Techniques
        </h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Weighted tokens ( ) / [ ] &mdash;</span>{" "}
          Many UIs let you boost or down-weight tokens with parentheses,
          directing attention to key elements (Stable Diffusion Documentation,
          2022).
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Multi-pass refinement &mdash;</span>{" "}
          generate a draft at lower resolution, then re-prompt with “same
          composition, higher detail” for upscale passes; reduces cost while
          improving detail (Stable Diffusion Documentation, 2022).
        </p>
      </article>

      {/* Common Pitfalls */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Common Pitfalls
        </h3>
        <p className="text-gray-700 mb-2">
          <b>Over-stuffing adjectives:</b> Too many modifiers can confuse the
          model (“hyper-realistic ultra-detailed 16K”) (OpenAI, 2024).
        </p>
        <p className="text-gray-700 mb-2">
          <b>Conflicting styles:</b> “Watercolor + photorealistic” dilutes
          stylistic coherence (OpenAI, 2024).
        </p>
        <p className="text-gray-700">
          <b>Ignoring bias cues:</b> Prompts like “CEO” may default to a narrow
          demographic; specify diversity if relevant (Prabhu & Birhane, 2021).
        </p>
      </article>

      {/* References */}
      <article>
        <h4 className="text-xl font-semibold text-gray-800 mb-3">References</h4>
        <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
          <li>
            OpenAI. (2024). <i>ChatGPT Prompting Best Practices.</i>{" "}
            <a
              href="https://platform.openai.com/docs/guides/prompting"
              className="text-blue-600 underline"
              target="_blank"
            >
              openai.com
            </a>
          </li>
          <li>
            Stable Diffusion Documentation. (2022).{" "}
            <i>Prompt Engineering Guide.</i>{" "}
            <a
              href="https://stable-diffusion-art.com/prompt-guide/"
              className="text-blue-600 underline"
              target="_blank"
            >
              stable-diffusion-art.com
            </a>
          </li>
          <li>
            Prabhu & Birhane (2021).{" "}
            <i>Large Datasets: A Pyrrhic Win for Computer Vision?</i>{" "}
            <a
              href="https://arxiv.org/abs/2006.16923"
              className="text-blue-600 underline"
              target="_blank"
            >
              arXiv:2006.16923
            </a>
          </li>
        </ul>
      </article>
    </section>
  </div>
);

export default PromptEngineering;
