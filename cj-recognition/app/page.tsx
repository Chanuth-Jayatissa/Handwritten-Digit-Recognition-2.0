import React from 'react';
import Link from 'next/link';

export default function HomePage() {
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
        <h1 className="text-6xl font-bold text-black mb-10">
          Welcome &nbsp;&nbsp;to &nbsp;&nbsp;CJ &nbsp;&nbsp;Recognition!
        </h1>
        <p className="text-3xl text-black mb-10 mt-10 text-center leading-relaxed">
          Effortlessly identify any handwritten digit with out advanced recognition model.<br/>
          Utilizing advanced algorithms to deliver reliable and precise digit recognition.
        </p>
        <p className="text-3xl font-semibold text-black mb-10 mt-10">
          Press the button to build the Neural Network!
        </p>
        <button className="mt-5 w-64 px-12 py-6 text-4xl text-semibold text-white bg-blue-500 rounded-2xl shadow-2xl hover:bg-blue-600 transition duration-300 ease-in-out">
          Build
        </button>
      </main>
    </div>
  );
}
