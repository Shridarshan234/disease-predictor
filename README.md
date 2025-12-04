Disease Predictor

Project: Disease Prediction Web Application (Final Year Major Project)
Developed By: Shridarshan Mishra + 2 Team members
Current Status: Backend completed (main branch)

Overview

Disease Predictor is a full-stack web application designed to identify the most probable disease based on a user’s symptoms. After testing multiple machine-learning algorithms, Logistic Regression proved to be the most accurate for our labeled dataset.

The application provides a simple, user-friendly consultation tool to help users understand potential illnesses early.

Disclaimer: This system provides informational predictions only and should not replace professional medical diagnosis or treatment.

Backend: Django REST Framework, PostgreSQL
Machine Learning: scikit-learn (Logistic Regression), stored artifacts (model.pkl, columns.pkl, label_encoder.pkl)
Frontend: React.js + Vite

Key Features

Quick and simple disease predictions

Beginner-friendly interface

Secure and private (no unnecessary data storage)

Anonymous use supported

Admin panel for model retraining and dataset management

Responsive UI for both desktop and mobile devices

Frontend (React.js)

The frontend is built using React + Vite with a clean and responsive interface.

What Users Can Do

Register, log in, and access personalized features

Select symptoms using a fast and searchable interface

Receive instant disease predictions

Admins can upload CSV data or retrain the ML model

Navigate through an intuitive UI

How It Works Internally

Authentication:
Tokens are generated on login and included in subsequent requests.

Symptom Submission:
Users choose symptoms which are sent to the backend as JSON.

Prediction:
The machine learning model returns the most probable disease.

Admin Tools:
Admins can retrain the model or upload datasets.

Run the Frontend Locally
cd frontend
npm install
npm start


The frontend runs at:
http://localhost:3000

Update the API base URL in .env or config before running.

Backend (Django REST API)
Features

User authentication using DRF Token Auth

Train the machine learning model via API

Predict diseases from symptom inputs

Optional CSV-based patient data insertion for admins

Logistic Regression selected as the primary model after evaluation

API Endpoints
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

Getting Started (Backend)
git clone https://github.com/Shridarshan234/disease-predictor.git
cd disease-predictor
pip install -r requirements.txt


Update PostgreSQL credentials in settings.py, then run:

python manage.py migrate
python manage.py runserver

Train the ML Model

Visit the following endpoint in a browser or use Postman:

/api/disease/train/

About the Consultation Feature

This tool helps users:

Understand possible diseases based on symptoms

Decide whether medical attention is necessary

Learn basic information about predicted conditions

Note: This is not a professional diagnostic tool. Always consult a doctor for real medical concerns.

Contributing

Contributions, feature suggestions, and pull requests are welcome.
If you find issues or want to improve the system, feel free to open an issue.

License

MIT License

Contact

Shridarshan Mishra
