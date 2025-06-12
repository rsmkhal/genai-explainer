import React from "react";

const LegalEthical = () => (
  <div className="bg-white w-full">
    <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">
        Legal & Ethical Considerations
      </h2>

      {/* INTRODUCTION */}
      <article className="mb-14">
        <p className="text-gray-700 mb-4">
          Text-to-image AI is advancing faster than policy can keep up. Models
          trained on billions of web images raise thorny issues: copyright
          infringement, consent and privacy, algorithmic bias, and emerging
          regulation. This page surveys core legal doctrines and ethical
          debates, then offers concrete mitigation steps for practitioners.
        </p>
      </article>

      {/* 1. COPYRIGHT / FAIR USE */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          1. Copyright &amp; Fair Use
        </h3>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Training-Data Infringement
        </h4>
        <p className="text-gray-700 mb-4">
          Most foundation models scrape images under broad “fair use” theories,
          arguing the process is transformative (HBR, 2023). Plaintiffs counter
          that training copies entire works and competes with human labor. While
          legal clarity is still emerging, interim guidelines recommend
          documenting dataset provenance and complying with takedown requests
          (USCO, 2023).
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Output Copyrightability
        </h4>
        <p className="text-gray-700">
          Purely AI-generated images currently lack copyright eligibility in the
          U.S. Human involvement in the creative process, such as editing or
          substantial selection, is required for copyright claims (USCO, 2023).
          Thus, companies often integrate human input to ensure intellectual
          property rights.
        </p>
      </article>

      {/* 2. CONSENT & PRIVACY */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          2. Consent &amp; Privacy
        </h3>
        <p className="text-gray-700 mb-4">
          Training datasets frequently contain images of individuals used without
          explicit consent, raising privacy concerns under GDPR and state
          regulations like California’s CPRA, which categorize biometric data as
          sensitive (GDPR, 2018; CPRA, 2020). Once images are embedded in models,
          removal becomes complex.
        </p>

        <p className="text-gray-700">
          Best practice includes honoring opt-out mechanisms, such as the "Have I
          Been Trained" database, and refraining from scraping private or
          protected sources.
        </p>
      </article>

      {/* 3. BIAS & STEREOTYPING */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          3. Bias &amp; Stereotyping
        </h3>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          How Bias Enters
        </h4>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1 mb-4">
          <li>
            <b>Skewed samples&nbsp;</b>&mdash;dominant groups are overrepresented,
            marginalizing minorities (Birhane et al., 2021).
          </li>
          <li>
            <b>Caption leakage&nbsp;</b>&mdash;biased or stereotypical alt-text
            influences model outputs (Birhane et al., 2021).
          </li>
          <li>
            <b>Amplification&nbsp;</b>&mdash;biases in training data are often
            amplified through generative processes (Birhane et al., 2021).
          </li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Real-World Impact
        </h4>
        <p className="text-gray-700">
          Biases can manifest in stereotypes reinforced by AI-generated content.
          Research shows occupational stereotypes like "CEO" predominantly
          generate male images, reinforcing existing societal biases (Birhane et
          al., 2021).
        </p>

        {/* ---- Added illustrative image & caption ---- */}
        <figure className="my-8">
          <img
            src="docs/images/biased/nurses_flux_biased.webp"
            alt="Flux output for the prompt 'a photo portrait of a nurse' showing only female-presenting faces"
            className="mx-auto rounded-lg shadow-md"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
            Flux output for the prompt &ldquo;a photo portrait of a nurse.&rdquo;
            Every face returned is female, illustrating occupational gender bias.
          </figcaption>
        </figure>
      </article>

      {/* 4. MITIGATION STRATEGIES */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          4. Mitigation Strategies
        </h3>

        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Dataset Level&nbsp;</span>
          Curate balanced datasets with geographic and demographic diversity, and
          respond promptly to content removal requests (Creative Commons, 2023).
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Model Level&nbsp;</span>
          Employ techniques like fine-tuning, rejection sampling, or reinforcement
          learning with human feedback (RLHF) to reduce biased outputs (OpenAI, 2023).
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Prompt Level&nbsp;</span>
          Encourage explicit diversity in prompts to counteract implicit biases.
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Policy Level&nbsp;</span>
          Adopt transparency practices such as detailed documentation and regular
          third-party audits (Google AI Principles, 2018).
        </p>
      </article>

      {/* 5. EMERGING REGULATION */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          5. Emerging Regulation &amp; Future Outlook
        </h3>
        <p className="text-gray-700 mb-4">
          The European Union's AI Act categorizes generative AI as "high-risk,"
          mandating transparency and watermarking for AI outputs (European
          Parliament, 2023). In the U.S., proposed state-level regulations focus
          on transparency, privacy, and deepfake labeling. Environmental impact
          concerns are also emerging due to significant energy consumption during
          model training (Strubell et al., 2019).
        </p>
        <p className="text-gray-700">
          Future trends indicate increased regulatory scrutiny, with best
          practices like detailed dataset disclosures and transparent energy-use
          reporting becoming standard.
        </p>
      </article>

      {/* 6. PRACTICAL CHECKLIST */}
      <article className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          6. Quick Checklist for Builders
        </h3>
        <ul className="list-disc list-inside ml-6 text-gray-700 space-y-1">
          <li>Document dataset sources and licenses thoroughly.</li>
          <li>Provide clear opt-out or removal processes for individuals.</li>
          <li>Conduct bias assessments on standard demographic prompts.</li>
          <li>Clearly label or watermark AI-generated outputs.</li>
          <li>
            Publish model transparency cards detailing training, bias assessments,
            and environmental impact.
          </li>
        </ul>
      </article>

      {/* REFERENCES */}
      <article>
        <h4 className="text-xl font-semibold text-gray-800 mb-3">References</h4>
        <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
          {/* (unchanged reference list) */}
          <li>
            Harvard Business Review. (2023). <i>Generative AI Has an Intellectual Property Problem.</i>{" "}
            <a href="https://hbr.org/2023/04/generative-ai-has-an-intellectual-property-problem"
               className="text-blue-600 underline" target="_blank">
              hbr.org
            </a>
          </li>
          <li>
            U.S. Copyright Office. (2023). <i>Copyright Registration Guidance: Works Containing Material Generated by AI.</i>{" "}
            <a href="https://copyright.gov/ai/"
               className="text-blue-600 underline" target="_blank">
              copyright.gov
            </a>
          </li>
          <li>
            General Data Protection Regulation (GDPR). (2018). <i>EU Data Privacy Regulation.</i>{" "}
            <a href="https://gdpr.eu/"
               className="text-blue-600 underline" target="_blank">
              gdpr.eu
            </a>
          </li>
          <li>
            Birhane, A., et al. (2021). <i>Large Datasets: A Pyrrhic Win for Computer Vision?</i>{" "}
            <a href="https://arxiv.org/abs/2006.16923"
               className="text-blue-600 underline" target="_blank">
              arXiv:2006.16923
            </a>
          </li>
          <li>
            Creative Commons. (2023). <i>Responsible AI Dataset Licensing.</i>{" "}
            <a href="https://creativecommons.org/blog/2023/02/03/best-practices-for-ai-dataset-licensing/"
               className="text-blue-600 underline" target="_blank">
              creativecommons.org
            </a>
          </li>
          <li>
            Google AI Principles. (2018). <i>Google's Responsible AI Practices.</i>{" "}
            <a href="https://ai.google/principles/"
               className="text-blue-600 underline" target="_blank">
              ai.google
            </a>
          </li>
          <li>
            Strubell, E., et al. (2019). <i>Energy and Policy Considerations for Deep Learning.</i>{" "}
            <a href="https://arxiv.org/abs/1906.02243"
               className="text-blue-600 underline" target="_blank">
              arXiv:1906.02243
            </a>
          </li>
          <li>
            European Parliament. (2023). <i>AI Act: Regulating High-Risk AI.</i>{" "}
            <a href="https://www.europarl.europa.eu/news/en/press-room/20230505IPR84916/"
               className="text-blue-600 underline" target="_blank">
              europarl.europa.eu
            </a>
          </li>
        </ul>
      </article>
    </section>
  </div>
);

export default LegalEthical;
