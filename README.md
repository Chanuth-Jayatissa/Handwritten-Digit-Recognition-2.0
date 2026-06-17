# Handwritten Digit Recognition 2.0

Handwritten Digit Recognition 2.0 is a web app that wraps a trained digit recognition model with a Next.js frontend and FastAPI prediction backend. Users upload an image of a handwritten digit, and the backend returns the model's predicted number.

## Features

- Image upload flow from the web frontend.
- FastAPI /predict endpoint that accepts image uploads.
- Python model wrapper for loading and running the trained Keras model.
- Next.js frontend for interacting with the prediction API.
- CORS configuration for local frontend-backend development.

## Tech Stack

- Next.js and React
- TypeScript
- FastAPI and Python
- Keras model artifact
- Tailwind CSS

## Project Structure

- README.md - top-level project note
- cj-recognition/app/page.tsx - upload UI and prediction display
- cj-recognition/backend/main.py - FastAPI prediction endpoint
- cj-recognition/backend/model.py - model loading and prediction helper
- cj-recognition/backend/100%-model.keras - trained model artifact
- cj-recognition/package.json - frontend scripts and dependencies

## Getting Started

Run the frontend from the app directory:

~~~bash
cd cj-recognition
npm install
npm run dev
~~~

Run the backend from the backend directory after installing Python dependencies:

~~~bash
cd cj-recognition/backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
~~~

The frontend posts uploaded images to http://localhost:8000/predict.

## Status

AI/ML web app prototype. Version 1.0 contains the earlier model-building experiment; this version adds a browser-based prediction interface.
