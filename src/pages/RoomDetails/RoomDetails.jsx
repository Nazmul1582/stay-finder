import { useLoaderData } from "react-router-dom";
import Review from "./Review";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const room = useLoaderData();
  const customAxios = useAxios();
  const {
    _id,
    image,
    name,
    description,
    pricePerNight,
    roomSize,
    availability,
    reviews,
    images,
    specialOffers,
  } = room;
  const [available, setAvailable] = useState(availability);
  const { currentUser } = useAuth();

  const handleBooking = (event) => {
    event.preventDefault();
    const date = event.target.date.value;

    if (!available) {
      return Swal.fire({
        title: "Oops!",
        text: "No seat is available!",
        icon: "error"
      });
    }

    const booking = {
      email: currentUser.email,
      image,
      name,
      date,
      availability: true,
      pricePerNight,
      description,
    };

    customAxios
      .post(`/bookings`, booking)
      .then((res) => {
        if(res.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "You booked successfully!",
            icon: "success"
          });
        }
        event.target.reset();
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops!",
          text: err.message,
          icon: "error"
        });
      });

    setAvailable(available - 1);

    customAxios
      .patch(`/rooms/${_id}`, {seat: available})
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire({
          title: "Oops!",
          text: err.message,
          icon: "error"
        });
      });
  };

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
                Available Seats:{" "}
                <span className="font-semibold">
                  {available ? available : "unavailable"}
                </span>
              </p>
              <p>
                Price per night:{" "}
                <span className="font-semibold">${pricePerNight}</span>
              </p>
              <p className="text-slate-500 my-6">{description}</p>
              <form onSubmit={handleBooking} className="form-control">
                <div className="input-group">
                  <input
                    name="date"
                    type="date"
                    required
                    className="input input-bordered border-success focus:outline-0"
                  />
                  <button className="btn btn-success">Book Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mt-12 mb-6">{name}</h2>
          <p className="text-slate-500">{description}</p>
          {reviews.length > 0 && (
            <h2 className="text-xl font-bold mt-6 mb-3">Customer Reviews</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.length > 0 &&
              reviews.map((review, index) => (
                <Review review={review} key={index} />
              ))}
          </div>
          {specialOffers.length > 0 && (
            <h2 className="text-xl font-bold mt-6 mb-3">Special Offers!</h2>
          )}
          {specialOffers.length > 0 &&
            specialOffers.map((offer, index) => (
              <div key={index}>
                <p className="text-semibold">
                  {index + 1}. {offer}
                </p>
              </div>
            ))}
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
