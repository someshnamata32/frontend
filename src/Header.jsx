import { Link } from "react-router-dom";

function Header({ search, setSearch }) {
  function toggleMode() {
    document.body.classList.toggle("dark-mode");
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-3xl font-bold text-blue-600">
          ShopEasy
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-lg w-80"
        />

        <nav className="flex items-center gap-6">

          <Link
            to="/"
            className="font-semibold hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            to="/product"
            className="font-semibold hover:text-blue-600 transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="font-semibold hover:text-blue-600 transition"
          >
            About
          </Link>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Sign In
          </button>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Sign Up
          </button>

          <button
            onClick={toggleMode}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black"
          >
            Theme
          </button>

        </nav>
      </div>
    </header>
  );
}

export default Header;