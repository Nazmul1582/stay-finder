import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Review = ({ review }) => {
  return (
    <div className="bg-base-100 p-6 shadow-xl border border-success rounded-xl shadow-success/20">
      <div className="flex flex-col">
        <div className="text-center mb-10 flex-grow">
          <BiSolidQuoteAltLeft className="text-5xl mx-auto text-success font-extrabold mb-5" />
          <p>{review.comment}</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="avatar mb-5">
            <div className="w-20 rounded-full">
              <img src="https://i.ibb.co/QQm4qBs/view-pool-hotel-ocean-water.jpg" />
            </div>
          </div>
          <div className="rating">
            {[...Array(review.rating).keys()].map((item) => (
              <input
                key={item}
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            ))}
          </div>
          <p className="font-semibold">{review.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
