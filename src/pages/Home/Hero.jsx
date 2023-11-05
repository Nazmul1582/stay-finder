const Hero = () => {
  return (
    <section className="bg-cover bg-center relative" style={{backgroundImage: "url(https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg)"}}>
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-60"></div>
      <div className="container mx-auto">
        <div className="h-[80vh] grid place-items-center">
          <div className="max-w-2xl text-center text-neutral-content z-10">
            <h1 className="text-4xl font-extrabold mb-3">Discover Your Dream Getaway</h1>
            <p className="mb-5">Welcome to our hotel booking platform, where your next unforgettable journey begins. Whether you are planning a relaxing beach escape, a city adventure, or a romantic getaway, we have got you covered. Explore a world of possibilities and find the ideal accommodations for your dream vacation.</p>
            <button className="btn btn-success">Search Hotels</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
