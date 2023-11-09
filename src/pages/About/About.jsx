import Head from "../../layout/Head";

const About = () => {
  return (
    <section>
      <Head pageTitle="Contact" />
      <div className="h-[300px] relative">
        <img
          src="https://i.ibb.co/t8JnrVb/luxury-hotel-outdoor-pools-turkey.jpg"
          className="h-full w-full object-cover"
          alt="banner image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/80 from-0% to-black/50 to-100%">
          <h2 className="text-white text-center text-5xl font-bold">
            About Us
          </h2>
        </div>
      </div>
      <div className="container mx-auto pt-10 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-success">
            Hotel Story:
          </h2>
          <p className="mt-5 text-gray-400">
            Our hotel was born out of a passion for hospitality and a love for
            creating memorable experiences. The idea sparked during a
            backpacking journey through exotic destinations, where the dream of
            a place that seamlessly blends comfort and adventure came to life.
          </p>

          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-success my-5">
            History:
          </h2>
          <p className="text-gray-400">
            Established in 1992, our hotel started as a humble
            bed-and-breakfast, welcoming travelers from all walks of life. Over
            the years, it has evolved into a luxurious retreat that continues to
            uphold its commitment to exceptional service.
          </p>

          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-success my-5">
            Our Mission:
          </h2>
          <p className="text-gray-400">
            At stay Finder, our mission is to provide not just accommodation,
            but a home away from home. We strive to exceed guest expectations by
            offering personalized service, exquisite amenities, and a warm
            atmosphere that fosters unforgettable moments.
          </p>

          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-success my-5">
            Values:
          </h2>
          <ul className="text-gray-400">
            <li>
              <span className="font-bold text-black">Hospitality:</span> We believe
              in the power of genuine and warm hospitality to create lasting
              connections.
            </li>
            <li>
              <span className="font-bold text-black">Quality:</span> We are
              dedicated to maintaining the highest standards of quality in every
              aspect of our service.
            </li>
            <li>
              <span className="font-bold text-black">Innovation:</span> Embracing
              innovation to enhance the guest experience and stay ahead in the
              ever-evolving hospitality landscape.
            </li>
          </ul>

          <h2 className="text-3xl font-bold underline underline-offset-8 decoration-success my-5">
            Team and Management:
          </h2>
          <p className="text-gray-400">
            Meet the passionate individuals who make{" "}
            <span className="underline underline-offset-4 decoration-success font-bold text-black">Stay Finder</span> a haven
            for travelers: <span className="underline underline-offset-2 decoration-success font-bold text-black">Md. Nazmul Hasan</span>, Founder & CEO: The
            visionary behind it all,{" "}
            <span className="underline underline-offset-2 decoration-success font-bold text-black">Md. Nazmul Hasan</span> is
            committed to making every guest feel the magic of our hospitality.
            Our diverse team brings together expertise in customer service,
            culinary arts, and event planning, ensuring a well-rounded
            experience for our guests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
