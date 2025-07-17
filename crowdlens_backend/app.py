from flask import Flask, request, jsonify
from flask_cors import CORS
from deepface import DeepFace
import cv2
import numpy as np
import base64

app = Flask(__name__)
CORS(app) 

@app.route('/detect', methods=['GET'])
def detect_get():
    return 'CrowdLens backend is live!'

@app.route('/detect', methods=['POST'])
def detect_emotion():
    data = request.get_json()
    image_data = data.get('image')

    try:
        # Decode base64 image
        image_bytes = base64.b64decode(image_data.split(',')[1])
        np_arr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        # Analyze emotion
        result = DeepFace.analyze(img, actions=['emotion'], enforce_detection=False)
        emotion = result[0]['dominant_emotion']
    except Exception as e:
        print("Error:", e)
        emotion = "unknown"

    return jsonify({"emotion": emotion})

if __name__ == '__main__':
    app.run(debug=True)
