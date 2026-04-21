import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Scaling Node.js Applications: Architecture Patterns for 2024",
      excerpt: "Learn best practices for building scalable Node.js microservices with real-world examples and performance optimization techniques.",
      date: "2024-04-15",
      readTime: "8 min read",
      category: "Backend",
      views: "2.3K",
      featured: true
    },
    {
      id: 2,
      title: "React Server Components: The Future of Web Development",
      excerpt: "Deep dive into React Server Components and how they're changing the way we build modern web applications.",
      date: "2024-04-08",
      readTime: "6 min read",
      category: "Frontend",
      views: "1.8K",
      featured: true
    },
    {
      id: 3,
      title: "Microservices Communication: REST vs GraphQL vs gRPC",
      excerpt: "Comprehensive comparison of modern API communication patterns for microservices architecture.",
      date: "2024-03-28",
      readTime: "10 min read",
      category: "Architecture",
      views: "3.1K",
      featured: false
    },
    {
      id: 4,
      title: "Docker & Kubernetes Best Practices for Production",
      excerpt: "Essential strategies for containerization and orchestration in production environments.",
      date: "2024-03-15",
      readTime: "12 min read",
      category: "DevOps",
      views: "2.9K",
      featured: false
    },
    {
      id: 5,
      title: "Performance Optimization: From Backend to Frontend",
      excerpt: "Full-stack approach to identifying and fixing performance bottlenecks.",
      date: "2024-03-01",
      readTime: "15 min read",
      category: "Performance",
      views: "4.2K",
      featured: false
    },
    {
      id: 6,
      title: "Security Best Practices for Full-Stack Developers",
      excerpt: "Essential security measures every developer should implement in their applications.",
      date: "2024-02-20",
      readTime: "11 min read",
      category: "Security",
      views: "3.5K",
      featured: false
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Backend: "bg-blue-100 text-blue-800",
      Frontend: "bg-purple-100 text-purple-800",
      Architecture: "bg-green-100 text-green-800",
      DevOps: "bg-orange-100 text-orange-800",
      Performance: "bg-red-100 text-red-800",
      Security: "bg-pink-100 text-pink-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Helmet>
        <title>Blog | Full Stack Developer Insights</title>
        <meta
          name="description"
          content="Technical articles and insights on full-stack development, microservices, performance optimization, and modern web technologies."
        />
        <meta
          name="keywords"
          content="blog, full-stack development, Node.js, React, microservices, DevOps, performance"
        />
      </Helmet>

      <div
        name="blog"
        className="w-full min-h-screen text-black bg-white py-20"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-purple-500">
              Technical Blog
            </p>
          </div>

          <p className="text-lg text-gray-600 mt-5 mb-12">
            Insights and best practices on full-stack development, architecture, and modern technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className={`bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group ${
                  article.featured ? "md:col-span-2 md:flex gap-8" : ""
                }`}
              >
                <div className={article.featured ? "md:w-2/3" : ""}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>📖 {article.readTime}</span>
                    <span>👁️ {article.views} views</span>
                    <button className="text-blue-600 font-semibold group-hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
                
                {article.featured && (
                  <div className="md:w-1/3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg p-6 text-white flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold">📚</p>
                      <p className="text-sm mt-2 font-semibold">Featured Article</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-6">
              Subscribe to get notifications about new articles
            </p>
            <div className="flex gap-2 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
