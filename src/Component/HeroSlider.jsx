import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function HeroSlider() {
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      title: "Find Trusted Local Services",
      description:
        "Discover and book professionals in your area for home repair, cleaning, and more.",
      cta: "Get Started",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      title: "Reliable Help, Anytime",
      description:
        "Get instant access to verified experts ready to help when you need them most.",
      cta: "Explore Now",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      title: "Quality Service Guaranteed",
      description:
        "Your satisfaction is our priority. We connect you only with top-rated professionals.",
      cta: "Book a Service",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative m-5 sm:m-10 md:m-20 bg-gray-100 h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-xl">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90 animate-fade-in">
              {slide.description}
            </p>
            <Link to='/services' className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
