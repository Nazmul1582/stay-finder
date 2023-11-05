const Hero = () => {
  return (
    <section className="bg-cover bg-center relative" style={{backgroundImage: "url(https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg)"}}>
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="container mx-auto">
        <div className="h-[80vh] grid items-center">
          <div className="text-neutral-content z-10">
            <h1 className="text-4xl font-extrabold mb-3">Discover Your Dream Getaway</h1>
            <h4 className="text-lg font-medium mb-5">Find the Perfect Hotel for Your Next Adventure</h4>
            <button className="btn btn-success">Search Hotels</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
