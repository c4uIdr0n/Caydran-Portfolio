"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projectCategories = [
  { id: "marine", label: "Marine Engineering" },
  { id: "underwater", label: "Underwater Systems" },
  { id: "oceandata", label: "Ocean Data" },
  { id: "conservation", label: "Conservation Tech" },
];

const projects = {
  marine: [
    {
      title: "fuckeing ducmbass",
      description: "firebase my ass",
      image: "https://images.unsplash.com/photo-1586252999747-b40a503d181d?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/auv",
    },
    {
      title: "Wave Energy Converter",
      description: "Developed a prototype wave energy conversion system for powering ocean monitoring equipment.",
      image: "https://images.unsplash.com/photo-1498623116890-37e912163d5d?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/wave-energy",
    },
  ],
  underwater: [
    {
      title: "Submersible Imaging System",
      description: "Created an underwater camera system for marine biology research with enhanced low-light capabilities.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/imaging",
    },
    {
      title: "Underwater Acoustic Communication",
      description: "Implemented a digital communication system that uses sound waves to transmit data underwater.",
      image: "https://images.unsplash.com/photo-1591375607635-2d8fd1a84069?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/acoustic-comm",
    },
  ],
  oceandata: [
    {
      title: "Ocean Monitoring Network",
      description: "Built a network of connected buoys for marine data collection with cloud-based visualization.",
      image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/ocean-monitoring",
    },
    {
      title: "Marine Weather Prediction",
      description: "Developed algorithms to predict local marine conditions using historical and real-time sensor data.",
      image: "https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/weather-prediction",
    },
  ],
  conservation: [
    {
      title: "Coral Reef Monitoring System",
      description: "Created an automated system to monitor coral reef health using computer vision and underwater sensors.",
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=2070&auto=format&fit=crop",
      link: "/projects/coral-monitoring",
    },
    {
      title: "Ocean Cleanup Drone",
      description: "Designed a surface drone for collecting marine debris and microplastics with solar-powered operation.",
      image: "https://images.unsplash.com/photo-1621451545960-620a212e9d30?q=80&w=2074&auto=format&fit=crop",
      link: "/projects/cleanup-drone",
    },
  ],
};

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Delivering Innovative Engineering Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Showcasing projects across multiple domains of marine and ocean engineering,
            from underwater systems to conservation technology.
          </p>
        </div>

        <Tabs defaultValue="marine" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12 mx-auto max-w-4xl">
            {projectCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm md:text-base py-3"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(projects).map(([category, categoryProjects]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 gap-8">
                {categoryProjects.map((project, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-60 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                        <Link href={project.link}>Learn more</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
