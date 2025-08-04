# 🧠 AI Chat App – Frontend + Backend Setup

This project is a React-based frontend powered by a Python backend hosted via Google Colab. It uses Gemini for AI capabilities and Ngrok for secure tunneling.

---

## 🚀 Getting Started

### 1. **Run the Backend on Google Colab**

Open the backend notebook and execute all cells. This will:

- Start a local server
- Expose it via Ngrok
- Print the public server URL

👉 [Open Backend Colab Notebook](https://colab.research.google.com/) *(Upload or open your notebook here)*

> ⚠️ Make sure to pass the following keys in the Colab notebook:
>
> - `GEMINI_API_KEY`: Get it from [Gemini API Console](https://makersuite.google.com/)
> - `NGROK_AUTH_TOKEN`: Get it from [Ngrok Dashboard](https://dashboard.ngrok.com/get-started/setup)

---

### 2. **Configure the Frontend**

In the frontend project folder:

#### 📁 Create a `.env` file in the root:

```env
VITE_APP_BACKEND_URL=https://your-ngrok-url.ngrok.io
