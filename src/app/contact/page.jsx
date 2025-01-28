"use client"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState(false);
  const [message, setMessage] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();

  const validate = () => {
    const newErrors = {};
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) {
      newErrors.message = "Enter your message.";
    }
    if (!formData.fullName) {
      newErrors.fullName = "Enter your name.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        "service_1aj1kz6",
        "template_6mm01ox",
        form.current,
        "jcpSSJ1y1lN1Fd9kl"
      );
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      }
    //    if (isSubmitting === true) {
    //      setErrorMessage(true);
    //      setTimeout(() => {
    //        setErrorMessage(false);
    //      }, 2000);
    //    } else {
    //      setMessage(true);
    //      setTimeout(() => {
    //        setMessage(false); // Clear the message before navigating
          
    //      }, 2000);
    //    }
         
    };

      return (
        <div className="py-12 bg-gray-50">
          {/* <div
            className={` text-center pt-5 font-bold  ${
              errorMessage
                ? "text-red-400"
                : message
                ? "text-green-400"
                : "hidden"
            }`}
          >
            {errorMessage
              ? "Your Cart is empty. Add some items first."
              : message
              ? "Please wait, your items are proceeding for Checkout..."
              : ""}
          </div> */}
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Get in Touch
            </h1>

            <div className="flex flex-col md:flex-row md:gap-12 items-start">
              <div className="bg-white shadow-lg w-full md:w-[30rem] rounded-lg py-8 px-10 flex-1">
                <h2 className="text-2xl font-semibold mb-6">
                  We'd Love to Hear from You
                </h2>
                <p className="text-gray-600 mb-6">
                  Have any questions? Fill out the form below, and we’ll get
                  back to you as soon as possible.
                </p>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Send Message"}
                  </button>
                </form>
                {isSuccess && (
                  <p className="text-green-500 mt-4">
                    Your message has been sent successfully!
                  </p>
                )}
              </div>
              <div className="bg-white shadow-lg rounded-lg p-8 flex-1 mt-8 md:mt-0">
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  If you need immediate assistance, feel free to reach us at the
                  following contact details.
                </p>
                <p className="font-semibold text-gray-700">Customer Support</p>
                <p className="text-gray-600 mb-4">support@yourstore.com</p>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-gray-600 mb-4">+1 234 567 890</p>
                <p className="font-semibold text-gray-700">Address</p>
                <p className="text-gray-600">
                  123 E-Commerce St, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ContactUs;
