CrowdLens  
**AI-powered Emotion Detection via Real-Time Webcam Capture**

CrowdLens is an intelligent full-stack application that captures facial expressions through a user's webcam and detects their dominant emotion using deep learning. Built with a strong design focus and responsive architecture, it showcases seamless integration between a modern frontend and a machine learning-powered backend.

---

## 🌟 Features

- 🎨 **Frontend**:  
  - Built with **React** and styled using **Tailwind CSS**
  - Responsive and minimalistic UI with a natural aesthetic
  - Live webcam preview using `react-webcam`
  - Capture interface for emotion analysis
  - Dynamic emotion display and feedback

- 🔧 **Backend**:  
  - Built using **Flask**
  - Emotion analysis powered by **DeepFace** (uses TensorFlow and OpenCV)
  - Accepts base64 webcam image and returns predicted emotion
  - CORS-enabled for cross-origin frontend interaction

---

## 🚀 Tech Stack

| Layer       | Technologies                               |
|-------------|--------------------------------------------|
| Frontend    | React, Tailwind CSS, Axios, React Webcam   |
| Backend     | Flask, DeepFace, TensorFlow, OpenCV        |
| Deployment  | Vercel (Frontend), Render (Backend)        |

---
## 🧪 How It Works

1. User clicks **Detect Emotion**
2. Webcam captures and sends image to Flask backend
3. DeepFace analyzes the image and returns the dominant emotion
4. Emotion is displayed in real-time on the frontend
---
## 🧰 Requirements

- Python ≥ 3.10
- Node.js ≥ 16
- Virtual environment recommended for backend setup
---
## 💡 Inspiration
CrowdLens is designed to explore how real-time emotion recognition can enhance digital interaction, analytics, and user engagement, combining the power of AI with subtle, original frontend design.
