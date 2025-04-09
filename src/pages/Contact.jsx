import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import { motion } from "motion/react";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      setIsSent(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Replace with your EmailJS Template ID
        formData,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY, // Replace with your EmailJS Public Key
        }
        //     } // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response);
          setIsSent(true);
          setError(null);
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setIsSent(false);
          }, 2000);
        },
        (error) => {
          console.error("Failed to send email", error);
          setError("Failed to send email. Please try again.");
          setIsSent(false);

          setTimeout(() => {
            setError(null);
          }, 2000);
        }
      );
  };

  return (
    <motion.div
      className="contact themed-element"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
    >
      <div className="contact-container themed-element">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            className=" themed-element"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            className=" themed-element"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Message:</label>
          <textarea
            className=" themed-element"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            resize="none"
            style={{
              resize: "none",
            }}
            rows={3}
          />
          <div className="form-footer themed-element">
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/haithamexe"
                target="_blank"
                rel="noreferrer"
                className="themed-element"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/haitham.on"
                target="_blank"
                rel="noreferrer"
                className="themed-element"
              >
                Instagram
              </a>
              <a
                href="https://github.com/haithamexe"
                target="_blank"
                rel="noreferrer"
                className="themed-element"
              >
                Github
              </a>
            </div>
            {isSent && <p>Email sent successfully!</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">
              <p>Send</p>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contect;
