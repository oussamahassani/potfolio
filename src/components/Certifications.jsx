import React from "react";
import { Helmet } from "react-helmet";
import { useDarkMode } from "../DarkModeContext";

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const certs = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: "🏆",
      badge: "Professional"
    },
    {
      id: 2,
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      date: "2022",
      icon: "☁️",
      badge: "Associate"
    },
    {
      id: 3,
      title: "React Advanced Patterns",
      issuer: "Frontend Masters",
      date: "2023",
      icon: "⚛️",
      badge: "Advanced"
    },
    {
      id: 4,
      title: "Java Microservices Specialist",
      issuer: "Oracle University",
      date: "2023",
      icon: "☕",
      badge: "Specialist"
    },
    {
      id: 5,
      title: "Kubernetes for Developers",
      issuer: "Linux Foundation",
      date: "2022",
      icon: "⛵",
      badge: "Professional"
    },
    {
      id: 6,
      title: "Security & OWASP Best Practices",
      issuer: "SANS Institute",
      date: "2021",
      icon: "🔒",
      badge: "Certified"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Certifications | Full Stack Developer</title>
        <meta
          name="description"
          content="Professional certifications and achievements in cloud services, microservices, and full-stack development."
        />
      </Helmet>

      <div
        name="certifications"
        className={`w-full min-h-screen py-16 sm:py-20 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="max-w-screen-lg p-4 sm:p-6 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-6 sm:pb-8">
            <p className={`text-3xl sm:text-4xl font-bold inline border-b-4 pb-2 ${
              isDarkMode
                ? "border-green-400 text-white"
                : "border-green-500 text-gray-900"
            }`}>
              Certifications
            </p>
          </div>

          <p className={`text-base sm:text-lg mt-4 sm:mt-5 mb-8 sm:mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Industry-recognized certifications validating expertise across cloud platforms, microservices, and modern web technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {certs.map((cert) => (
              <div
                key={cert.id}
                className={`p-5 sm:p-6 rounded-lg border-l-4 transition-shadow ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-700 border-green-400 hover:shadow-green-500/20 shadow-lg"
                    : "bg-gradient-to-br from-gray-50 to-gray-100 border-green-500 hover:shadow-lg shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="flex items-start">
                    <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 flex-shrink-0">{cert.icon}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className={`text-base sm:text-lg font-bold leading-tight ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}>
                        {cert.title}
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>{cert.issuer}</p>
                    </div>
                  </div>
                  <span className={`inline-block text-xs font-semibold px-2 sm:px-3 py-1 rounded-full flex-shrink-0 ${
                    isDarkMode
                      ? "bg-green-900/50 text-green-300"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {cert.badge}
                  </span>
                </div>
                <div className={`text-xs mt-4 pt-4 border-t ${
                  isDarkMode
                    ? "text-gray-400 border-gray-600"
                    : "text-gray-500 border-gray-300"
                }`}>
                  Issued: {cert.date}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg border-l-4 ${
            isDarkMode
              ? "bg-blue-900/30 border-blue-400"
              : "bg-blue-50 border-blue-500"
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>Continuous Learning</h3>
            <p className={`text-sm sm:text-base leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}>
              Committed to staying current with industry trends and best practices through regular training, courses, and certifications. 
              Regularly participate in webinars, tech conferences, and open-source community events.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certifications;
