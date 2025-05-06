"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-5 flex justify-center items-center w-full h-full">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-800/40 mix-blend-multiply z-10"
          aria-hidden="true"
        />
        <img
          src="https://medialibrary.damen.com/transform/7c10c2fd-85b4-4167-b83f-0026bd8ecd8f/tanker-2500-3"
          alt="Ocean engineering background"
          className="w-full h-full object-cover"
          style={{ width: "40%", height: "75%" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div
          className={`max-w-3xl transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Engineering Tomorrow&apos;s <span className="text-teal-300">Ocean Technology</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Showcasing innovative marine engineering and computing solutions,
            exploring the depths of ocean technology one project at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium"
            >
              <Link href="/projects">
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}
          aria-label="Scroll down"
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDownIcon className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
