"use client";

import { Badge } from "@/components/ui/badge";
import {
  Anchor,
  Ship,
  CloudRain,
  Waves,
  Droplets,
  Gauge
} from "lucide-react";

const skillCategories = [
  // {
  //   icon: Ship,
  //   title: "Marine Engineering",
  //   description: "Experience in designing systems and equipment for marine environments and vessels.",
  //   skills: ["Naval Architecture", "Propulsion Systems", "Marine Mechanics", "Vessel Design", "Offshore Structures"]
  // },
  {
    icon: Waves,
    title: "Ocean Dynamics",
    description: "Understanding of ocean physics, currents, and wave mechanics for engineering applications.",
    skills: ["Wave Mechanics", "Tide Prediction", "Current Analysis", "Ocean Modeling", "Hydrodynamics"]
  },
  {
    icon: Anchor,
    title: "Underwater Systems",
    description: "Specialized knowledge in developing technology that functions in underwater environments.",
    skills: ["Pressure Vessels", "Underwater Acoustics", "Submersible Design", "Deep Sea Electronics", "Waterproofing"]
  },
  {
    icon: CloudRain,
    title: "Marine Data Analysis",
    description: "Skills in collecting and processing data from ocean environments to extract meaningful insights.",
    skills: ["Oceanographic Data", "Marine GIS", "Statistical Analysis", "Remote Sensing", "Predictive Modeling"]
  },
  {
    icon: Droplets,
    title: "Ocean Conservation",
    description: "Knowledge of technologies and methods for marine environment monitoring and protection.",
    skills: ["Environmental Monitoring", "Marine Biology", "Pollution Detection", "Ecosystem Assessment", "Coral Restoration"]
  },
  {
    icon: Gauge,
    title: "Marine Instrumentation",
    description: "Expertise in developing instruments and sensors for marine data collection and monitoring.",
    skills: ["Sensor Networks", "Calibration", "Data Logging", "Telemetry", "Ruggedized Electronics"]
  }
];

export default function SkillsHighlight() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            A diverse range of specialized abilities in ocean engineering and marine technology,
            cultivated through academic studies and practical experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <category.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <p className="text-gray-600 mb-5">{category.description}</p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="bg-sky-100 text-sky-800 hover:bg-sky-200">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
