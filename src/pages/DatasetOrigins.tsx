import React from 'react';

const DatasetOrigins = () => {
  return (
    <div className="bg-white w-full">
      <section className="max-w-5xl mx-auto py-16 px-6 sm:px-8 lg:py-20 lg:px-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Dataset Origins
        </h2>

        {/* Section: Sources of Image‑Caption Pairs */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Where Do Image–Caption Pairs Come From?
          </h3>
          <p className="text-gray-700 mb-4">
            Modern text‑to‑image models are data-hungry: they require <i>billions</i> of examples that link language to pixels.  Most teams therefore combine several kinds of collections—some scraped, some donated, some purchased—to reach the necessary scale and diversity.  Below are the most common categories you are likely to encounter.
          </p>

          {/* Web‑Scraped */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Web‑Scraped Mega‑Sets</h4>
          <p className="text-gray-700 mb-4">
            The backbone of nearly every large‑scale model (DALL·E 2, Stable Diffusion, Imagen, Midjourney) is a giant, automatically collected corpus. Web crawlers visit open websites—Flickr, Pinterest, Tumblr, personal blogs—and download any image accompanied by surrounding text or alt‑text.  A weak heuristic (e.g., <code>&lt;img alt="…"&gt;</code>) links the image to a caption.  Because no human reviews the pairs, quality varies wildly: detailed captions like “Golden retriever catching a frisbee in Central Park, shot at f/1.8” 
            sit next to tags such as “IMG_0487.JPG”.  The LAION‑5B release is the best‑known public example, weighing in at 240 TB and more than <b>five billion</b> pairs (Schuhmann et al., 2022).
          </p>
        {/* Web-scraped advantages / drawbacks */}
<p className="text-gray-700 mb-2">
  <span className="font-semibold text-green-700">Advantages:</span>
  &nbsp;enormous scale, free to collect, covers long-tail concepts
  (niche hobbies, rare animals, meme culture).
</p>
<p className="text-gray-700 mb-4">
  <span className="font-semibold text-red-600">Drawbacks:</span>
  &nbsp;high noise, duplicate or near-duplicate images, and legal ambiguity—photographs are routinely scraped without creator consent.
</p>



          {/* Curated */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert‑Curated Datasets</h4>
          <p className="text-gray-700 mb-4">
            Vision researchers have spent the last decade hand‑annotating smaller—but meticulously verified—datasets such as MS COCO (330k images, five captions each) and Visual Genome (108k images with region‑level descriptions).  Annotators describe objects, attributes, and relationships in plain English, yielding high‑fidelity linguistic supervision.  Although tiny compared with LAION‑scale corpora, these “gold sets” are often mixed in to anchor the model’s language grounding.
          </p>
          <p className="text-gray-700 mb-4">
            Commercial labs sometimes commission bespoke data: e‑commerce catalogs with product descriptions, medical archives with radiologist notes, or museum collections with curator metadata.  Because access is restricted or licensed, these slices rarely enter the public domain.
          </p>

          {/* Proprietary / Undisclosed */}
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Proprietary & Undisclosed Sources</h4>
          <p className="text-gray-700 mb-4">
            For headline models like Midjourney v6 or Adobe Firefly, the full recipe is a trade secret.  Companies disclose only broad strokes (“hundreds of millions of licensed stock images”) but not the exact mix.  Lack of transparency makes it impossible to audit biases or copyright conflicts conclusively (Harvard Business Review, 2023).  From a user perspective, this opacity means you <i>cannot</i> tell whether your own artwork, or sensitive personal photos, were part of the training set.
          </p>
        </div>

        {/* Section: Cleaning, Filtering, & Legal Hurdles */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Cleaning, Filtering, and Legal Hurdles
          </h3>
          <p className="text-gray-700 mb-4">
            Raw web data is often very messy. Therefore, before training a model on this source, the data is typically cleaned and processed:
          </p>
          <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2 mb-4">
            <li><b>NSFW & Violence Filters —</b> hashing or CLIP‑based detectors remove explicit or illegal content.</li>
            <li><b>Language Filters —</b> captions with slurs or hate speech are flagged or purged.</li>
            <li><b>Resolution & Format Checks —</b> extremely low‑resolution images, corrupt files, or SVG icons are excluded.</li>
            <li><b>Semantic Safety Nets —</b> some labs discard captions that mention real children’s names, personal addresses, or medical IDs.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Despite these pipelines, studies still uncover biases: e.g., occupation prompts (“CEO”, “nurse”) skew heavily toward Western gender stereotypes (Prabhu & Birhane, 2021).  Because no public crawler can match human nuance, residual bias is inevitable.
          </p>

          {/* Licensing Box */}
          <div className="border-l-4 border-red-500 bg-red-50 p-4 my-4">
            <p className="text-gray-800"><b>Copyright Gray Zone:</b> U.S. law currently treats web scraping for machine learning as an unsettled issue.  Lawsuits (e.g., <i>Andersen v. Stability AI</i>, 2023) argue that training on copyrighted art without permission infringes on creators’ rights.  Defendants counter that AI training is transformative fair use.  Courts have yet to set a definitive precedent.</p>
          </div>
        </div>

        {/* References */}
        <article>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">References</h4>
          <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1 text-sm">
            <li>Schuhmann, C., et al. (2022). LAION‑5B. <a href="https://laion.ai/blog/laion-5b/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://laion.ai/blog/laion-5b/</a></li>
            <li>Lin, T.-Y., et al. (2014). MS COCO. <a href="https://arxiv.org/abs/1405.0312" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/1405.0312</a></li>
            <li>Krishna, R., et al. (2017). Visual Genome. <a href="https://arxiv.org/abs/1602.07332" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/1602.07332</a></li>
            <li>Prabhu & Birhane (2021). Large Datasets: A Pyrrhic Win? <a href="https://arxiv.org/abs/2006.16923" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2006.16923</a></li>
            <li>Harvard Business Review. (2023). Generative AI’s Intellectual Property Problem. <a href="https://hbr.org/2023/04/generative-ai-has-an-intellectual-property-problem" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://hbr.org</a></li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default DatasetOrigins;
