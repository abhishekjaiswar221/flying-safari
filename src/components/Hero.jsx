const Hero = () => {
  return (
    <section className="relative h-screen bg-[url('/images/hero-banner.jpg')] bg-cover bg-center">
      <div className="absolute top-1/4 px-6 md:top-1/3 md:px-12 lg:px-16">
        <h1 className="max-w-xl text-3xl text-white md:text-4xl">
          Embark on <span className="pacifico-font">experiences</span> not just
          destinations with <span className="pacifico-font">our trips</span>
        </h1>
      </div>

      <button className="absolute top-1/2 right-0 flex items-center justify-center gap-6 text-white">
        <span className="text-lg">Next</span>
        <div className="h-0.5 w-14 bg-white md:w-20"></div>
      </button>
    </section>
  );
};

export default Hero;
