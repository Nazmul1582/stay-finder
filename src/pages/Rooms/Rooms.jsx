import { Link, useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import Head from "../../layout/Head";

const Rooms = () => {
  const loadedRooms = useLoaderData();
  const [rooms, setRooms] = useState(loadedRooms)

  const customAxios = useAxios()
  const handleFilter = event => {
    const order = event.target.value;
    customAxios.get(`/rooms?sortField=pricePerNight&sortOrder=${order}`)
    .then(res => {
      setRooms(res.data)
    })
    .catch(err => console.log(err.message))
  }

  return (
    <section className="py-20">
      <Head pageTitle="Rooms" />
      <div className="container mx-auto">

        <div className="form-control mb-20">
          <div className="input-group items-center justify-center">
            <select onChange={handleFilter} className="select select-bordered border-success focus:outline-0 w-full md:w-1/2">
              <option disabled selected>
                Filter by price
              </option>
              <option value="asc">low to height</option>
              <option value="desc">height to low</option>
            </select>
            <button className="btn btn-success">Filter</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room._id} className="card bg-base-100 shadow-xl">
              <figure className="relative group">
                <Link to={`/room-details/${room._id}`}>
                  <img src={room.image} alt="image of room" />
                  <div className="absolute inset-0  bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                </Link>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{room.name}</h2>
                {room.reviews && <p>Total reviews: <span className="font-bold">{room.reviews.length}</span></p>}
                <p>Price Per Night: <span className="font-bold">${room.pricePerNight}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
