Disease Predictor

Project: Disease Prediction Web Application (Final Year Major Project)
Developed By: Shridarshan Mishra + 2 Team members
Current Status: Backend completed (main branch)

📌 Overview

Disease Predictor is a full-stack web application designed to identify the most probable disease based on a user’s symptoms. After testing multiple machine-learning algorithms, Logistic Regression proved to be the most accurate for our labeled dataset.

The application offers a simple, user-friendly consultation tool that helps individuals understand potential illnesses early.
⚠️ Disclaimer: This system provides informational predictions only and should not replace professional medical diagnosis or treatment.

Backend: Django REST Framework, PostgreSQL

Machine Learning: scikit-learn (Logistic Regression), stored artifacts (model.pkl, columns.pkl, label_encoder.pkl)

Frontend: React.js + Vite

⭐ Key Features

Quick & Simple Predictions: Enter symptoms to receive a predicted disease instantly.

Beginner-Friendly: Designed for users with no medical background.

Secure & Private: User data is not stored beyond account requirements; prediction history is not saved.

Anonymous Use: Non-personalized features work without revealing identity.

Admin Panel: Admins can retrain the ML model and manage patient datasets.

Responsive UI: Works smoothly on desktop and mobile devices.

🎨 Frontend (React.js)

The frontend is built using React + Vite with a clean and responsive interface.

🌟 What Users Can Do

Register, log in, and access personalized features

Select symptoms using a fast and searchable interface

Get instant disease predictions

Admins can upload CSV data or retrain the ML model

Navigate through a modern and intuitive UI

🔧 How It Works Internally

Authentication:
Tokens are generated on login and sent with each API request.

Symptom Submission:
Users choose symptoms which are sent to the backend as JSON.

Prediction:
The ML model returns the most probable disease.

Admin Tools:
Admins can trigger model training or upload datasets.

🏃 Run the Frontend Locally
cd frontend
npm install
npm start


The frontend runs at: http://localhost:3000

Update the API base URL in .env or config before running.

⚙️ Backend (Django REST API)
✨ Features

User authentication with DRF Token Auth

Train ML model directly using /api/disease/train/

Predict diseases from symptom inputs

Optional CSV-based patient data insertion for admin users

Uses Logistic Regression as primary model after evaluating multiple algorithms

📡 API Endpoints
Authentication

POST /api/accounts/register/ – Register a new user

POST /api/accounts/login/ – Login and receive token

GET /api/accounts/me/ – Get logged-in user details

Disease Prediction & Training

GET /api/disease/train/ – Train or retrain the ML model

POST /api/disease/predict/ – Predict disease

Example request:

{
  "symptoms": ["itching", "skin_rash", "chills"]
}

Admin Tools

POST /api/disease/insertpd/ – Insert patient data from CSV

🚀 Getting Started (Backend)
git clone https://github.com/Shridarshan234/disease-predictor.git
cd disease-predictor
pip install -r requirements.txt


Update PostgreSQL credentials in settings.py, then run:

python manage.py migrate
python manage.py runserver


Train the ML model:

Visit /api/disease/train/ in a browser or use Postman.

🩺 About the Consultation Feature

This tool helps users:

Quickly understand possible diseases from symptoms

Decide whether medical attention is necessary

Learn basic insights about their predicted disease

⚠️ This is not a professional diagnostic tool. Consult a doctor for real medical advice.

🤝 Contributing

Contributions, feature suggestions, and pull requests are welcome!
If you find issues or want to improve the system, feel free to open an issue.

📄 License

MIT License

📬 Contact

Shridarshan Mishra
