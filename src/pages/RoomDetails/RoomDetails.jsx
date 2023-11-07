import { Link } from "react-router-dom";
import Review from "./Review";

const RoomDetails = () => {
  const room = {
    name: "Luxury Spa Suite",
    image: "https://i.ibb.co/rsx9Hbb/hammocks-with-palm-trees.jpg",
    description:
      "Indulge in relaxation and rejuvenation in our Luxury Spa Suite. This spacious suite includes a private spa tub, a king-size bed, and a separate spa lounge.",
    pricePerNight: 349,
    roomSize: "800 sq. ft",
    availability: false,
    images: [
      "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      "https://i.ibb.co/rsx9Hbb/hammocks-with-palm-trees.jpg",
      "https://i.ibb.co/g4SSQfL/elegant-hotel-room-with-big-bed.jpg",
    ],
    reviews: [
      { name: "Robert", rating: 5, comment: "Absolutely loved the spa tub!" },
    ],
    specialOffers: ["Complimentary spa access", "Room service available"],
  };
  const {
    image,
    name,
    description,
    pricePerNight,
    roomSize,
    availability,
    reviews,
    images,
  } = room;
  return (
    <section className="pb-20">
      <div className="py-10">
        <div className="h-[300px] relative">
          <img
            src={image}
            className="h-full w-full object-cover"
            alt="banner image"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/60 from-0% to-black/30 to-100%">
            <h2 className="text-white text-center text-5xl font-bold">
              Room Details
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="col-span-2 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
            <img
              src={image}
              className="rounded-xl w-full"
              alt="service image"
            />

            <div>
            <h2 className="text-3xl font-bold mb-3">{name}</h2>
              <p>
                Room Size: <span className="font-semibold">{roomSize}</span>
              </p>
              <p>
                {" "}
                Available Seat:{" "}
                <span className="font-semibold">
                  {availability ? availability : 0}
                </span>
              </p>
              <p>
                Price per night:{" "}
                <span className="font-semibold">{pricePerNight}</span>
              </p>
              <p className="text-slate-500 my-3">{description}</p>
              <Link to=""><button className="btn btn-success">Book Now</button></Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-12 mb-6">{name}</h2>
          <p className="text-slate-500">{description}</p>
            {reviews && <h2 className="text-xl font-bold mt-6 mb-3">Customer Reviews</h2>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews &&
              reviews.map((review, index) => (
                <Review review={review} key={index} />
              ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {images.map((ele, index) => (
              <img className="rounded-xl" key={index} src={ele} alt="image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
