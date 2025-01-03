// components/Header.js
export default function Header() {
    return (
      <header className="flex justify-between items-center px-10 py-5 bg-black text-white">
        <h1 className="text-xl font-bold">CRYPTO.</h1>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-green-500">Home</a>
          <a href="#services" className="hover:text-green-500">Services</a>
          <a href="#about" className="hover:text-green-500">About</a>
          <a href="#news" className="hover:text-green-500">Whats new?</a>
        </nav>
        <button className="bg-green-500 text-black px-5 py-2 rounded-lg hover:bg-green-600">
          Explore now
        </button>
      </header>
    );
  }
  