import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import GenerativeModels from './pages/GenerativeModels';
import Captioning from './pages/Captioning';
import ModelArchitectures from './pages/ModelArchitectures';
import PromptDemo from './pages/PromptDemo';
import ModelComparison from './pages/ModelComparison';
import PromptEngineering from './pages/PromptEngineering';
import LegalEthical from './pages/LegalEthical';
import DeepDive from './pages/DeepDive';
import HowToUse from './pages/HowToUse';
import References from './pages/References';
export function App() {
  // Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
  return <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="generative-models" element={<GenerativeModels />} />
          <Route path="captioning" element={<Captioning />} />
          <Route path="model-architectures" element={<ModelArchitectures />} />
          <Route path="prompt-demo" element={<PromptDemo />} />
          <Route path="model-comparison" element={<ModelComparison />} />
          <Route path="prompt-engineering" element={<PromptEngineering />} />
          <Route path="legal-ethical" element={<LegalEthical />} />
          <Route path="deep-dive" element={<DeepDive />} />
          <Route path="how-to-use" element={<HowToUse />} />
          <Route path="references" element={<References />} />
        </Route>
      </Routes>
    </HashRouter>;
}