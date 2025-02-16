"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";


  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: { preventDefault: () => void; }) => {
      e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setError("Email service is not configured properly.");
      return;
    }

    console.log("Service ID: ", serviceId);
    console.log("TemplateID :", templateId);
    console.log("Public key: ", publicKey);


      emailjs.send(serviceId, templateId, formData, publicKey)
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
            setIsSent(true);
            setFormData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.error("Failed to send email:", err);
            setError("Failed to send email. Please try again.");
          }
        );
    };

    return (

      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg pt-17">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        {isSent && <p className="text-green-500">Message sent successfully!</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        <form onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-red-900 text-white p-3 rounded-lg hover:bg-red-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };


export default ContactForm;