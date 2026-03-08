// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/web_development.jpg",
    title: "Web Development",
    description: "Building websites that build your business. Your vision, our web creation.",
  },
  {
    id: 2, 
    image: "/images/digital_marketing.jpg",
    title: "Digital Marketing",
    description: "Turning clicks into customers. Your growth, our mission.",
  },
  {
    id: 3,
    image: "/images/saas.jpg",
    title: "Software As A Service (SaaS)",
    description: "Software that scales with your success. From complexity to clarity — in the cloud.",
  },
  {
    id: 4,
    image: "/images/iot.jpg",
    title: "Internet of Things (IoT) Development",
    description: "Breathtaking visuals to elevate your content.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="max-w-8xl mx-auto mt-0">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-auto object-cover"/>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
                ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
