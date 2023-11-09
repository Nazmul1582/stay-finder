import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import moment from "moment";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const customAxios = useAxios();
  const { currentUser } = useAuth();
  useEffect(() => {
    customAxios
      .get(`/bookings?email=${currentUser.email}`)
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [currentUser?.email, customAxios]);

  const handleDelete = (book) => {
    const currentDate = moment();
    const bookingDate = moment(book.date);
    const remainingDate = bookingDate.diff(currentDate, "days");

    if (remainingDate === 0) {
      return Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "You can't cancel your booking now. Because tomorrow is your booked date. You have to cancel befor 1 day.",
      });
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        customAxios
          .delete(`/bookings/${book._id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              const remaining = bookings.filter(
                (booking) => booking._id !== book._id
              );
              setBookings(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your booking has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err.message,
            });
          });
      }
    });
  };

  const handleUpdateDate = async (id) => {
    const { value: date } = await Swal.fire({
      title: "Update your booking date",
      input: "date",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
      confirmButtonColor: "#36D399"
    });
    if (date) {
      const updatedDate = { date: date };
      customAxios
        .patch(`/bookings/${id}`, updatedDate)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: `Your booking date has been updated to ${date}.`,
              icon: "success",
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
        });
    }
  };

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
            {bookings.length > 0 ? (
              <thead>
                <tr>
                  <th>Booking</th>
                  <th>Prise Per Night</th>
                  <th>Date</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
            ) : (
              <tbody>
                <tr>
                  <td>
                    <h2 className="text-center text-3xl font-bold">
                      You have not any booked room!
                    </h2>
                  </td>
                </tr>
              </tbody>
            )}
            <tbody>
              {/* row */}
              {bookings.map((book) => (
                <tr key={book._id}>
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
                        <div className="font-bold mb-3">{book.name}</div>
                        <Link to={`/review/${book._id}`}>
                          <button className="btn btn-info btn-sm text-xs">
                            Give a review
                          </button>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>${book.pricePerNight}</td>
                  <td>{book.date}</td>
                  <th>
                    {/* <Link to={`/update/${book._id}`}> */}
                    <button
                      onClick={() => handleUpdateDate(book._id)}
                      className="btn btn-success btn-sm text-xs m-2"
                    >
                      Update Date
                    </button>
                    {/* </Link> */}
                    <button
                      onClick={() => handleDelete(book)}
                      className="btn btn-error btn-sm text-xs m-2"
                    >
                      delete
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
