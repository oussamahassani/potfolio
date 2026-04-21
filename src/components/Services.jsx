import React from "react";
import { Helmet } from "react-helmet";

const Services = () => {
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
        className="w-full min-h-screen text-black bg-gradient-to-b from-white to-gray-50 py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-green-500">
              Services
            </p>
          </div>

          <p className="text-lg text-gray-600 mt-5 mb-12">
            Comprehensive services for building, scaling, and optimizing your applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-500 group cursor-pointer"
              >
                <p className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              💼 Available for Consulting & Development
            </h3>
            <p className="text-gray-700 mb-4">
              I'm available for full-time positions, contract work, consulting, and mentoring. 
              Whether you need to build from scratch, scale existing systems, or improve performance, 
              I'm here to help.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Call
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <p className="text-3xl mb-2">🎯</p>
              <p className="font-bold text-gray-900">Client-Focused</p>
              <p className="text-sm text-gray-600 mt-2">Your goals drive our solutions and decisions.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <p className="text-3xl mb-2">🚀</p>
              <p className="font-bold text-gray-900">Quality First</p>
              <p className="text-sm text-gray-600 mt-2">High standards in code, architecture, and delivery.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <p className="text-3xl mb-2">⏱️</p>
              <p className="font-bold text-gray-900">Reliable</p>
              <p className="text-sm text-gray-600 mt-2">On-time delivery with clear communication.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
