import React, { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";


const Newsletter = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef(null);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      // Initialize EmailJS
      if (!window.emailjsInitialized) {
        emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY || "key");
        window.emailjsInitialized = true;
      }

      const templateParams = {
        to_email: process.env.REACT_APP_EMAIL || "your.email@example.com",
        subscriber_email: email,
        subscription_date: new Date().toLocaleDateString(),
      };

      await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID || "service_id",
        "template_newsletter_subscribe",
        templateParams
      );

      setSuccess(true);
      setEmail("");

      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error("Subscription error:", err);
      setError("Unable to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full shadow-2xl transform transition-all">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📬 Subscribe to Newsletter
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            <MdClose size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Get the latest articles on full-stack development, performance optimization, and best practices delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              disabled={loading || success}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />

            {error && (
              <div className="p-3 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm text-center font-semibold">
                ✅ Successfully subscribed!
              </div>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition disabled:opacity-50 transform hover:scale-105"
            >
              {loading ? "Subscribing..." : success ? "Done!" : "Subscribe Now"}
            </button>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
