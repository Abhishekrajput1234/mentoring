import Mentorsidebar from "../mentor/mentorsidebar";

export default function Mentorpage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">

      {/* Layout */}
      <div className="flex flex-col md:flex-row">

        {/* Sidebar */}
        <Mentorsidebar />

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 py-8 flex justify-center">
          <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 max-w-4xl w-full">

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 text-center">
              👋 Welcome Admin!
            </h1>

            <p className="text-center text-base sm:text-lg text-gray-600 mt-2">
              Manage programs, resources & mentee queries — all in one place.
            </p>

            {/* Image */}
            <div className="flex justify-center mt-6">
              <img
                src="https://files.idyllic.app/files/static/2210512?width=256&optimizer=image"
                alt="Admin Dashboard"
                className="w-48 sm:w-72 drop-shadow-lg"
              />
            </div>

            {/* Description */}
            <div className="bg-blue-50 p-4 sm:p-6 rounded-2xl mt-6 border border-blue-200">
              <p className="text-gray-700 text-sm sm:text-lg leading-relaxed text-center">
                This is your central dashboard where you can efficiently manage all programs,
                oversee resources and respond to mentee queries. Stay organized and keep everything
                at your fingertips.
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg">
                Let’s Start 🚀
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
