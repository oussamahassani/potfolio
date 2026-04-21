import React from "react";
import { Helmet } from "react-helmet";
import { useDarkMode } from "../DarkModeContext";

const Services = () => {
  const { isDarkMode } = useDarkMode();
  const services = [
    {
      id: 1,
      icon: "🏗️",
      title: "System Architecture & Design",
      description: "Design scalable, maintainable systems using microservices, event-driven architecture, and cloud-native patterns.",
      highlights: ["Microservices Design", "Event-Driven Architecture", "System Design Reviews", "Technical Strategy"]
    },
    {
      id: 2,
      icon: "⚛️",
      title: "Full-Stack Web Development",
      description: "Build modern, performant web applications with React, Next.js, Node.js, and TypeScript.",
      highlights: ["React/Next.js Apps", "Node.js Backend", "RESTful & GraphQL APIs", "Full-Stack Solutions"]
    },
    {
      id: 3,
      icon: "☕",
      title: "Enterprise Java Development",
      description: "Develop robust enterprise applications using Spring Boot, Spring Cloud, and Java best practices.",
      highlights: ["Spring Boot", "Microservices", "Enterprise Patterns", "Legacy Modernization"]
    },
    {
      id: 4,
      icon: "⛵",
      title: "DevOps & Cloud Services",
      description: "Deploy and manage applications on AWS, GCP, and Azure with Docker, Kubernetes, and CI/CD pipelines.",
      highlights: ["AWS/GCP/Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      id: 5,
      icon: "⚡",
      title: "Performance Optimization",
      description: "Identify and eliminate bottlenecks to improve responsiveness, reduce load times, and scale efficiently.",
      highlights: ["Performance Audits", "Optimization Strategies", "Load Testing", "Scalability Planning"]
    },
    {
      id: 6,
      icon: "🔒",
      title: "Security & Best Practices",
      description: "Implement security measures, conduct code reviews, and establish development standards and best practices.",
      highlights: ["Security Audits", "Code Reviews", "Best Practices", "OWASP Compliance"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services | Full Stack Developer</title>
        <meta
          name="description"
          content="Professional services for full-stack development, system architecture, cloud deployment, and enterprise solutions."
        />
      </Helmet>

      <div
        name="services"
        className={`w-full min-h-screen py-16 sm:py-20 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-b from-white to-gray-50 text-black"
        }`}
      >
        <div className="max-w-screen-lg p-4 sm:p-6 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-6 sm:pb-8">
            <p className={`text-3xl sm:text-4xl font-bold inline border-b-4 pb-2 ${
              isDarkMode
                ? "border-green-400 text-white"
                : "border-green-500 text-gray-900"
            }`}>
              Services
            </p>
          </div>

          <p className={`text-base sm:text-lg mt-4 sm:mt-5 mb-8 sm:mb-12 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Comprehensive services for building, scaling, and optimizing your applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 sm:p-8 rounded-lg transition-shadow border-t-4 group cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-800 border-green-400 shadow-lg shadow-gray-900/50 hover:shadow-green-500/20"
                    : "bg-white border-green-500 shadow-md hover:shadow-xl"
                }`}
              >
                <p className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </p>
                
                <h3 className={`text-lg sm:text-xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {service.title}
                </h3>

                <p className={`text-sm sm:text-base mb-6 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className={`flex items-center text-xs sm:text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-700"
                    }`}>
                      <span className={`mr-2 ${
                        isDarkMode ? "text-green-400" : "text-green-500"
                      }`}>✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`border-l-4 p-6 sm:p-8 rounded-lg mb-8 ${
            isDarkMode
              ? "bg-blue-900/30 border-blue-400"
              : "bg-blue-50 border-blue-500"
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              💼 Available for Consulting & Development
            </h3>
            <p className={`text-sm sm:text-base mb-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              I'm available for full-time positions, contract work, consulting, and mentoring. 
              Whether you need to build from scratch, scale existing systems, or improve performance, 
              I'm here to help.
            </p>
            <button className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors ${
              isDarkMode
                ? "bg-blue-700 text-white hover:bg-blue-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}>
              Schedule a Call
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: "🎯", title: "Client-Focused", desc: "Your goals drive our solutions and decisions." },
              { icon: "🚀", title: "Quality First", desc: "High standards in code, architecture, and delivery." },
              { icon: "⏱️", title: "Reliable", desc: "On-time delivery with clear communication." }
            ].map((item, idx) => (
              <div key={idx} className={`text-center p-4 sm:p-6 rounded-lg shadow ${
                isDarkMode
                  ? "bg-gray-800 shadow-lg shadow-gray-900/50"
                  : "bg-white shadow-md"
              }`}>
                <p className="text-2xl sm:text-3xl mb-2">{item.icon}</p>
                <p className={`font-bold text-sm sm:text-base ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>{item.title}</p>
                <p className={`text-xs sm:text-sm mt-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
