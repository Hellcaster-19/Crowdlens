import React from 'react';
import Webcam from 'react-webcam';

const WebcamFeed = ({ onCapture }) => {
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  const videoConstraints = {
    width: 240,
    height: 240,
    facingMode: "user",
  };

  return (
    <div className="card">
      <h2 className="title">Capture Emotion</h2>

      {/* Square webcam box */}
      <div className="w-[240px] h-[240px] bg-black rounded-md flex items-center justify-center mb-4">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="rounded-md"
        />
      </div>

      {/* Centered button */}
      <button onClick={capture} className="button mx-auto block">
        Detect Emotion
      </button>
    </div>
  );
};

export default WebcamFeed;
