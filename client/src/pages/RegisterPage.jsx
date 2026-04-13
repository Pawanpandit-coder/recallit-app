import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const response = await axios.post(`${apiUrl}/auth/register`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      const userData = {
        name: response.data.name,
        token: response.data.token,
      };

      localStorage.setItem("data", JSON.stringify(userData));

      // optional: reset form
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        remember: false,
      });
      navigate("/auth/register/success");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-blue-50 flex flex-col">
      {/* Logo */}
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
            Create your account
          </h2>

          {error && (
            <div className="mb-4 text-red-500 text-sm text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 border  rounded-lg focus:outline-none"
                required
              />
            </div>

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
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center text-sm flex-wrap gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  required
                />
                Accept terms & conditions
              </label>
            </div>

            {/* Button */}
            <button
              disabled={loading}
              className="w-full bg-linear-to-r from-purple-500 to-blue-500 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
            >
              {loading ? "Creating account..." : "Sign Up"}
              {loading && (
                <span className="w-4 h-4 border-3 align-middle mx-1 border-white border-t-transparent rounded-full animate-spin inline-block"></span>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
