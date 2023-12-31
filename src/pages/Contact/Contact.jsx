import Swal from "sweetalert2";
import Head from "../../layout/Head";
import GoogleMapReact from "google-map-react";
import { FaLocationDot } from "react-icons/fa6";
import Banner from "../shared/Banner";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    console.log(name, email, phone);
    Swal.fire({
      title: "Thank You!",
      text: "Your information has been submitted successfully.",
      icon: "success",
    });
    form.reset();
  };

  // google map
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 11,
  };

  const StayFinder = ({text}) => <div><FaLocationDot className="text-2xl text-red-500" /> <p className="text-gray-400">{text}</p></div>;

  return (
    <section className="pb-20 bg-base-100">
      <Head pageTitle="Contact" />
      <Banner title="Contact With Us" />

      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="shadow-xl shadow-success/30 bg-base-100 border border-success w-full h-full rounded-xl overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDsR0LvZgT4aTe8Sw4YkfBgVAORFPZipz0",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <StayFinder lat={23.8041} lng={90.4152} text="Stay Finder" />
            </GoogleMapReact>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-xl shadow-success/30 bg-base-100 border border-success">
            <form onSubmit={handleContact} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
