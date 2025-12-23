import { useState, useEffect } from "react";
import axios from "axios";

export default function MenteeQueryPage() {
  const [question, setQuestion] = useState("");
  const [allQuery, setAllQuery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mentor-hub-hri0.onrender.com/query")
      .then((res) => {
        setAllQuery(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const submitQuestion = (e) => {
    e.preventDefault();
    if (!question.trim()) return alert("Please write a question");

    axios
      .post("https://mentor-hub-hri0.onrender.com/query", { question })
      .then(() => {
        setQuestion("");
        return axios.get("https://mentor-hub-hri0.onrender.com/query");
      })
      .then((res) => setAllQuery(res.data))
      .catch(() => alert("Something went wrong"));
  };

  return (
    <div className="p-4 sm:p-8 flex flex-col items-center">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mt-6">
        Ask Your Questions
      </h1>

      {/* Ask Question */}
      <div className="mt-8 w-full max-w-xl">
        <div className="bg-white shadow-md rounded-2xl p-5 sm:p-6">
          <form onSubmit={submitQuestion}>
            <label className="text-gray-600 font-medium">
              Ask a Question
            </label>

            <input
              type="text"
              placeholder="Write your question..."
              className="w-full mt-3 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />

            <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl">
              Send Question
            </button>
          </form>
        </div>
      </div>

      {/* Previous Queries */}
      <div className="mt-10 w-full max-w-xl">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Your Previous Queries
        </h2>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">
            Loading queries...
          </p>
        )}

        {/* Empty */}
        {!loading && allQuery.length === 0 && (
          <p className="text-center text-gray-500">
            You haven’t asked any questions yet.
          </p>
        )}

        {allQuery.map((q) => (
          <div
            key={q._id}
            className="bg-white shadow p-4 mb-4 rounded-xl"
          >
            <p className="font-medium text-gray-700">
              {q.question}
            </p>

            <p className="text-xs sm:text-sm text-gray-500">
              {new Date(q.createdAt).toLocaleString()}
            </p>

            {q.reply ? (
              <p className="mt-3 p-2 bg-green-100 text-green-800 rounded">
                <strong>Reply:</strong> {q.reply}
              </p>
            ) : (
              <p className="mt-3 text-yellow-700">
                No reply yet...
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
