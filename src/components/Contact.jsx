import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Trans } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useDarkMode } from "../DarkModeContext";

const Contact = () => {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Initialize EmailJS
      if (!window.emailjsInitialized) {
        emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY || "key");
        window.emailjsInitialized = true;
      }

      const templateParams = {
        to_email: process.env.REACT_APP_EMAIL || "your.email@example.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID || "service_id",
        "template_contact_form",
        templateParams
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Full Stack Developer</title>
        <meta
          name="description"
          content="Get in touch for consulting, development projects, or career opportunities."
        />
      </Helmet>

      <div
        name="contact"
        className={`w-full min-h-screen pt-20 pb-10 px-4 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900"
        }`}
      >
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
          {/* Header */}
          <div className="pb-8 mb-12">
            <p className={`text-4xl font-bold inline border-b-4 border-blue-500 pb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              <Trans i18nKey="contact.titel" />
            </p>
            <p className={`py-6 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              <Trans i18nKey="contact.text" />
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 resize-none transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                  />
                </div>

                {/* Messages */}
                {success && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg font-semibold text-center">
                    ✅ Message sent successfully! I'll reply soon.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg font-semibold text-center">
                    ❌ {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Email */}
              <div className={`p-6 rounded-lg border-2 transition-all ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-500"
              }`}>
                <h3 className="text-2xl font-bold text-blue-500 mb-2">📧 Email</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {process.env.REACT_APP_EMAIL || "your.email@example.com"}
                </p>
              </div>

              {/* Phone */}
              <div className={`p-6 rounded-lg border-2 transition-all ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:border-purple-500"
                  : "bg-white border-gray-200 hover:border-purple-500"
              }`}>
                <h3 className="text-2xl font-bold text-purple-500 mb-2">📞 Phone</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Available for calls and consultations
                </p>
              </div>

              {/* Experience */}
              <div className={`p-6 rounded-lg border-2 transition-all ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:border-green-500"
                  : "bg-white border-gray-200 hover:border-green-500"
              }`}>
                <h3 className="text-2xl font-bold text-green-500 mb-2">🎯 Response Time</h3>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  Usually within 24 hours
                </p>
              </div>

              {/* Social Links */}
              <div className={`p-6 rounded-lg border-2 transition-all ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:border-pink-500"
                  : "bg-white border-gray-200 hover:border-pink-500"
              }`}>
                <h3 className="text-2xl font-bold text-pink-500 mb-4">🔗 Connect</h3>
                <div className="flex gap-4 flex-wrap">
                  {process.env.REACT_APP_GITHUB_URL && (
                    <a
                      href={process.env.REACT_APP_GITHUB_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                    >
                      GitHub
                    </a>
                  )}
                  {process.env.REACT_APP_LINKEDIN_URL && (
                    <a
                      href={process.env.REACT_APP_LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition"
                    >
                      LinkedIn
                    </a>
                  )}
                  {process.env.REACT_APP_TWITTER_URL && (
                    <a
                      href={process.env.REACT_APP_TWITTER_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-lg transition"
                    >
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

