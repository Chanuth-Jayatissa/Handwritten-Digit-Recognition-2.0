'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPrediction(null);
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Backend error');
      }

      const data = await res.json();
      setPrediction(data.digit);
    } catch (err) {
      console.error(err);
      setError('An error occurred while predicting the digit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="w-full mt-7">
        <nav className="container mx-auto px-4 py-5 bg-white rounded-xl shadow-xl flex justify-center items-center">
          <div className="flex space-x-32">
            <Link href="/" className="text-2xl text-gray-800 hover:text-blue-500">
              Home
            </Link>
            <Link href="/" className="text-2xl text-gray-800 hover:text-blue-500">
              Build
            </Link>
            <Link href="/" className="text-2xl text-gray-800 hover:text-blue-500">
              About
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-6xl font-bold text-black mb-10 text-center">
          Welcome &nbsp;&nbsp;to &nbsp;&nbsp;CJ &nbsp;&nbsp;Recognition!
        </h1>

        <p className="text-3xl text-black mb-10 mt-10 text-center leading-relaxed">
          Effortlessly identify any handwritten digit with our advanced recognition model.
          <br />
          Utilizing advanced algorithms to deliver reliable and precise digit recognition.
        </p>

        <p className="text-3xl font-semibold text-black mb-10 mt-10 text-center">
          Upload a handwritten digit to see what the Neural Network predicts!
        </p>

        <button
          className="mt-5 w-64 px-12 py-6 text-4xl font-semibold text-white bg-blue-500 rounded-2xl shadow-2xl hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? 'Predicting...' : 'Build'}
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="mt-8 text-3xl text-center">
          {prediction !== null && (
            <p>
              The model predicts: <span className="font-bold text-blue-600">{prediction}</span>
            </p>
          )}
          {error && <p className="text-red-600 text-xl">{error}</p>}
        </div>
      </main>
    </div>
  );
}
