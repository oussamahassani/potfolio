import React from "react";
import { Helmet } from "react-helmet";

const Certifications = () => {
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
        className="w-full min-h-screen text-black bg-white py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-green-500">
              Certifications
            </p>
          </div>

          <p className="text-lg text-gray-600 mt-5 mb-12">
            Industry-recognized certifications validating expertise across cloud platforms, microservices, and modern web technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map((cert) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border-l-4 border-green-500 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{cert.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {cert.badge}
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-4 pt-4 border-t">
                  Issued: {cert.date}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-gray-700 leading-relaxed">
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
