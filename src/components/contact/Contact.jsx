import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { motion, useScroll, useTransform } from "framer-motion";

import gsap from "gsap";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
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

  useEffect(() => {
    if (success) {
      const text = document.querySelector(".success");
      const message = "✓ Your message was successfully sent!";
      const words = message.split(" ");
      text.textContent = "";

      // Create container for each word
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "word";

        [...word].forEach((char) => {
          const charSpan = document.createElement("span");
          charSpan.textContent = char;
          charSpan.className = "char";
          wordSpan.appendChild(charSpan);
        });

        text.appendChild(wordSpan);
        if (index < words.length - 1) {
          const space = document.createElement("span");
          space.textContent = " ";
          space.className = "space";
          text.appendChild(space);
        }
      });

      // Initial positions for words
      const directions = [
        { x: -100, y: 0 },
        { x: 0, y: -100 },
        { x: 100, y: 0 },
        { x: 0, y: 100 }
      ];

      // Main animation sequence
      const mainTimeline = gsap.timeline();

      // Animate words flying in
      const wordElements = text.querySelectorAll(".word");
      wordElements.forEach((word, index) => {
        const direction = directions[index % directions.length];

        gsap.set(word, {
          x: direction.x,
          y: direction.y,
          opacity: 0
        });

        mainTimeline.to(
          word,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)"
          },
          index * 0.15
        );
      });

      // After words settle, animate letters
      mainTimeline.call(
        () => {
          const wordElements = text.querySelectorAll(".word");
          if (!wordElements.length) return;

          // Select one letter from each word
          wordElements.forEach((word) => {
            const letters = Array.from(word.querySelectorAll(".char")).filter(
              (letter) => letter.textContent.trim()
            );

            if (!letters.length) return;

            // Pick a random letter from this word
            const letter = letters[Math.floor(Math.random() * letters.length)];

            // Set initial properties
            gsap.set(letter, {
              transformOrigin: "center center",
              transformPerspective: 400
            });

            // Create unique animation for this letter
            const duration = gsap.utils.random(1, 2);
            const delay = gsap.utils.random(0, 0.5);
            const rotationX = gsap.utils.random([-360, 360]);

            gsap.to(letter, {
              rotationX: rotationX,
              y: gsap.utils.random(-10, 10),
              duration: duration,
              delay: delay,
              repeat: 1,
              yoyo: true,
              ease: "sine.inOut"
            });
          });
        },
        null,
        "+=0.2"
      );
    }

    return () => {
      gsap.killTweensOf(".char, .word");
    };
  }, [success]);

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
      <h2 className="contact__title">Contact</h2>
      <div className="contact__wrapper">
        <div className="contact__info">
          <div className="contact__item">
            <h3 className="contact__label">Mail</h3>
            <a href="mailto:andrijas.micun@gmail.com" className="contact__link">
              andrijas.micun@gmail.com
            </a>
          </div>
          <div className="contact__item">
            <h3 className="contact__label">Location</h3>
            <span className="contact__text">Serbia</span>
          </div>
          <div className="contact__item">
            <h3 className="contact__label">Phone</h3>
            <a href="tel:+38162776979" className="contact__link">
              +381 62 77 69 79
            </a>
          </div>
          <Links />
        </div>
        {/* <LoadingSpinner /> */}
        <div className="contact__form">
          {error && <p className="error">Error sending message</p>}
          {isSending && (
            <motion.div
              className="sending-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingSpinner />
            </motion.div>
          )}
          {success && (
            <motion.div
              className="success-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <p className="success"></p>
            </motion.div>
          )}
          {!success && !isSending && (
            <form ref={formRef} onSubmit={sendEmail} style={{ width: "100%" }}>
              <div className="contact__form-group">
                <label className="contact__form-label">
                  What&apos;s your name?
                </label>
                <input
                  className="contact__form-input"
                  type="text"
                  placeholder="John Doe*"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="contact__form-error">{errors.name}</span>
                )}
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">
                  What&apos;s your email?
                </label>
                <input
                  className="contact__form-input"
                  type="email"
                  placeholder="john@doe.com*"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="contact__form-error">{errors.email}</span>
                )}
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label">Your message</label>
                <textarea
                  className="contact__form-input"
                  placeholder="Message...*"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="contact__form-error">{errors.message}</span>
                )}
              </div>

              <div className="contact__form-footer">
                <hr className="contact__form-divider" />
                <div className="contact__form-button">
                  <RoundedButton customStyle={circleStyle}>
                    <span className="contact__button-text">
                      <input
                        type="submit"
                        value={isSending ? "Sending..." : "Send it!"}
                        className="contact__button-input"
                        disabled={isSending}
                      />
                    </span>
                  </RoundedButton>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
