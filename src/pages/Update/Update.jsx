import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const Update = () => {
  const room = useLoaderData();
  const {
    _id,
    date,
    image,
    name,
    description,
    pricePerNight,
  } = room;
  const customAxios = useAxios();

  const handleUpdate = (event) => {
    event.preventDefault();
    const newDate = event.target.date.value;
    const updatedDate = {date: newDate}
    
    customAxios.patch(`/bookings/${_id}`, updatedDate)
    .then(res => {
        if(res.data.modifiedCount > 0){
            Swal.fire({
                title: "Good job!",
                text: "You have updated your booking date!",
                icon: "success"
              });
        }
    })
    .catch(err => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
    })
  }

  return (
    <section className="pb-20">
      <div className="h-[300px] relative">
        <img
          src={image}
          className="h-full w-full object-cover"
          alt="banner image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/60 from-0% to-black/30 to-100%">
          <h2 className="text-white text-center text-5xl font-bold">
            Room Update
          </h2>
        </div>
      </div>

      <div className="container mx-auto pt-10">
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
                Price per night:{" "}
                <span className="font-semibold">${pricePerNight}</span>
              </p>
              <p className="text-slate-500 my-6">{description}</p>
              <form onSubmit={handleUpdate} className="form-control">
                <div className="input-group">
                  <input
                    name="date"
                    type="date"
                    required
                    defaultValue={date}
                    className="input input-bordered border-success focus:outline-0"
                  />
                  <button className="btn btn-success">Update Date</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
