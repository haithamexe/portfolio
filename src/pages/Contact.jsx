import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    // const sendEmail = (e) => {
    //   e.preventDefault();

    //   emailjs
    //     .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
    //       publicKey: "YOUR_PUBLIC_KEY",
    //     })
    //     .then(
    //       () => {
    //         console.log("SUCCESS!");
    //       },
    //       (error) => {
    //         console.log("FAILED...", error.text);
    //       }
    //     );
    // };

    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response);
          setIsSent(true);
          setError(null);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email", error);
          setError("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {isSent && <p>Email sent successfully!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contect;
