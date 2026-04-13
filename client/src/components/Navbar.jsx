import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { isTokenExpired } from "../auth/auth";

const Navbar = () => {
  // ✅ Separate refs
  const mobileMenuRef = useRef();
  const menuButtonRef = useRef();

  const profileRef = useRef();
  const profileButtonRef = useRef();

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (!isTokenExpired()) {
      setIsLoggedIn(true);
    }

    const handleClickOutside = (event) => {
      // ✅ Mobile menu close
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      // ✅ Profile dropdown close
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const navigate = useNavigate();

  const handleSign = function () {
    navigate("/auth/login");
  };

  return (
    <header className="fixed top-0 right-0 left-0 bg-white z-50">
      <div className="flex justify-between items-center gap-4 px-4 md:px-12 py-4 border-b border-gray-200 relative">
        {/* Left */}
        <div className="flex justify-center items-center gap-3">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              ref={menuButtonRef} // ✅ fixed
              className="text-3xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Logo */}
          <div className="text-3xl font-bold">
            <Link
              to="/"
              className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
            >
              Recalit
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="flex justify-center items-center gap-6 ">
          <div className="md:flex justify-center items-center gap-6 hidden text-gray-700 font-medium">
            <Link to="/recall" className="hover:text-purple-500 transition">
              Recall
            </Link>

            <Link to="/journel" className="hover:text-blue-500 transition">
              Journel
            </Link>

            <Link to="/about" className="hover:text-purple-500 transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-blue-500 transition">
              Contact
            </Link>

            <span className="text-gray-300">|</span>
          </div>

          {/* Right */}
          <div>
            {isLoggedIn ? (
              <span
                ref={profileButtonRef} // ✅ fixed
                onClick={() => setShowProfile(!showProfile)}
                className="rounded-full cursor-pointer border border-gray-300 flex justify-center items-center h-9 w-9 bg-gray-100"
              >
                👤
              </span>
            ) : (
              <button
                className="cursor-pointer bg-linear-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-sm hover:opacity-90 transition"
                onClick={handleSign}
              >
                Sign-in
              </button>
            )}
          </div>
        </nav>

        {/* Profile Dropdown */}
        {showProfile && (
          <div
            ref={profileRef} // ✅ fixed
            className="flex flex-col border-gray-300 bg-white rounded border absolute top-18 md:right-12 right-4 min-w-24 px-2 py-1 justify-center items-start text-start shadow-xl cursor-pointer md:cursor-default"
          >
            <span>Profile</span>
            <span>Setting</span>
            <hr className="w-full mt-1" />
            <span className="text-red-500" onClick={handleLogout}>
              Logout
            </span>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          ref={mobileMenuRef} // ✅ fixed
          className="md:hidden absolute bg-white shadow-lg flex flex-col h-screen w-9/12"
        >
          <Link
            to="/recall"
            className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Recall
          </Link>

          <Link
            to="/journel"
            className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Journel
          </Link>

          <Link
            to="/about"
            className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="border-b border-gray-200 px-4 py-4 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;