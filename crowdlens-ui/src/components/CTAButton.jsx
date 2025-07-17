import React from 'react';

const CTAButton = ({ emotion }) => {
  const getCTA = (emotion) => {
    switch (emotion) {
      case 'happy':
        return 'Share your joy – donate now!';
      case 'sad':
        return 'Lift someone’s spirits – contribute today.';
      case 'angry':
        return 'Channel the fire – support a cause.';
      case 'surprised':
        return 'Make an impact while you’re inspired!';
      default:
        return 'Support a cause that matters.';
    }
  };

  return (
    <div className="mt-6 text-center">
      <button className="mt-4 px-6 py-3 bg-plum text-white rounded-lg shadow hover:bg-purple-400 transition text-lg font-semibold">
        {getCTA(emotion)}
      </button>
    </div>
  );
};

export default CTAButton;
