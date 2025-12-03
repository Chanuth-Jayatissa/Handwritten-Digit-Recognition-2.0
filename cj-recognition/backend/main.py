from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from model import predict_digit_from_bytes

app = FastAPI()

# Allow requests from your Next.js app
origins = [
    "http://localhost:3000",
    # later you can add your deployed domain here
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok"}

@app.post("/predict")
async def predict_digit(file: UploadFile = File(...)):
    # Read file bytes
    file_bytes = await file.read()
    digit = predict_digit_from_bytes(file_bytes)
    return {"digit": digit}
