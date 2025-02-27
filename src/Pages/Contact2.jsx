import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { IoCallSharp } from "react-icons/io5";
import Socials from "./Socials2";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ypk77ri",
        "template_zpvhcbm",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "NL9HdSVTyHlI58YB-"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending message:", error);
        }
      );
  };

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className=" flex flex-col items-center px-4 md:px-10 py-5 pt-8 ">
      <h1 className="text-center text-4xl sm:text-5xl font-semibold mb-20   md:pt-8 md:mt-8">
        Contact <span className="text-blue-500 font-bold">Me</span>
      </h1>

      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {[
            {
              icon: (
                <HiOutlineMail className="text-4xl sm:text-5xl text-blue-400" />
              ),
              text: "aasthalakhanpal11@gmail.com",
            },
            {
              icon: (
                <FaMapMarkerAlt className="text-4xl sm:text-5xl text-red-500" />
              ),
              text: "Mandi, Himachal Pradesh",
            },
            {
              icon: (
                <IoCallSharp className="text-4xl sm:text-5xl text-green-400" />
              ),
              text: "+91 82196-88585",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="bg-[#183850] p-4 sm:p-6 rounded-xl shadow-lg flex items-center gap-4 text-white text-lg font-semibold hover:shadow-2xl transition-all"
            >
              {item.icon}
              <p className="text-sm sm:text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-[#183850] p-6 rounded-xl shadow-lg text-white flex flex-col gap-4 z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="input-field h-20"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg text-lg transition-all duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-center mt-2">
              Message Sent Successfully!
            </p>
          )}
        </motion.form>
      </div>

      <Socials />
    </section>
  );
};

export default Contact;
