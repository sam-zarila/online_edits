export default function Services() {
    return (
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-400 mb-10">
            Our <span className="text-neon">Services</span> Tailored to Your Needs
          </h2>
          <p className="text-lg sm:text-xl mb-12 text-gray-300">
            We offer a wide range of services designed to optimize your company's audit processes. Let us help you streamline your business and elevate your performance.
          </p>
          <div className="grid md:grid-cols-3 gap-12 sm:gap-6">
            {/* Service 1: Easy Registration */}
            <div className="bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-user-plus"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Easy Registration</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Quickly register your company by providing basic details such as name, industry, and registration information. We’ve made the process seamless and fast.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg mt-4">
                Get Started
              </button>
            </div>
  
            {/* Service 2: Customized Audit Reports */}
            <div className="bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-file-alt"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. Customized Audit Reports</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Receive detailed audit reports tailored specifically to your company’s financial health. Our expert tools help you analyze your business in depth.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg mt-4">
                Learn More
              </button>
            </div>
  
            {/* Service 3: Real-Time Monitoring */}
            <div className="bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Real-Time Monitoring</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Monitor your company's financial performance in real time with our interactive dashboard, giving you insights into your business whenever you need them.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg mt-4">
                Start Monitoring
              </button>
            </div>
  
            {/* Service 4: Secure Data Storage */}
            <div className="bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. Secure Data Storage</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Your company’s sensitive data is protected by state-of-the-art encryption. Our secure storage ensures your audit reports and business information remain private.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg mt-4">
                Learn More
              </button>
            </div>
  
            {/* Service 5: 24/7 Customer Support */}
            <div className="bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">5. 24/7 Customer Support</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Our support team is available 24/7 to assist you with any questions or issues you may have. We’re here to ensure your experience is seamless and enjoyable.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg mt-4">
                Contact Support
              </button>
            </div>
  
            {/* Service 6: Automated Financial Analysis */}
            <div className="bg-gray-800 p-8 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-5xl mb-4 text-green-400">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">6. Automated Financial Analysis</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Our system automatically analyzes your financial data, identifying trends, risks, and opportunities. Get the insights you need to make informed decisions.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg mt-4">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  