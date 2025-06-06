import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Send,
  Loader,
  CheckCircle,
  X,
} from "lucide-react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://api.re-verse.live/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (err) {
      alert("Server error. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <div
        id="Contact"
        className="bg-[#FEFEFE] py-10 px-4 sm:px-6 lg:px-8 w-full border-t-1 border-[#f1f1f1] relative"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your project? Contact us today for a free
              consultation.
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-blue-900">
                Contact Information
              </h2>

              {[
                {
                  icon: <Mail className="w-6 h-6 text-white" />,
                  title: "Email",
                  values: ["contactscasys@gmail.com"],
                },
                {
                  icon: <Phone className="w-6 h-6 text-white" />,
                  title: "Phone",
                  values: ["+91 7300788546", "+91 9031376804"],
                },
                {
                  icon: <MessageSquare className="w-6 h-6 text-white" />,
                  title: "WhatsApp",
                  values: ["+91 7300788546", "+91 9031376804"],
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 transform hover:scale-110 hover:shadow-md cursor-pointer">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    {item.values.map((val, idx) => (
                      <p key={idx} className="text-gray-600">
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social Media Links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() =>
                      window.open("https://www.linkedin.com/company/scasys-tech/")
                    }
                    className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => window.open("https://x.com/Scasys_Tech")}
                    className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => window.open("")}
                    className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://instagram.com/scasys.in/")
                    }
                    className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 sm:mb-8">
                Send Us a Message
              </h2>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    disabled={isLoading}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    rows={4}
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:bg-blue-600"
                >
                  {isLoading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 flex flex-col items-center space-y-4 mx-4 max-w-sm w-full shadow-2xl">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
                <Mail className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Sending your message...
                </h3>
                <p className="text-gray-600 mt-1">
                  Please wait while we process your inquiry
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
  <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl transition-transform duration-300 transform scale-100">
    {/* Close Button */}
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      aria-label="Close modal"
    >
      <X className="w-6 h-6" />
    </button>

    {/* Success Icon */}
    <div className="flex items-center justify-center mb-6">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
    </div>

    {/* Title */}
    <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
      Your Query Has Been Received
    </h2>

    {/* Message Content */}
    <div className="text-gray-700 text-sm leading-relaxed space-y-4 mb-6 text-center">
      <p>
        Thank you for reaching out to <span className="font-semibold text-blue-600">Scasys Technologies</span>. We’ve successfully logged your query.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-left">
        <p className="text-blue-800 font-medium">
          A confirmation email has been sent to your inbox.
        </p>
        <p className="text-blue-600 mt-1">
          Our team typically responds within <span className="font-semibold">24–48 hours</span>.
        </p>
      </div>
    </div>

    {/* Close Button */}
    <button
      onClick={closeModal}
      className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      Close
    </button>
  </div>
</div>

        )}
      </div>
    </>
  );
};

export default GetInTouch;