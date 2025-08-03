# AI-First Build – Stunning Technical Challenge

## 📌 Overview
This is a full-stack project built for the **Stunning Technical Challenge**.  
The app lets a user enter a website idea, generates dummy sections ("Hero", "About", "Contact"), stores them in MongoDB, and displays them in a simple preview.

---

## 🛠 Tech Stack
- **Frontend:** Next.js (App Router) + Tailwind CSS
- **Backend:** NestJS (REST API)
- **Database:** MongoDB (Atlas or local) using Mongoose
- **Language:** TypeScript

---

## 📂 Project Structure

---

## 🚀 Features
- Website idea form (frontend)
- Sends POST request to backend to generate dummy sections
- Stores idea and sections in MongoDB
- Fetches and displays stored sections
- Loading state & error handling in UI

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/shaheedmohamed/AI-Full-Stack-.git
cd AI-Full-Stack-

cd backend
npm install
npm run start:dev

MONGODB_URI=your-mongodb-uri-here
PORT=3001

cd ../frontend
npm install
npm run dev
