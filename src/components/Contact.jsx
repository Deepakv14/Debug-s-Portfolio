import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_yewd573",
        "template_bdunxup",
        e.target,
        "j0Ylr0OgEdeeLPtfE"
      )
      .then(
        () => {
          setStateMessage("✅ Message sent successfully!");
          setIsSubmitting(false);
          e.target.reset();
        },
        () => {
          setStateMessage("❌ Something went wrong. Try again.");
          setIsSubmitting(false);
        }
      );

    setTimeout(() => setStateMessage(null), 4000);
  };

  return (
    <div className="m-2 px-6 text-center justify-center items-center">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center font-serif text-[#32012F] dark:text-white">
        Let's Connect
      </h1>
      <p className="text-gray-500 dark:text-white/60 mt-2 text-[10px] md:text-sm lg:text-sm font-extralight italic">
        Get in touch with me
      </p>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-2 w-full max-w-lg mx-auto bg-white dark:bg-white/10 p-6 rounded-xs shadow-lg border border-purple-100 dark:border-white/20"
      >
        <form onSubmit={sendEmail} className="flex flex-col gap-5">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3  text-xs md:text-sm lg:text-sm rounded-xs border-b-2 border-gray-300 dark:border-white/30 dark:text-white dark:placeholder-white/50 bg-transparent focus:outline-none focus:border-[#32012F] dark:focus:border-white transition"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 text-xs md:text-sm lg:text-sm rounded-xs border-b-2 border-gray-300 dark:border-white/30 dark:text-white dark:placeholder-white/50 bg-transparent focus:outline-none focus:border-[#32012F] dark:focus:border-white transition"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 text-xs md:text-sm lg:text-sm rounded-xs border-b-2 border-gray-300 dark:border-white/30 dark:text-white dark:placeholder-white/50 bg-transparent focus:outline-none focus:border-[#32012F] dark:focus:border-white transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows={4}
            required
            className="w-full p-3 text-xs md:text-sm lg:text-sm rounded-xs border-b-2 border-gray-300 dark:border-white/30 dark:text-white dark:placeholder-white/50 bg-transparent focus:outline-none focus:border-[#32012F] dark:focus:border-white transition resize-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              bg-[#32012F]
              text-white
              dark:bg-white
              dark:text-[#32012F]
              p-3
              rounded-xs
              hover:bg-[#581553]
              dark:hover:bg-white/80
              transition
              font-medium
            "
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {stateMessage && (
            <p className="text-sm text-center text-gray-600 dark:text-white/70">
              {stateMessage}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;