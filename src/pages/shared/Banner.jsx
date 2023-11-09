const Banner = ({title}) => {
    return (
        <div className="h-[300px] relative">
        <img
          src="https://i.ibb.co/t8JnrVb/luxury-hotel-outdoor-pools-turkey.jpg"
          className="h-full w-full object-cover"
          alt="banner image"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-r from-black/60 from-0% to-black/30 to-100%">
          <h2 className="text-white text-center text-5xl font-bold">
            {title}
          </h2>
        </div>
      </div>
    );
};

export default Banner;