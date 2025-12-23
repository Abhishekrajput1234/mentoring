import Sidebarpage from "../mantee/Sidebar";

export default function Menteedashboard() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-blue-100">

      {/* Layout */}
      <div className="flex flex-col md:flex-row">

        {/* Sidebar (Desktop only) */}
        <Sidebarpage />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-8 max-w-6xl mx-auto">

          {/* Welcome Section */}
          <section className="bg-white rounded-2xl shadow p-5 sm:p-10 text-center">
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-800">
              👋 Welcome Mentee!
            </h2>

            <p className="mt-2 text-gray-600 text-sm sm:text-lg">
              Explore programs, access resources, and ask your questions easily.
            </p>

            <div className="flex justify-center mt-6">
              <img
                src="https://files.idyllic.app/files/static/2210512?width=256&optimizer=image"
                alt="Mentee Dashboard"
                className="w-36 sm:w-64"
              />
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
