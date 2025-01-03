

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white px-5 py-10 sm:px-10 sm:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-100 leading-snug">
            Best Audit{" "}
            <span className="text-green-400">investing platform</span> for your
            future.
          </h2>
          <p className="text-base sm:text-lg mb-6 text-gray-300">
            Online audit System  specialized to elevate company performance<br/> financial boost
            
          </p>
          <div className="space-y-3 sm:space-x-4 sm:space-y-0">
            <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-gray-800 text-gray-300 rounded-lg shadow-lg hover:bg-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side: Devices */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* Subtle Light Background for Devices */}
          <div className="absolute -top-16 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-gradient-to-br from-gray-800 to-gray-700 blur-2xl rounded-full"></div>

          <div className="relative flex space-x-2 sm:space-x-4">
            <img
              src="/path-to-device1.png"
              alt="Device 1"
              className="w-28 h-auto sm:w-40 shadow-lg rounded-md border border-gray-700"
            />
            <img
              src="/path-to-device2.png"
              alt="Device 2"
              className="w-28 h-auto sm:w-40 shadow-lg rounded-md border border-gray-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
