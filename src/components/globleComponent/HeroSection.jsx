const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center bg-gray-100 mb-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/thumbnails/hero.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src="/your-logo.png"
          alt="The Souled Store"
          className="w-40 mb-4"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          THE COOLEST <span className="text-black">CASUAL WEAR</span>
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all">
            SHOP MEN
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all">
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
