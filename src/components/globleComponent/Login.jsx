import { useState } from "react";
import { FaUser, FaLock, FaTimes } from "react-icons/fa";

const LoginPage = ({ Xmark = false, closeModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Perform login logic here (e.g., API call or local state update)
    console.log("Logging in with:", formData);
    closeModal(); // Close modal after successful login
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg"
      onClick={closeModal}
    >
      <div
        className="bg-gradient-to-br from-gray-900  overflow-y-auto via-gray-800 to-gray-900 p-6 md:p-10 rounded-lg shadow-xl md:w-full max-w-lg relative text-white border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {Xmark && (
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-all duration-300"
          >
            <FaTimes />
          </button>
        )}

        {/* Header */}
        <h2 className="text-3xl font-bold text-gold text-center mb-6 flex items-center justify-center gap-2">
          <FaUser className="text-gold" /> Login
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              type="text"
              name="username"
              placeholder=""
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 ${
                errors.username ? "border-red-500" : "border-gray-700"
              }`}
            />
          </div>
          {errors.username && (
            <p className="text-red-400 text-sm">{errors.username}</p>
          )}

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" size={16} />
            <input
              type="password"
              name="password"
              placeholder=""
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 ${
                errors.password ? "border-red-500" : "border-gray-700"
              }`}
            />
          </div>
          {errors.password && (
            <p className="text-red-400 text-sm">{errors.password}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-yellow-500 to-yellow-700 text-gray-900 rounded-md font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
