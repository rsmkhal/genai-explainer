import React from "react";

const ModelArchitectures = () => {
  return (
    <div className="bg-white w-full">
      <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Model Architectures: How Text Becomes Images
        </h2>

        {/* Overview */}
        <article className="mb-14">
          <p className="text-gray-700 mb-4">
            Text‑to‑image systems rely on several neural network families.
            Broadly, today’s production models fall into three paradigms—
            <b>diffusion</b>, <b>autoregressive</b>, and <b>encoder–decoder</b>.
            Each makes different trade‑offs among sample quality, speed, and
            memory footprint. Understanding those trade‑offs clarifies why
            Stable Diffusion excels at photorealism while earlier GAN or VQ‑VAE
            approaches remain attractive for niche tasks.
          </p>
        </article>

        {/* Diffusion Models */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Diffusion Models
          </h3>
          <p className="text-gray-700 mb-4">
            Diffusion models (Ho&nbsp;et&nbsp;al., 2020) learn to reverse a
            gradual noising process. During training, each clean image is
            corrupted by Gaussian noise over T steps; the network then predicts
            either the original image or the noise added at each step. At
            inference, the model starts from pure noise and iteratively
            denoises, guided by the text embedding supplied by CLIP or T5.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-green-700">Advantages: </span>
            state‑of‑the‑art fidelity, fine control via classifier‑free
            guidance, graceful handling of complex global structure.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-red-600">Drawbacks: </span>
            50–200 denoise steps per sample; heavy GPU/TPU memory; slow on edge
            devices.
          </p>
          <p className="text-gray-700 mb-4">
            Notable variants include <i>Latent Diffusion</i>{" "}
            (Rombach&nbsp;et&nbsp;al., 2022), which moves the process into a
            learned latent space, reducing memory while preserving detail—used
            by Stable Diffusion. Google’s Imagen
            (Saharia&nbsp;et&nbsp;al., 2022) stacks multiple diffusion stages
            for ultra‑high resolution.
          </p>
        </article>

        {/* Autoregressive Models */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Autoregressive Models
          </h3>
          <p className="text-gray-700 mb-4">
            Autoregressive (AR) image generators adapt the language‑modelling
            trick “predict the next token” to pixels. Images are quantised into
            discrete codes (e.g., using a VQ‑VAE) and a transformer predicts one
            code at a time, raster‑scan order. OpenAI’s original DALL·E
            and DALL·E Mini both use this recipe.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-green-700">Advantages: </span>
            straightforward likelihood training; fine‑grained text conditioning
            without guidance tricks; single forward pass per token.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-red-600">Drawbacks: </span>
            generation time scales with image area (e.g., 256×256 → 65,536
            tokens); produced images can exhibit block‑wise artefacts.
          </p>
          <p className="text-gray-700 mb-4">
            AR transformers remain attractive for research on{" "}
            <em>semantic compositionality</em>—they tend to respect object
            counts and spatial prepositions better than latent‑space GANs.
          </p>
        </article>

        {/* Encoder–Decoder & Hybrid Architectures */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Encoder–Decoder and Hybrid Designs
          </h3>
          <p className="text-gray-700 mb-4">
            Encoder–decoder families include{" "}
            <b>Variational Autoencoders (VAEs)</b> and{" "}
            <b>Generative Adversarial Networks (GANs)</b>{" "}
            (Generative AI Lab, 2024). Both compress images into latent codes
            then reconstruct them.
          </p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">VAEs</h4>
          <p className="text-gray-700 mb-4">
            Provide smooth latent spaces ideal for interpolation but
            historically produce blurred textures. VQ‑VAE‑2
            (Oord&nbsp;et&nbsp;al., 2019) mitigates blur via a discrete
            codebook.
          </p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">GANs</h4>
          <p className="text-gray-700 mb-4">
            Use an adversarial discriminator to refine image sharpness.
            StyleGAN 2 remains a gold standard for human faces, though GANs
            struggle with faithful text conditioning.
          </p>
        </article>

        {/* Key Trade‑offs */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Trade‑offs
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-gray-700 text-left text-sm">
              <thead>
                <tr>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Criterion
                  </th>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Diffusion
                  </th>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Autoregressive
                  </th>
                  <th className="border px-4 py-2 bg-gray-100 font-semibold">
                    Encoder–Decoder
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">
                    Sample quality
                  </td>
                  <td className="border px-4 py-2">Highest photorealism</td>
                  <td className="border px-4 py-2">
                    Visibly blocky at high resolutions
                  </td>
                  <td className="border px-4 py-2">Sharp (GAN) / Soft (VAE)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">
                    Inference speed
                  </td>
                  <td className="border px-4 py-2">Slow (dozens of steps)</td>
                  <td className="border px-4 py-2">
                    Slower at higher resolutions
                  </td>
                  <td className="border px-4 py-2">Fast (single pass)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">
                    Text fidelity
                  </td>
                  <td className="border px-4 py-2">High with CFG</td>
                  <td className="border px-4 py-2">Strong compositionality</td>
                  <td className="border px-4 py-2">Weak without tricks</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Compute cost</td>
                  <td className="border px-4 py-2">
                    High (requires large GPU/TPU memory)
                  </td>
                  <td className="border px-4 py-2">
                    Very high (long sequences → slow, memory-intensive)
                  </td>
                  <td className="border px-4 py-2">
                    Low to moderate (single-pass inference)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* Practical Guidelines */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Choosing an Architecture
          </h3>
          <p className="text-gray-700 mb-4">
            For rapid prototyping on consumer GPUs, a latent diffusion
            checkpoint (e.g., Stable Diffusion&nbsp;1.5) balances quality and
            speed. Autoregressive transformers remain the tool of choice when
            precise spatial reasoning is critical—think diagram generation or
            layout‑aware tasks. Encoder–decoder GAN hybrids are still unrivalled
            for real‑time video synthesis and portrait retouching.
          </p>
        </article>

        {/* References */}
        <article>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            References
          </h4>
          <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
              <li>
              Generative AI Lab (2024).{" "}
              <i>Comparing Diffusion, GAN, and VAE Techniques</i>{" "}
              <a
                href="https://generativeailab.org/l/generative-ai/a-tale-of-three-generative-models-comparing-diffusion-gan-and-vae-techniques/569/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                generativeailab.org
              </a>
            </li>
            <li>
              Ho, J., et al. (2020).{" "}
              <i>Denoising Diffusion Probabilistic Models.</i>{" "}
              <a
                href="https://proceedings.neurips.cc/paper/2020/file/4c5bcfec8584af0d967f1ab10179ca4b-Paper.pdf"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://proceedings.neurips.cc
              </a>
            </li>
            <li>
              Rombach, R., et al. (2022).{" "}
              <i>High‑Resolution Image Synthesis with Latent Diffusion.</i>{" "}
              <a
                href="https://openaccess.thecvf.com/content/CVPR2022/papers/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.pdf"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                openaccess.thecvf.com
              </a>
            </li>
            <li>
              Saharia, C., et al. (2022).{" "}
              <i>Photorealistic Text‑to‑Image Generation.</i>{" "}
              <a
                href="https://arxiv.org/abs/2205.11487"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv:2205.11487
              </a>
            </li>
            <li>
              Oord, A. van den, et al. (2019). <i>VQ‑VAE‑2.</i>{" "}
              <a
                href="https://arxiv.org/abs/1906.00446"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                arXiv:1906.00446
              </a>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default ModelArchitectures;
