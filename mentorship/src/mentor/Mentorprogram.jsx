import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Mentorprogram() {
  const [program, setProgram] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
  fetch("https://mentor-hub-hri0.onrender.com/getprogram")
      .then((res) => res.json())
      .then((data) => setProgram(data))
      .catch((err) => console.error("Error fetching programs:", err));
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-semibold mt-10 px-10">
          Manage Programs
        </h1>

        <Link
          to="/add"
          className="bg-blue-600 text-white mt-10 px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          Add Program
        </Link>
      </div>

      <div className="p-3 bg-gray-200">
        <div className="text-3xl font-semibold px-10">
          List of Programs
        </div>
      </div>

      <table className="w-full bg-white shadow mt-10 rounded">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Program Name</th>
            <th className="p-3">Description</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {program.map((res) => (
            <tr key={res._id} className="border-b">
              <td className="p-3">{res.name}</td>
              <td className="p-3">{res.description}</td>
              <td className="p-3 text-blue-400 font-bold">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
