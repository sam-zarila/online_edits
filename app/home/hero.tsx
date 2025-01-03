export default function Hero() {
    return (
      <section className="bg-gray-900 text-white px-10 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side: Text */}
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">
              Best crypto <span className="text-green-400">investing platform</span> for your future.
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Polkadot unites and secures a growing ecosystem of specialized blockchains.
            </p>
            <div className="space-y-2">
              <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
                Get Started
              </button>
              <button className="px-6 py-2 bg-gray-800 text-gray-300 rounded-lg shadow-lg hover:bg-gray-700">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Side: Devices */}
          <div className="md:w-1/2 relative flex justify-center">
            {/* Subtle Light Background for Devices */}
            <div className="absolute -top-16 w-[300px] h-[300px] bg-gradient-to-br from-gray-800 to-gray-700 blur-2xl rounded-full"></div>
  
            <div className="relative flex space-x-4">
              <img
                src="/path-to-device1.png"
                alt="Device 1"
                className="w-40 h-auto shadow-lg rounded-md border border-gray-700"
              />
              <img
                src="/path-to-device2.png"
                alt="Device 2"
                className="w-40 h-auto shadow-lg rounded-md border border-gray-700"
              />
            </div>
          </div>
        </div>
  
        {/* Circle of Intersecting Images */}
       
      </section>
    );
  }
  