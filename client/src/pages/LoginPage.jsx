import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

export default function SignIn() {
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 2000); // 2 seconds
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useContext(LoginContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
    setError("");
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/auth/login`,
        {
          email: form.email,
          password: form.password,
        },
        {
          withCredentials: true,
        },
      );

      const userData = {
        name: response.data.name,
        token: response.data.token,
      };
      localStorage.setItem("data", JSON.stringify(userData));

      setForm({
        email: "",
        password: "",
        remember: false,
      });
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  bg-linear-to-br from-purple-50 via-white to-blue-50 flex flex-col">
      {/* Top Logo */}
      <span
        className="h-16 text-3xl md:text-4xl px-4 flex items-center font-bold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent cursor-pointer"
        onClick={() => navigate("/")}
      >
        Recalit
      </span>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center px-3 sm:px-4">
        <div className="w-full max-w-md bg-white/90   rounded-none sm:rounded-xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full mt-1 px-4 py-2 ${error && "border-red-500"} rounded-lg focus:outline-none border`}
                  required
                />

                {error && (
                  <div className="text-red-500 text-sm mt-2">{error}</div>
                )}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm flex-wrap gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              disabled={loading}
              className="w-full bg-linear-to-r from-purple-500 to-blue-500 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-purple-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
