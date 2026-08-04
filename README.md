# VisionGuard AI 🛡️

A full-stack AI-powered web application that detects whether an uploaded image is **AI Generated** or **Real** using a deep learning model trained on real vs AI-generated images.

---

# 🚀 Live Demo

- **Frontend:** https://vision-guard-ai-black.vercel.app
- **Backend API:** https://visionguardai.onrender.com
- **API Docs (Swagger):** https://visionguardai.onrender.com/docs

---

# ✨ Features

- Detects AI-generated images with confidence score
- Drag & Drop image upload interface
- Real-time prediction using FastAPI backend
- Deep Learning model powered by PyTorch
- Beautiful responsive React + Vite frontend
- Displays
  - Prediction
  - Confidence Score
  - Inference Time
  - Model Used

---

# 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Deep Learning | PyTorch, TorchVision |
| Model | ResNet18 (Transfer Learning) |
| Backend | FastAPI, Python |
| Frontend | React, Vite, Axios |
| Deployment | Render, Vercel |

---

# 🧠 Model Details

- **Dataset:** Real vs AI Generated Images Dataset
- **Architecture:** ResNet18
- **Framework:** PyTorch
- **Loss Function:** CrossEntropyLoss
- **Optimizer:** Adam
- **Image Size:** 224 × 224
- **Prediction Classes:**
  - Real Image
  - AI Generated Image

---

# 📂 Project Structure

```
VisionGuardAI
│
├── backend
│   ├── app
│   ├── model
│   ├── requirements.txt
│   └── runtime.txt
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── dataset
│
└── notebook
```

---

# ⚙️ How to Run Locally

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health Check |
| POST | /predict | Predict whether image is AI Generated or Real |

---


# 🎯 Future Improvements

- Grad-CAM Explainability
- Support multiple AI image generators
- Batch Image Prediction
- Probability Distribution Graph
- User Authentication
- Prediction History
- Mobile Optimized UI

---

# 👨‍💻 Author

**Rahul Raj**

B.Tech Electronics & Computer Science Engineering  
KIIT University, Bhubaneswar

GitHub:
https://github.com/RahulInsane

LinkedIn:
https://www.linkedin.com/in/rahul-raj-34a01630b/
