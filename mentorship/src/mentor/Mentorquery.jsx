import axios from "axios";
import { useEffect, useState } from "react";

export default function Mentorquery() {
  const [query, setQuery] = useState([]);
  const [reply, setReply] = useState({});

  useEffect(() => {
    axios
      .get("https://mentor-hub-hri0.onrender.com/query")
      .then((res) => setQuery(res.data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  const sendReply = (id) => {
    const text = reply[id];
    if (!text) return alert("Write a reply first!");

    axios
      .put(`https://mentor-hub-hri0.onrender.com/reply/${id}`, { reply: text })
      .then(() => {
        setQuery((prev) =>
          prev.map((q) => (q._id === id ? { ...q, reply: text } : q))
        );
        setReply((prev) => ({ ...prev, [id]: "" }));
      })
      .catch(() => console.log("Error sending reply"));
  };

  return (
    <div className="p-4 sm:p-8">

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left">
        Mentee Important Queries
      </h1>

      {/* Query List */}
      <div className="space-y-4">
        {query.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-md rounded-xl p-4 border"
          >
            <h2 className="text-base sm:text-lg font-medium">
              {p.question}
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              {new Date(p.createdAt).toLocaleString()}
            </p>

            {/* Reply Section */}
            {p.reply ? (
              <p className="mt-3 text-green-700 font-medium">
                Reply: {p.reply}
              </p>
            ) : (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Write reply..."
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={reply[p._id] || ""}
                  onChange={(e) =>
                    setReply({
                      ...reply,
                      [p._id]: e.target.value,
                    })
                  }
                />
                <button
                  onClick={() => sendReply(p._id)}
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded w-full sm:w-auto"
                >
                  Send Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
