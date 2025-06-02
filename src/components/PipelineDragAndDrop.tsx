import React, { useState } from "react";

interface PipelineStep {
  label: string;
  description: string;
}

const CORRECT_ORDER: PipelineStep[] = [
  {
    label: "Prompt",
    description: "The user’s written description or idea.",
  },
  {
    label: "Tokenization",
    description: "Text is split into tokens (smaller pieces) for the AI model.",
  },
  {
    label: "Embedding",
    description: "Tokens are converted to numerical “meanings” for the model.",
  },
  {
    label: "Image",
    description: "The model generates an image that matches the prompt.",
  },
];

function arraysMatch(a: PipelineStep[], b: PipelineStep[]) {
  return a.every((step, idx) => step.label === b[idx].label);
}

export default function PipelineDragAndDrop() {
  const [steps, setSteps] = useState<PipelineStep[]>(
    [...CORRECT_ORDER].sort(() => Math.random() - 0.5),
  );
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  // Drag logic
  const handleDragStart = (idx: number) => setDraggedIdx(idx);
  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;
    const reordered = [...steps];
    const [removed] = reordered.splice(draggedIdx, 1);
    reordered.splice(idx, 0, removed);
    setSteps(reordered);
    setDraggedIdx(idx);
  };

  const handleDrop = () => setDraggedIdx(null);

  // Submission
  const handleCheck = () => setChecked(true);
  const handleReset = () => {
    setSteps([...CORRECT_ORDER].sort(() => Math.random() - 0.5));
    setChecked(false);
  };

  const correct = arraysMatch(steps, CORRECT_ORDER);

  return (
    <div className="my-8 p-6 bg-gray-50 rounded-xl shadow-md max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold mb-4 text-center">
        Arrange the Pipeline Steps in Order
      </h3>
      <ul className="space-y-4">
        {steps.map((step, idx) => (
          <li
            key={step.label}
            draggable
            onDragStart={() => handleDragStart(idx)}
            onDragOver={(e) => handleDragOver(e, idx)}
            onDrop={handleDrop}
            className={`p-4 bg-white rounded-md border cursor-move shadow ${draggedIdx === idx ? "border-indigo-500" : "border-gray-200"}`}
          >
            <span className="font-bold">{step.label}</span>
            <div className="text-gray-600 text-sm">{step.description}</div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4 justify-center">
        {!checked && (
          <button
            className="px-6 py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700"
            onClick={handleCheck}
          >
            Check Answer
          </button>
        )}
        {checked && (
          <button
            className="px-6 py-2 rounded bg-gray-200 text-gray-800 font-medium hover:bg-gray-300"
            onClick={handleReset}
          >
            Try Again
          </button>
        )}
      </div>
      {checked && (
        <div className="mt-6 text-center">
          {correct ? (
            <div className="text-green-700 font-semibold">
              Correct!
              <br />
              <span className="text-gray-700 block mt-2">
                A text prompt is tokenized, transformed into a
                machine-understandable form (embedding), and the model generates
                an image that matches your intent.
              </span>
            </div>
          ) : (
            <div className="text-red-600 font-semibold">
              Not quite! Try dragging the steps into the correct order.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
