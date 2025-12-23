import { useState } from "react";
import axios from "axios";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Input handler
  const InputHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Submit handler
  const contactform = (e) => {
    e.preventDefault();

    axios
      .post("https://mentor-hub-hri0.onrender.com/contactvalue", contact)
      .then((res) => {
        alert(res.data.message);

        // reset state
        setContact({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch((err) => {
        const msg = err?.response?.data?.error || "Something went wrong";
        alert(msg);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-50 to-indigo-100 px-4">
      
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-10">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          We'd love to hear from you. Please fill out the form below.
        </p>

        <form onSubmit={contactform} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={InputHandler}
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={contact.email}
              onChange={InputHandler}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={contact.message}
              onChange={InputHandler}
              placeholder="Write your message..."
              className="w-full p-3 h-28 sm:h-32 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
