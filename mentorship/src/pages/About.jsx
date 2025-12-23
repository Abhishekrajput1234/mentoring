export default function Aboutpage(){
    return(<>
  <section className="relative overflow-hidden bg-gray-950 text-white py-20 md:py-28">

  {/* Background blobs (mobile pe thode light) */}
  <div className="absolute inset-0 hidden sm:block">
    <div className="absolute -top-20 -left-20 h-72 w-72 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-40 -right-20 h-80 w-80 bg-blue-600 opacity-20 rounded-full blur-3xl animate-ping"></div>
    <div className="absolute bottom-10 left-1/2 h-64 w-64 bg-pink-500 opacity-20 rounded-full blur-2xl animate-bounce"></div>
  </div>

  <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
    
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
      About Oogl Mentor Hub
    </h1>

    <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
      Oogl Mentor Hub is a premium mentorship platform guiding founders, women 
      entrepreneurs, creatives, and professionals to clarity and confidence.
    </p>

    <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
      We help you move from confusion to clarity — and from clarity to execution 
      through real-world mentorship.
    </p>

    <button className="mt-8 px-8 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
      Explore Programs
    </button>
  </div>
</section>



<section className="bg-white py-16 text-black">
  <div className="container mx-auto px-6">
    
    {/* Heading */}
    <h2 className="text-4xl font-bold text-center text-gray-800">
      About The Mentor
    </h2>

    <p className="max-w-3xl mx-auto mt-6 text-center text-gray-600 leading-relaxed">
      Ms Alexandra Johnson is a multi-disciplinary professional with over 30 years of experience 
      across business law, entrepreneurship, technology, and the creative industries.
    </p>

    <p className="mt-10 text-3xl font-semibold text-center text-gray-700">
      She brings a rare combination of:
    </p>

    {/* Feature Cards */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
      {[
        "Legal and business expertise",
        "Startup, founder, and international experience",
        "Deep understanding of the creative and entertainment sector",
        "Strategic mentorship for creators",
        "Brand & career development guidance"
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-900 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition transform"
        >
          <p className="font-semibold text-lg">{item}</p>
        </div>
      ))}
      
    </div>
  </div>
</section>


<div class="max-w-4xl mx-auto px-4 py-8">
  <h2 class="text-2xl font-bold mb-6 text-center">Our Mentorship Approach</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
    <div class="bg-blue-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-2">Clear</h3>
      <p class="text-gray-700">Communication is always simple and easy to follow.</p>
    </div>

    <div class="bg-green-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-2">Direct</h3>
      <p class="text-gray-700">Feedback and guidance are straightforward.</p>
    </div>

    <div class="bg-yellow-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-2">Structured</h3>
      <p class="text-gray-700">A clear roadmap ensures consistent progress.</p>
    </div>

    <div class="bg-red-100 p-6 rounded-lg shadow-md">
      <h3 class="text-xl font-semibold mb-2">Results-driven</h3>
      <p class="text-gray-700">Focus is on achieving measurable outcomes.</p>
    </div>
  </div>
</div>

<div className="max-w-5xl mx-auto px-4 py-12 text-center">
  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
    Our Mission
  </h2>
  <p className="text-gray-700 text-base sm:text-xl">
    To empower entrepreneurs, women leaders, creatives, and professionals with clarity and strategy.
  </p>
</div>



<div className="max-w-7xl mx-auto px-4 py-12">
  <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">
    Our Approach
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">
        One-to-One Personalised Mentorship
      </h3>
      <p className="text-gray-700 text-sm">
        Tailored guidance focused on your personal goals and growth journey.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">
        Practical Guidance, Not Theory
      </h3>
      <p className="text-gray-700 text-sm">
        Actionable advice that you can implement immediately.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">
        Strategic Direction You Can Apply Immediately
      </h3>
      <p className="text-gray-700 text-sm">
        Clear strategies that lead to real and measurable results.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">
        Confidential & Professional Environment
      </h3>
      <p className="text-gray-700 text-sm">
        A safe, supportive space for honest discussions and feedback.
      </p>
    </div>

    <div className="bg-purple-50 p-6 rounded-lg shadow-md sm:col-span-2 text-center">
      <h3 className="text-lg font-semibold mb-2">
        Focus on Long-Term Transformation
      </h3>
      <p className="text-gray-700 text-sm">
        Sustainable growth over quick fixes or short-term wins.
      </p>
    </div>

  </div>
</div>



    </>)
}  