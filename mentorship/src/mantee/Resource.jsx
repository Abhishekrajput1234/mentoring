import { useEffect, useState } from "react";

export default function Resourcepage() {
  const [resourcelist, setResourcelist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://mentor-hub-hri0.onrender.com/resourcelist")
      .then((res) => res.json())
      .then((data) => {
        setResourcelist(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-4 sm:p-8">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6">
        Available Resources
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">
          Loading resources...
        </p>
      )}

      {/* Empty */}
      {!loading && resourcelist.length === 0 && (
        <p className="text-center text-gray-500">
          No resources available.
        </p>
      )}

      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcelist.map((res) => (
          <div
            key={res._id}
            className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {res.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-500 mb-3 capitalize">
                Type: {res.type}
              </p>

              {res.type === "link" ? (
                <a
                  href={res.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-blue-600 font-medium text-sm hover:underline"
                >
                  🔗 Open Resource
                </a>
              ) : (
                <p className="text-gray-700 text-sm leading-relaxed">
                  {res.text}
                </p>
              )}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Program ID: {res.programId}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
