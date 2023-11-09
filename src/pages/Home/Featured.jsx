// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";

const Featured = () => {
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const customAxios = useAxios();
  useEffect(() => {
    customAxios
      .get('/featured-rooms')
      .then((res) => {
        setFeaturedRooms(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }, [customAxios]);

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
        {featuredRooms.map((room) => (
          <SwiperSlide key={room._id} className="my-14">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={room.image} alt="room" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{room.name}</h2>
                <p className="text-sm text-gray-400">{room.description}</p>
                <p>
                  Price:{" "}
                  <span className="font-semibold">
                    ${room.pricePerNight} / Night
                  </span>
                </p>
                <p>
                  Room Size:{" "}
                  <span className="font-semibold">{room.roomSize}</span>
                </p>
                <p>
                  Available Seat:{" "}
                  <span className="font-semibold">{room.availability}</span>
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/room-details/${room._id}`}>
                    <button className="btn btn-success">Book Now</button>
                  </Link>
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
