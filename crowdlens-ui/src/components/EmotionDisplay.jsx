import React from 'react';

const EmotionDisplay = ({ emotion }) => {
  if (!emotion) return null;

  return (
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold text-gray-800">Detected Emotion</h2>
      <p className="text-3xl text-indigo-600 font-bold">{emotion}</p>
    </div>
  );
};

export default EmotionDisplay;
