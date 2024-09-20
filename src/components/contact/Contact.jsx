import { useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";

import RoundedButton from "../RoundedButton/RoundedButton";
import Links from "../sidebar/Links/Links";

const Contact = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        error = !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email address" : "";
        break;
      case "message":
        error = value.trim() === "" ? "Message is required" : "";
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error
    });

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formValid = Object.values(errors).every((error) => error === "");

    if (formValid) {
      setIsSending(true);
      setError(false);
      setSuccess(false);

      emailjs
        .sendForm(
          "service_g788tme",
          "template_w7u6qtb",
          formRef.current,
          "Fj7G3Ji2yq_cho6WY"
        )
        .then(
          (result) => {
            setIsSending(false);
            setSuccess(true);
          },
          (error) => {
            setIsSending(false);
            setError(true);
          }
        );

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      setErrors({
        name: "",
        email: "",
        message: ""
      });
    } else {
      console.error("Form has validation errors");
    }
  };

  const circleStyle = {
    // backgroundColor: '#1d5bd7',
    backgroundColor: "rgb(0, 217, 255)",
    width: "clamp(9em, 12vw, 11em)",
    height: "clamp(9em, 12vw, 11em)",
    borderRadius: "50%"
  };

  return (
    <motion.div className="contact">
      <h2>Contact</h2>
      <div className="wrapper">
        <div className="text-container">
          <div className="item">
            <h3>Mail</h3>
            <a href="mailto:andrijas.micun@gmail.com">
              andrijas.micun@gmail.com
            </a>
          </div>
          <div className="item">
            <h3>Location</h3>
            <span>Serbia</span>
          </div>
          <div className="item">
            <h3>Phone</h3>
            <a href="tel:+38162776979" aria-label="Call +381 62 77 69 79">
              +381 62 77 69 79
            </a>
          </div>
          <Links />
        </div>
        <div className="formContainer">
          <form ref={formRef} onSubmit={sendEmail}>
            <label>What&apos;s your name?</label>
            <input
              type="text"
              placeholder="John Doe*"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span style={{ color: "red" }} className="error">
                {errors.name}
              </span>
            )}
            <label>What&apos;s your email?</label>
            <input
              type="email"
              placeholder="john@doe.com*"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red" }} className="error">
                {errors.email}
              </span>
            )}

            <label>Your message</label>
            <textarea
              rows={6}
              placeholder="Message...*"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span style={{ color: "red" }} className="error">
                {errors.message}
              </span>
            )}
            <hr />

            {!success && (
              <motion.div style={{ x }} className="btnContent">
                <RoundedButton customStyle={circleStyle}>
                  <span className="btn-text">
                    <input
                      type="submit"
                      name="submit"
                      value={isSending ? "Sending..." : "Send it!"}
                      className="formBtn"
                      disabled={isSending}
                    />
                  </span>
                </RoundedButton>
              </motion.div>
            )}

            {error && <p style={{ color: "red" }}>Error sending message</p>}
            {success && <p>Your message was successfully sent!</p>}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
