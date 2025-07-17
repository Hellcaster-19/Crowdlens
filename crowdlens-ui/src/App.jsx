import React, { useState } from 'react';
import axios from 'axios';
import WebcamFeed from './components/WebcamFeed';
import EmotionDisplay from './components/EmotionDisplay';
import CTAButton from './components/CTAButton';

function App() {
  const [emotion, setEmotion] = useState(null);

  const handleCapture = async (image) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/detect', {
        image: image, 
      });

      const detectedEmotion = response.data.emotion;
      setEmotion(detectedEmotion);
    } catch (error) {
      console.error("Error detecting emotion:", error);
      setEmotion("unknown");
    }
  };

  return (
    <div className="relative w-screen h-screen bg-wood overflow-hidden">
      {/* 🔮 Blurred Overlay */}
      <div className="absolute inset-0 bg-wood bg-opacity-90 backdrop-blur-sm z-0"></div>

      {/* 🌟 Centered Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="w-full max-w-md flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow">
            CrowdLens
          </h1>
          <WebcamFeed onCapture={handleCapture} />
          <EmotionDisplay emotion={emotion} />
          <CTAButton emotion={emotion} />
        </div>
      </div>
    </div>
  );
}

export default App;
