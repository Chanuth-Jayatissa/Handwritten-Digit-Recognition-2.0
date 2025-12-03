import os
import cv2
import numpy as np
import tensorflow as tf
from keras import models

# Get absolute path to the model file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "100%-model.keras")

# Load model once at startup
model = models.load_model(MODEL_PATH)

def preprocess_image_bytes(file_bytes: bytes):
    """Convert uploaded image bytes into a tensor ready for the model."""
    # Convert bytes → NumPy array
    nparr = np.frombuffer(file_bytes, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)  # grayscale

    # Resize to 28x28 like your training pipeline
    img = cv2.resize(img, (28, 28), interpolation=cv2.INTER_AREA)

    # Invert + normalize like your original script
    img = np.invert(img)
    img = tf.keras.utils.normalize(img, axis=1)

    # Add channel + batch dimensions: (1, 28, 28, 1)
    img = np.expand_dims(img, axis=-1)
    img = np.expand_dims(img, axis=0)
    return img

def predict_digit_from_bytes(file_bytes: bytes) -> int:
    """Return the predicted digit (0–9) from raw image bytes."""
    img = preprocess_image_bytes(file_bytes)
    prediction = model.predict(img)
    digit = int(np.argmax(prediction))
    return digit
