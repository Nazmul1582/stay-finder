// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Featured = () => {
  const featuredRoomsData = [
    {
      id: 1,
      name: "Deluxe Oceanfront Suite",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Enjoy breathtaking ocean views from our spacious Deluxe Oceanfront Suite. This luxurious suite features a private balcony, a king-size bed, and a separate living area.",
      price: 299,
      roomSize: "600 sq. ft",
      availableSeats: 2,
    },
    {
      id: 2,
      name: "Executive Mountain View Room",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Experience the beauty of the surrounding mountains from our Executive Mountain View Room. Relax in comfort with a queen-size bed and a cozy sitting area.",
      price: 199,
      roomSize: "400 sq. ft",
      availableSeats: 2,
    },
    {
      id: 3,
      name: "Luxury Spa Suite",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Indulge in relaxation and rejuvenation in our Luxury Spa Suite. This spacious suite includes a private spa tub, a king-size bed, and a separate spa lounge.",
      price: 349,
      roomSize: "800 sq. ft",
      availableSeats: 2,
    },
    {
      id: 4,
      name: "Family Villa",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Our Family Villa is perfect for a family getaway. This villa features multiple bedrooms, a fully equipped kitchen, and a private outdoor space.",
      price: 449,
      roomSize: "1,200 sq. ft",
      availableSeats: 4,
    },
    {
      id: 5,
      name: "Penthouse Suite",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Experience the ultimate luxury in our Penthouse Suite. Enjoy stunning city views, a private rooftop terrace, and lavish amenities.",
      price: 599,
      roomSize: "1,000 sq. ft",
      availableSeats: 2,
    },
    {
      id: 6,
      name: "Garden View Bungalow",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Experience the serenity of our Garden View Bungalow. This cozy bungalow offers a private garden view, a queen-size bed, and a tranquil outdoor space.",
      price: 199,
      roomSize: "500 sq. ft",
      availableSeats: 2,
    },
    {
      id: 7,
      name: "Executive Suite",
      image: "https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg",
      description:
        "Upgrade your stay with our Executive Suite. Enjoy city skyline views, a king-size bed, and a spacious work area for maximum comfort.",
      price: 259,
      roomSize: "750 sq. ft",
      availableSeats: 2,
    },
  ];

  return (
    <section className="py-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {featuredRoomsData.map((room) => (
          <SwiperSlide key={room.id} className="my-14">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={room.image} alt="room" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{room.name}</h2>
                <p className="text-sm text-gray-400">{room.description}</p>
                <p>
                  Price: <span className="font-semibold">${room.price} / Night</span>
                </p>
                <p>
                  Room Size: <span className="font-semibold">{room.roomSize}</span>
                </p>
                <p>
                  Available: <span className="font-semibold">{room.availableSeats}</span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success">Book Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Featured;
