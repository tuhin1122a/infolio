/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "UI-UX Design",
      description:
        "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
      icon: "/4-1.png",
    },
    {
      title: "Digital Product Design",
      description:
        "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
      icon: "/5.png",
    },
    {
      title: "Web Developments",
      description:
        "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
      icon: "/6.png",
    },
    {
      title: "App Development",
      description:
        "Custom mobile application development to fit your business needs.",
      icon: "/4-1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev.add(index)));
          } else {
            setVisibleCards((prev) => {
              prev.delete(index);
              return new Set(prev);
            });
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when 50% of the card is in view
      }
    );

    cardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + 3 < services.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="mb-12 relative flex flex-col justify-center items-center h-screen">
      <h2 className="absolute top-36 left-12 text-green-500 font-bold">
        OUR SPECIALIZE
      </h2>
      <div className="w-11/12 h-10 border-t border-r flex justify-center items-center"></div>

      {/* Arrow Buttons */}
      <div className="flex justify-between items-center w-11/12 mb-6">
        <div>
          <h2 className="text-5xl font-bold text-center">
            Comprehensive{" "}
            <span className="text-gray-700 font-thin">Services</span>
          </h2>
        </div>

        <div className="flex space-x-2 z-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full bg-gray-100 shadow-md ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 3 >= services.length}
            className={`p-3 rounded-full bg-gray-100 shadow-md ${
              currentIndex + 3 >= services.length
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Services Cards */}
      <div className="flex justify-center mt-20">
        <div className="flex justify-center items-center gap-8 w-full max-w-screen-lg">
          {services
            .slice(currentIndex, currentIndex + 3)
            .map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`cursor-pointer bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-300 ${
                  visibleCards.has(index) ? "animate-fade-in" : ""
                }`}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-20 mx-auto mb-6"
                  width={100}
                  height={100}
                />
                <h3 className="text-xl font-bold text-center truncate">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 text-center mt-4">
                  {service.description}
                </p>
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-base text-blue-500 hover:underline inline-flex items-center"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
