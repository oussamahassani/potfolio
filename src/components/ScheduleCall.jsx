import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Trans } from "react-i18next";

import emailjs from "@emailjs/browser";

/**
 * Schedule Call Modal Component
 * Allows users to schedule a consultation call
 */
const ScheduleCall = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    topic: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS (only once)
      if (!window.emailjsInitialized) {
        emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY || "key");
        window.emailjsInitialized = true;
      }

      const templateParams = {
        to_email: process.env.REACT_APP_EMAIL || "your.email@example.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        preferred_date: formData.date,
        preferred_time: formData.time,
        topic: formData.topic,
        message: formData.message,
      };

     await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID || "service_id",
        "template_schedule_call",
        templateParams
      );

      setSuccess(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          topic: "",
          message: "",
        });
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error scheduling call. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          
                 <Trans i18nKey="home.schedule" />
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <MdClose size={28} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Topic */}
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Topic</option>
              <option value="Full-Stack Development">Full-Stack Development</option>
              <option value="System Architecture">System Architecture</option>
              <option value="DevOps & Cloud">DevOps & Cloud</option>
              <option value="Performance Optimization">Performance Optimization</option>
              <option value="Security Consultation">Security Consultation</option>
              <option value="Other">Other</option>
            </select>

            {/* Date */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Time */}
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell me about your project (optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition disabled:opacity-50"
            >
              {loading ? "Scheduling..." : "Schedule Call"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold rounded-lg transition"
            >
              Cancel
            </button>
          </div>

          {/* Success Message */}
          {success && (
            <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center font-semibold">
              ✅ Call scheduled successfully! I'll be in touch soon.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ScheduleCall;
