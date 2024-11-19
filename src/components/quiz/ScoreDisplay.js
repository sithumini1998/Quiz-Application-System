"use client";
export default function ScoreDisplay({ score, totalQuestions, onRestart, onRetry }) {
    return (
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-bold">
          You scored {score} out of {totalQuestions}
        </h2>
        <div className="space-x-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Try Another Category
          </button>
          <button
            onClick={onRetry}
            className="px-6 py-3 text-white transition-colors duration-200 bg-gray-500 rounded-lg hover:bg-gray-600"
          >
            Retry This Category
          </button>
        </div>
      </div>
    );
  }