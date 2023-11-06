const SpecialOffers = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 h-full w-full"></div>
      <div className="container mx-auto text-white flex flex-col">
        <div className="z-10 flex justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold">Special Offers and Promotions</h2>
          <p className="mt-3 mb-6 text-gray-300">
            Experience a summer like no other. Book now and enjoy our special
            Summer Escape package with discounts on room rates, complimentary
            breakfast, and beachside activities.
          </p>
          <button className="btn btn-success">Book Now</button>
        </div>
        <div className="bg-success p-5 w-52 h-52 rounded-full grid place-items-center shadow-md shadow-success">
            <div className="text-center font-semibold">
            <p>Up to</p>
            <h2 className="text-7xl font-bold">50%</h2>
            <p>on selected rooms</p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
