import heroImg from "/src/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative min-h-500px h-60vh md:h-screen w-full flex flex-col justify-center items-center text-white text-center px-4"
    >
      <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter">
        Dachdeckerei <span className="text-red-600">Martin</span>
      </h1>

      <p className="text-red-500 font-semibold text-lg md:text-2xl mt-4">
        Ihr Experte für das Dach
      </p>

      <p className="text-gray-300 text-sm md:text-lg max-w-sm md:max-w-xl mt-2">
        Traditionelle Handwerkskunst trifft moderne Technik. Wir decken Ihre
        Träume.
      </p>

      <button className="mt-10 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-sm transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
        Kontakt Aufnehmen
      </button>

      <div className="absolute bottom-10 animate-bounce hidden md:block">
        <div className="w-1 h-12 bg-linear-to-b from-red-600 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
