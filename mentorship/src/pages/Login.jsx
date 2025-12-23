import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Loginpage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: ""
  });

  // Input handler
  const InputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form submit
  const Loginuser = (e) => {
    e.preventDefault();

    // Live backend URL
    axios
      .post("https://mentor-hub-hri0.onrender.com/loginuser", user)
      .then((res) => {
        alert(res.data.message || "Login successful");

        // Navigate to mentee page
        navigate("/mantee");
      })
      .catch((err) => {
        const msg = err.response?.data?.error || "Something went wrong!";
        alert(msg);
      });
  };

  return (
    <div className="flex items-center justify-center mt-5 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Mentee Login
        </h2>

        <form onSubmit={Loginuser}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              name="name"
              value={user.name}
              autoComplete="off"
              onChange={InputHandler}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              name="password"
                 autoComplete="new-password"
              value={user.password}
              
              onChange={InputHandler}
              required
            />
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded block mx-auto hover:bg-blue-700"
            >
              Login
            </button>
          </div>

          <div className="mb-5 text-center">
            <Link to="/register" className="text-blue-600 hover:underline">
              New User? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
