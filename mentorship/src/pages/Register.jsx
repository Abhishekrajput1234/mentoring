import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Registerpage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  // Input handler
  const InputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On form submit
  const registeruser = (e) => {
    e.preventDefault();

    // Live backend URL
    axios
      .post("https://mentor-hub-hri0.onrender.com/registeruser", user)
      .then((res) => {
        alert(res.data.message);

        // Reset form state
        setUser({ name: "", email: "", password: "", role: "" });
        e.target.reset();
      })
      .catch((err) => {
        const msg = err.response?.data?.error || "Something went wrong!";
        alert(msg);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-5">
          Mentee Registration
        </h2>

        <form onSubmit={registeruser} autoComplete="off">
          <div className="mb-3">
            <label className="block text-gray-800 capitalize font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border shadow-xl rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              name="name"
              value={user.name}
              onChange={InputHandler}
              required
            />
          </div>

          <div className="mb-3" autoComplete="off">
            <label className="block text-gray-800 capitalize font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border shadow-xl rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              name="email"
              value={user.email}
              autoComplete="off"
              onChange={InputHandler}
              required
            />
          </div>

          <div className="mb-3" autoComplete="off">
            <label className="block text-gray-800 capitalize font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg shadow-xl focus:ring-2 focus:ring-blue-600 outline-none"
              name="password"
                autoComplete="new-password"
              value={user.password}
              onChange={InputHandler}
              required
            />
          </div>

          <div className="mb-3" autoComplete="off">
            <label className="block text-gray-800 capitalize font-semibold">
              Role
            </label>
            <input
              type="text"
              placeholder="Enter Role"
              className="w-full px-4 py-2 border shadow-xl rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              name="role"
              value={user.role}
              onChange={InputHandler}
              required
            />
          </div>

          <div className="mb-5" autoComplete="off">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded block mx-auto hover:bg-blue-700"
            >
              Register
            </button>
          </div>

          <div className="mb-5 text-center">
            <Link to="/login" className="text-blue-600 hover:underline">
              Already Registered? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
