import React from "react";

/** Hover-to-explain utility */
const Tip: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <span className="relative group cursor-help underline decoration-dotted">
    {children}
    {/* floating tooltip bubble */}
    <span className="pointer-events-none absolute left-1/2 bottom-full mb-1 w-max -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
      {title}
    </span>
  </span>
);

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
            Text-to-image systems rely on several neural network families.
            Broadly, today’s production models fall into three paradigms —{" "}
            <Tip title="Models that start from random noise and iteratively remove it to reveal an image">
              diffusion
            </Tip>
            ,{" "}
            <Tip title="Models that build an image step-by-step, each step conditioned on previous output">
              autoregressive
            </Tip>{" "}
            and{" "}
            <Tip title="Two-stage models that first compress (encode) and then rebuild (decode) data">
              encoder–decoder
            </Tip>
            . Each makes different trade-offs among sample quality, speed, and
            memory footprint. Understanding those trade-offs clarifies why
            Stable Diffusion excels at photorealism while earlier{" "}
            <Tip title="Generative Adversarial Network — two networks that compete during training">
              GAN
            </Tip>{" "}
            or{" "}
            <Tip title="Vector-Quantised Variational Autoencoder — a VAE with a discrete codebook for sharper images">
              VQ-VAE
            </Tip>{" "}
            approaches remain attractive for niche tasks.
          </p>
        </article>

        {/* Diffusion Models */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Diffusion Models
          </h3>
          <p className="text-gray-700 mb-4">
            Diffusion models (Ho&nbsp;et&nbsp;al., 2020) learn to reverse a
            gradual noising process. During training, each clean image is
            corrupted by{" "}
            <Tip title="Random noise that follows a bell-curve distribution">
              Gaussian noise
            </Tip>{" "}
            over T steps; the network then predicts either the original image or
            the noise added at each step. At inference, the model starts from
            pure noise and iteratively denoises, guided by the{" "}
            <Tip title="Numeric vector that captures the meaning of a piece of text">
              text embedding
            </Tip>{" "}
            supplied by{" "}
            <Tip title="Contrastive Language–Image Pre-training model">
              CLIP
            </Tip>{" "}
            or{" "}
            <Tip title="A large text-only transformer from Google">
              T5
            </Tip>
            .
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-green-700">Advantages: </span>
            state-of-the-art fidelity, fine control via{" "}
            <Tip title="A guidance trick that pushes the diffusion path closer to the prompt without an extra classifier">
              classifier-free guidance
            </Tip>
            , graceful handling of complex global structure.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-red-600">Drawbacks: </span>
            50–200 denoise steps per sample; high{" "}
            <Tip title="Graphics/Tensor Processing Unit — specialised hardware for deep learning">
              GPU/TPU
            </Tip>{" "}
            memory; slow on small devices.
          </p>
          <p className="text-gray-700 mb-4">
            Notable variants include <i>Latent Diffusion</i> (Rombach et al.,
            2022), which moves the process into a learned{" "}
            <Tip title="Compressed feature space where only essential information is kept">
              latent space
            </Tip>
            , reducing memory while preserving detail — used by Stable
            Diffusion. Google’s Imagen (Saharia et al., 2022) stacks multiple
            diffusion stages for ultra-high resolution.
          </p>
        </article>

        {/* Autoregressive Models */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Autoregressive Models
          </h3>
          <p className="text-gray-700 mb-4">
            Autoregressive (AR) image generators adapt the language-modelling
            trick “predict the next{" "}
            <Tip title="The smallest chunk a model sees — here, a tiny image patch stored as an integer">
              token
            </Tip>
            ” to pixels. Images are quantised into discrete codes (e.g., using a
            VQ-VAE) and a{" "}
            <Tip title="Neural-network architecture based on self-attention">
              transformer
            </Tip>{" "}
            predicts one code at a time, raster-scan order. OpenAI’s original
            DALL·E and DALL·E Mini both use this recipe.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-green-700">Advantages: </span>
            straightforward likelihood training; fine-grained text conditioning
            without guidance tricks; single forward pass per token.
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold text-red-600">Drawbacks: </span>
            generation time scales with image area (e.g., 256×256 → 65 536
            tokens); produced images can show{" "}
            <Tip title="Visible grid patterns where token patches meet">
              block artefacts
            </Tip>
            .
          </p>
          <p className="text-gray-700 mb-4">
            AR transformers remain attractive for research on{" "}
            <Tip title="How meanings of words combine into larger concepts or scenes">
              semantic compositionality
            </Tip>
            —they tend to respect object counts and spatial prepositions better
            than latent-space GANs.
          </p>
        </article>

        {/* Encoder–Decoder & Hybrid Architectures */}
        <article className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Encoder–Decoder and Hybrid Designs
          </h3>
          <p className="text-gray-700 mb-4">
            Encoder–decoder families include{" "}
            <Tip title="Models that learn a probability-based latent space and then draw samples from it">
              Variational Autoencoders (VAEs)
            </Tip>{" "}
            and{" "}
            <Tip title="Generative Adversarial Network — two networks that compete during training">
              Generative Adversarial Networks (GANs)
            </Tip>{" "}
            (Generative AI Lab, 2024). Both compress images into latent codes
            then reconstruct them.
          </p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">VAEs</h4>
          <p className="text-gray-700 mb-4">
            Provide smooth latent spaces ideal for{" "}
            <Tip title="Blending smoothly from one generated result to another">
              interpolation
            </Tip>{" "}
            but historically produce blurred textures.{" "}
            <Tip title="A sharper VAE that uses a discrete dictionary of image patches">
              VQ-VAE-2
            </Tip>{" "}
            (Oord et al., 2019) mitigates blur via a discrete{" "}
            <Tip title="Learned dictionary of symbols for reconstructing compressed images">
              codebook
            </Tip>
            .
          </p>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">GANs</h4>
          <p className="text-gray-700 mb-4">
            Use an adversarial{" "}
            <Tip title="Network that judges whether an image is real or fake — forces the generator to improve">
              discriminator
            </Tip>{" "}
            to refine sharpness. StyleGAN 2 remains a reference standard for
            human faces, though GANs struggle with faithful text conditioning.
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
