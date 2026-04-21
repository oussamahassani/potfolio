import React from "react";
import { Helmet } from "react-helmet";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Outstanding developer with deep expertise in full-stack development. Delivered high-quality code and solved complex architectural challenges with elegance. A true professional.",
      author: "John Smith",
      role: "CTO, Tech Company",
      company: "TechCorp Inc.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      id: 2,
      text: "Professional, reliable, and truly understands modern web development best practices. Delivered projects on time and with exceptional quality. Would definitely work with again.",
      author: "Sarah Johnson",
      role: "Product Manager, Startup",
      company: "InnovatHub",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 3,
      text: "A senior developer who mentors junior developers and elevates team standards. Deep knowledge in both frontend and backend. Highly recommended for technical leadership roles.",
      author: "Mike Chen",
      role: "Tech Lead, Enterprise",
      company: "GlobalTech Solutions",
      rating: 5,
      image: "👨‍💻"
    },
    {
      id: 4,
      text: "Exceptional problem-solving skills. Delivered a complex microservices migration that transformed our infrastructure and improved performance by 300%. Brilliant architect.",
      author: "Emily Rodriguez",
      role: "Engineering Manager",
      company: "CloudInnovate",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Client Testimonials | Full Stack Developer</title>
        <meta
          name="description"
          content="What clients and colleagues say about working with a senior full-stack developer with 8+ years of experience."
        />
      </Helmet>

      <div
        name="testimonials"
        className="w-full min-h-screen text-black bg-gradient-to-b from-blue-50 to-white py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
              Client Testimonials
            </p>
          </div>

          <p className="text-lg text-gray-600 mt-5 mb-12">
            Feedback from companies and clients I've worked with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-500"
              >
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <span className="text-4xl mr-4">{testimonial.image}</span>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-100 border-l-4 border-blue-500 p-8 rounded-lg">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              👥 Join Our Growing List of Satisfied Clients
            </p>
            <p className="text-gray-700">
              Interested in working together? Let's discuss your project and how I can help bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
