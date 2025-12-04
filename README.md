# Disease Predictor

**Project:** Disease Prediction Web Application (Final Year Major Project)  
**Developed By:** Shridarshan Mishra + 2 Team members  
**Current Status:** Backend completed (main branch)

---

## Overview

Disease Predictor is a full-stack web application designed to identify the most probable disease based on a user’s symptoms. After testing multiple machine-learning algorithms, Logistic Regression proved to be the most accurate for our labeled dataset.

The application provides a simple, user-friendly consultation tool to help users understand potential illnesses early.

**Disclaimer:** This system provides informational predictions only and should not replace professional medical diagnosis or treatment.

**Backend:** Django REST Framework, PostgreSQL  
**Machine Learning:** scikit-learn (Logistic Regression), stored artifacts (`model.pkl`, `columns.pkl`, `label_encoder.pkl`)  
**Frontend:** React.js + Vite

---

## Key Features

- Quick and simple disease predictions  
- Beginner-friendly interface  
- Secure and private (no unnecessary data storage)  
- Anonymous use supported  
- Admin panel for model retraining and dataset management  
- Responsive UI for both desktop and mobile devices  

---

## Frontend (React.js)

The frontend is built using React + Vite with a clean and responsive interface.

### What Users Can Do

- Register, log in, and access personalized features  
- Select symptoms using a fast and searchable interface  
- Receive instant disease predictions  
- Admins can upload CSV data or retrain the ML model  
- Navigate through an intuitive and modern UI  

### How It Works Internally

**Authentication:**  
Tokens are generated on login and included in subsequent requests.

**Symptom Submission:**  
Users choose symptoms which are sent to the backend as JSON.

**Prediction:**  
The machine learning model returns the most probable disease.

**Admin Tools:**  
Admins can retrain the model or upload datasets.

### Run the Frontend Locally

```bash
cd frontend
npm install
npm start
