import Swal from "sweetalert2";
import Head from "../../layout/Head";
import GoogleMapReact from "google-map-react";

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

  const StayFinder = ({ text }) => <div>{text}</div>;

  return (
    <section className="pb-20 bg-base-100">
      <Head pageTitle="Contact" />
      <div className="h-[300px] relative">
        <img
          src="https://i.ibb.co/t8JnrVb/luxury-hotel-outdoor-pools-turkey.jpg"
          className="h-full w-full object-cover"
          alt="banner image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/60 from-0% to-black/30 to-100%">
          <h2 className="text-white text-center text-5xl font-bold">
            Contact With Us
          </h2>
        </div>
      </div>

      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="shadow-xl shadow-success/30 bg-base-100 border border-success">
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
