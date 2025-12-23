
export default function App(){
  return(<>


<section className="min-h-screen flex items-center bg-linear-to-br from-indigo-50 to-indigo-100">
  <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Left */}
    <div className="text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Find the Mentor <br />
        Who <span className="text-indigo-600">Guides Your Growth</span>
      </h1>

      <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-xl mx-auto md:mx-0">
        Join Mentor Hub today and connect with experienced industry mentors who
        guide you with clarity and real-world insights.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Get Started
        </button>
        <button className="border px-6 py-3 rounded-xl">
          Learn More
        </button>
      </div>
    </div>

    {/* Right */}
    <div className="flex justify-center">
      <img
        src="/image/p9.png"
        alt="Mentor"
        className="w-full max-w-xs sm:max-w-sm md:max-w-lg"
      />
    </div>

  </div>
</section>







<div className="container mx-auto px-4 py-12">
  <h1 className="text-3xl sm:text-4xl font-bold capitalize text-center text-gray-800 mb-12">
    Who We Mentor
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src="/image/pic2.avif" alt="" className="w-full h-52 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          Startup Founders & Entrepreneurs
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base flex-1">
          A complete mentorship program designed to help startup founders build clarity,
          validate ideas, and improve execution.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-1.5 rounded-full w-fit">
          View
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src="/image/pic3.avif" alt="" className="w-full h-52 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          Women Leaders & Entrepreneurs
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base flex-1">
          Mentorship designed for women to grow as confident leaders,
          make strategic decisions, and achieve long-term success.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-1.5 rounded-full w-fit">
          View
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src="/image/pic4.avif" alt="" className="w-full h-52 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          Creatives & Performing Artists
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base flex-1">
          Mentorship designed for creatives to grow confidence and long-term success.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-1.5 rounded-full w-fit">
          View
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src="/image/pic5.avif" alt="" className="w-full h-52 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          Professionals & Executives
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base flex-1">
          A mentorship program designed to help professionals grow leadership skills.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-1.5 rounded-full w-fit">
          View
        </button>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src="/image/pic6.avif" alt="" className="w-full h-52 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          Small Business Owner
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base flex-1">
          Mentorship designed for small business owners to scale sustainably.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-1.5 rounded-full w-fit">
          View
        </button>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
      <img src="/image/pic7.avif" alt="" className="w-full h-52 object-cover" />
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-lg sm:text-xl font-semibold">
          Creators & Digital Personal Brands
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base flex-1">
          Mentorship designed to help creators build strong digital brands.
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-1.5 rounded-full w-fit">
          View
        </button>
      </div>
    </div>

  </div>
</div>



<section className="py-12 sm:py-16 bg-linear-to-b from-gray-900 to-gray-800 text-white">
  <div className="container mx-auto px-4 sm:px-6 text-center">
    
    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
      Our Mentorship Programs
    </h1>

    <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
      Explore our tailored mentorship programs designed to help you grow—whether you're 
      a student, creator, working professional, or entrepreneur.
    </p>

    {/* Cards Grid */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      
      {/* Card 1 */}
      <div className="p-6 bg-gray-700/40 backdrop-blur-md rounded-2xl border border-gray-600 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-lg sm:text-xl font-semibold">
          One-to-One Mentorship
        </h2>
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          Work directly with a dedicated mentor who guides your complete personal 
          and professional growth journey.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-gray-700/40 backdrop-blur-md rounded-2xl border border-gray-600 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-lg sm:text-xl font-semibold">
          Group Mentorship Cohorts
        </h2>
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          Be a part of powerful group learning with peers who share similar goals 
          and challenges.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-gray-700/40 backdrop-blur-md rounded-2xl border border-gray-600 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-lg sm:text-xl font-semibold">
          Creative & Artist Mentorship
        </h2>
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          Ideal for creators, performers, and artists who want guidance on brand 
          building, strategy, and content growth.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-6 bg-gray-700/40 backdrop-blur-md rounded-2xl border border-gray-600 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-lg sm:text-xl font-semibold">
          Startup & Business Roadmap
        </h2>
        <p className="mt-3 text-gray-300 text-sm leading-relaxed">
          A structured 4-week mentorship designed for startups and solopreneurs 
          to learn, grow, and scale their vision.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-10 sm:py-12 bg-blue-500 text-white mt-2">
  <div className="container mx-auto px-4 sm:px-6 text-center">

    <p className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Ready to Transform Your Journey
    </p>

    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
      Join Mentor Hub today and get personalized mentorship from industry experts.
      Take the first step towards achieving your goals and unlocking your potential.
    </p>

    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/apply"
        className="px-6 sm:px-8 py-3 bg-blue-600 hover:bg-blue-700 transition font-semibold rounded-lg"
      >
        Apply Now
      </a>

      <a
        href="/contact"
        className="px-6 sm:px-8 py-3 border border-white hover:bg-white hover:text-black transition font-semibold rounded-lg"
      >
        Contact Us
      </a>
    </div>

  </div>
</section>


{/*Footer*/}

 <footer className="bg-gray-800 text-white py-10">
  <div className="container mx-auto px-4">

    <div className="flex flex-col gap-8 md:flex-row md:justify-between">

      {/* Brand */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold">OOGL Mentor Hub</h1>
        <p className="text-gray-400 mt-2 max-w-sm mx-auto md:mx-0">
          Connecting mentors and mentees worldwide.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white">Home</a>
          </li>
          <li>
            <a href="/about" className="text-gray-400 hover:text-white">About</a>
          </li>
          <li>
            <a href="/programs" className="text-gray-400 hover:text-white">Programs</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>

      {/* Contact / Social */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold mb-3">Contact</h2>
        <p className="text-gray-400">Email: support@mentorhub.com</p>
        <p className="text-gray-400">Phone: +91 1234567890</p>

        <div className="flex justify-center md:justify-start space-x-4 mt-3">
          <a href="#" className="text-gray-400 hover:text-white">FB</a>
          <a href="#" className="text-gray-400 hover:text-white">TW</a>
          <a href="#" className="text-gray-400 hover:text-white">IN</a>
        </div>
      </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
      &copy; 2025 OOGL Mentor Hub. All rights reserved.
    </div>

  </div>
</footer>



  



  </>)
}



