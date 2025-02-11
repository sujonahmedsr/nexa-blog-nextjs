"use client"

import React, { useState } from "react";

const SupportUsPage = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Support Center</h1>
      <p className="text-gray-600 mb-6">
        Need help? Describe your issue below, and our team will get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-3 border rounded-md"
          rows={5}
          placeholder="Write your issue here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          disabled={submitted}
        >
          {submitted ? "Message Sent!" : "Submit"}
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-600">
          ✅ Your support request has been submitted successfully!
        </p>
      )}
    </div>
  );
};

export default SupportUsPage;
