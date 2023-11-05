// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      location: "New York, USA",
      image: "john-smith.jpg",
      text: "I had an amazing stay at this hotel. The service was outstanding, and the room was spacious and comfortable. I can't wait to come back!",
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      location: "Los Angeles, USA",
      image: "maria-gonzalez.jpg",
      text: "This hotel exceeded my expectations in every way. The staff was friendly, the amenities were top-notch, and the location was perfect for exploring the city.",
    },
    {
      id: 3,
      name: "David Patel",
      location: "London, UK",
      image: "david-patel.jpg",
      text: "I stayed at this hotel during my business trip, and it was a fantastic experience. The room was clean, and the hotel's proximity to the conference center was very convenient.",
    },
    {
      id: 4,
      name: "Emily Johnson",
      location: "Sydney, Australia",
      image: "emily-johnson.jpg",
      text: "I had a great time at this hotel. The staff was welcoming, the view from my room was breathtaking, and I enjoyed the delicious breakfast every morning.",
    },
    {
      id: 5,
      name: "Luis Ramirez",
      location: "Barcelona, Spain",
      image: "luis-ramirez.jpg",
      text: "My stay at this hotel was exceptional. The rooms were clean, the staff was attentive, and the location was perfect for exploring the city.",
    },
    {
      id: 6,
      name: "Sophia Lee",
      location: "Tokyo, Japan",
      image: "sophia-lee.jpg",
      text: "I had a wonderful experience at this hotel. The service was top-notch, and the room had a beautiful view of the city skyline.",
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
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-base-100 p-6 mx-5 my-10 shadow-xl border border-success rounded-xl shadow-success/20">
                <div className="flex flex-col">
                <div className="text-center mb-10 flex-grow">
                  <BiSolidQuoteAltLeft className="text-5xl mx-auto text-success font-extrabold mb-5" />
                  <p>{item.text}</p>
                </div>
                <div className="mx-auto text-center">
                  <div className="avatar mb-5">
                    <div className="w-20 rounded-full">
                      <img src="https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg" />
                    </div>
                  </div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-400">{item.location}</p>
                </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

export default Testimonial;
