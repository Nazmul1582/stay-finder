import { Link } from "react-router-dom";

const Rooms = () => {
  const rooms = [
    {
      _id: 1,
      image: "https://i.ibb.co/g4SSQfL/elegant-hotel-room-with-big-bed.jpg",
      name: "Garden View Bungalow",
      description:
        "Experience the serenity of our Garden View Bungalow. This cozy bungalow offers a private garden view, a queen-size bed, and a tranquil outdoor space.",
      pricePerNight: 199,
      roomSize: "500 sq. ft",
      availability: true,
      images: [
        "garden-view-bungalow-image1.jpg",
        "garden-view-bungalow-image2.jpg",
      ],
      reviews: [],
      specialOffers: [],
    },
    {
      _id: 2,
      image: "https://i.ibb.co/g4SSQfL/elegant-hotel-room-with-big-bed.jpg",
      name: "Garden View Bungalow",
      description:
        "Experience the serenity of our Garden View Bungalow. This cozy bungalow offers a private garden view, a queen-size bed, and a tranquil outdoor space.",
      pricePerNight: 199,
      roomSize: "500 sq. ft",
      availability: true,
      images: [
        "garden-view-bungalow-image1.jpg",
        "garden-view-bungalow-image2.jpg",
      ],
      reviews: [],
      specialOffers: [],
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room._id} className="card bg-base-100 shadow-xl">
              <figure className="relative group">
                <Link to="/room-details">
                  <img src={room.image} alt="image of room" />
                  <div className="absolute inset-0  bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                </Link>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{room.name}</h2>
                {room.reviews && <p>Total reviews: {room.reviews.length}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
