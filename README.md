# Disease Predictor

**Project Type:** Full-Stack Disease Prediction System (Final Year Major Project)  
**Developed By:** Shridarshan Mishra + Team  
**Branch:** main (Backend completed)

---

## Project Summary

Disease Predictor is a complete web-based application that analyzes user-selected symptoms and predicts the most likely disease using machine-learning techniques. After evaluating multiple models, Logistic Regression was chosen for its superior performance on the dataset.

The system is built to be straightforward, fast, and accessible to users who want a basic understanding of their health conditions.

**Note:** This tool offers preliminary predictions only and should not be used as a substitute for certified medical advice or diagnosis.

**Technologies Used:**  
- **Backend:** Django REST Framework, PostgreSQL  
- **Machine Learning:** Logistic Regression (scikit-learn), model files (`model.pkl`, `columns.pkl`, `label_encoder.pkl`)  
- **Frontend:** React.js, Vite  

---

## Core Features

- Instant prediction of possible diseases based on symptoms  
- Simple and easy-to-navigate design  
- No sensitive user data stored unnecessarily  
- Option to use the system without revealing your identity  
- Admin dashboard for dataset upload and model retraining  
- Fully responsive layout for mobile, tablet, and desktop  

---

## Frontend (React.js)

The frontend is developed using React with Vite for fast builds and optimized performance. The UI focuses on clarity, speed, and accessibility.

### User Capabilities

- Create an account or log in to access personalized options  
- Choose symptoms from a searchable symptom list  
- View the predicted disease immediately  
- Admins can upload patient CSV data or retrain the machine-learning model  
- Smooth routing and clean interface for easy navigation  

### Behind the Scenes

**Authentication:**  
On successful login, the system issues a token that is attached to all API calls.

**Symptom Handling:**  
Selected symptoms are packaged into a JSON request and forwarded to the prediction API.

**Prediction Engine:**  
The trained machine-learning model processes the symptoms and returns the most probable disease.

**Admin Operations:**  
Dataset uploads and retraining endpoints are reserved for admin accounts.

### Running the Frontend Locally

```bash
cd frontend
npm install
npm start
