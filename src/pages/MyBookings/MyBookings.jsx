import { AiOutlineClose } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const MyBookings = () => {
  const loadedBookings = useLoaderData();
  console.log(loadedBookings);
  return (
    <section>
      <div>
        <div className="h-[300px] relative">
          <img
            src="https://i.ibb.co/t8JnrVb/luxury-hotel-outdoor-pools-turkey.jpg"
            className="h-full w-full object-cover"
            alt="banner image"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/60 from-0% to-black/30 to-100%">
            <h2 className="text-white text-center text-5xl font-bold">
              My Bookings
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-10 pb-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Booking</th>
                <th>Prise Per Night</th>
                <th>Date</th>
                <th>Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {loadedBookings.map((book) => (
                <tr key={book._id}>
                  <th>
                    <button className="btn btn-circle btn-sm btn-outline">
                      <AiOutlineClose />
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                          <img
                            src={book.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{book.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>${book.pricePerNight}</td>
                  <td>{book.date}</td>
                  <th>
                    <button className="btn btn-success btn-sm mx-2">
                      Update
                    </button>
                    <button className="btn btn-error btn-sm mx-2">
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBookings;
